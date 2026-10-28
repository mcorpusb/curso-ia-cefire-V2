import React, { useState, useRef, useEffect, Suspense, useMemo } from 'react';
import * as THREE from 'three';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { 
  Rocket, Settings2, Play, Pause, RotateCcw, MonitorPlay, 
  GraduationCap, Info, Activity, Maximize2, Layers, AlertTriangle, ChevronRight, Wind
} from 'lucide-react';

// --- CONSTANTES Y CONFIGURACIÓN ---
const COLORS = {
  bg: '#020617', // slate-950
  panel: 'rgba(15, 23, 42, 0.75)', // slate-900 translúcido
  border: 'rgba(51, 65, 85, 0.6)', // slate-700
  cyan: '#22d3ee', // cyan-400
  orange: '#f97316', // orange-500
  blue: '#3b82f6', // blue-500
  text: '#f8fafc', // slate-50
};

// Física (Modelo Educativo)
const GRAVITY = {
  Tierra: 9.81,
  Marte: 3.72,
  Luna: 1.62
};
const BASE_ROCKET_MASS = 50000; // kg
const BASE_MAX_THRUST = 800000; // N
const FUEL_CONSUMPTION_RATE = 150; // kg/s al 100% de empuje

// --- COMPONENTES DE INTERFAZ (UI) ---

const Panel = ({ children, className = '', title, icon: Icon, glow = false }) => (
  <div className={`bg-slate-900/75 backdrop-blur-xl border border-slate-700/60 rounded-xl p-4 shadow-2xl transition-all duration-300 ${glow ? 'shadow-[0_0_20px_rgba(34,211,238,0.15)] border-cyan-500/30' : ''} ${className}`}>
    {title && (
      <div className="flex items-center gap-2 mb-3 border-b border-slate-700/50 pb-2">
        {Icon && <Icon size={18} className="text-cyan-400" />}
        <h3 className="text-sm font-bold text-slate-200 tracking-widest uppercase">{title}</h3>
      </div>
    )}
    {children}
  </div>
);

const Button = ({ onClick, children, variant = 'default', className = '', active = false, disabled = false }) => {
  const baseStyle = "flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ease-in-out border text-sm focus:outline-none uppercase tracking-wide";
  const variants = {
    default: `bg-slate-800/80 border-slate-600 text-slate-200 hover:bg-slate-700 hover:border-cyan-500/50 ${active ? 'bg-slate-700 border-cyan-400 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]' : ''}`,
    primary: "bg-cyan-600/20 border-cyan-500 text-cyan-300 hover:bg-cyan-600/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]",
    danger: "bg-orange-500/20 border-orange-500 text-orange-400 hover:bg-orange-500/40 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]",
    ghost: "bg-transparent border-slate-700 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 hover:border-slate-500"
  };
  
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

const Slider = ({ label, value, min, max, step=1, onChange, unit = '', disabled = false, sublabel }) => (
  <div className="mb-4 group">
    <div className="flex justify-between items-end mb-1">
      <div>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">{label}</span>
        {sublabel && <span className="text-[10px] text-slate-500 block">{sublabel}</span>}
      </div>
      <span className="text-sm font-mono text-cyan-400 font-bold">{value} {unit}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      disabled={disabled}
      className={`w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400 transition-all ${disabled ? 'opacity-50' : ''}`}
    />
  </div>
);

const DataDisplay = ({ label, value, unit, color = 'cyan', highlight = false }) => {
  const colorMap = {
    cyan: 'text-cyan-400',
    orange: 'text-orange-400',
    blue: 'text-blue-400',
    green: 'text-emerald-400',
    red: 'text-rose-400'
  };
  
  return (
    <div className={`flex flex-col p-3 rounded-lg border ${highlight ? 'bg-slate-800/80 border-slate-600' : 'bg-slate-900/50 border-transparent'} transition-colors`}>
      <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">{label}</span>
      <div className="flex items-baseline gap-1">
        <span className={`text-2xl font-mono font-black ${colorMap[color]}`}>{value}</span>
        <span className="text-xs text-slate-400 font-bold">{unit}</span>
      </div>
    </div>
  );
};

const DocenteNote = ({ title, children, type = 'info' }) => {
  const isLaw = type === 'law';
  return (
    <div className={`mt-4 p-4 rounded-xl border backdrop-blur-md animate-fade-in
      ${isLaw ? 'bg-orange-950/30 border-orange-500/50' : 'bg-blue-950/30 border-blue-500/50'}`}>
      <div className="flex items-center gap-2 mb-2">
        {isLaw ? <AlertTriangle size={18} className="text-orange-400" /> : <GraduationCap size={18} className="text-blue-400" />}
        <h4 className={`text-sm font-bold uppercase tracking-wider ${isLaw ? 'text-orange-300' : 'text-blue-300'}`}>{title}</h4>
      </div>
      <div className="text-sm text-slate-300 leading-relaxed space-y-3 font-medium">
        {children}
      </div>
    </div>
  );
};

// --- COMPONENTES 3D (REFACTORIZADO A THREE.JS PURO PARA EVITAR CONFLICTOS CON REACT 19) ---

const ThreeCanvas = ({ 
  activeTab, explodedView, wireframeView, activePart, throttle, flightData, onPartSelect, docenteMode, demoActive 
}) => {
  const mountRef = useRef(null);
  const stateRef = useRef({ activeTab, explodedView, wireframeView, activePart, throttle, flightData, docenteMode, demoActive });
  const labelsRef = useRef({});

  // Sincronizar el estado de React con la referencia mutable para el bucle de renderizado 3D
  useEffect(() => {
    stateRef.current = { activeTab, explodedView, wireframeView, activePart, throttle, flightData, docenteMode, demoActive };
  }, [activeTab, explodedView, wireframeView, activePart, throttle, flightData, docenteMode, demoActive]);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Configuración de Escena
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(COLORS.bg);
    
    const starGeo = new THREE.BufferGeometry();
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const starVerts = [];
    for(let i=0; i<3000; i++) {
      starVerts.push((Math.random()-0.5)*200, (Math.random()-0.5)*200, (Math.random()-0.5)*200);
    }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starVerts, 3));
    scene.add(new THREE.Points(starGeo, starMat));

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(10, 20, 10);
    const backLight = new THREE.DirectionalLight(0x3b82f6, 0.5);
    backLight.position.set(-10, -10, -10);
    scene.add(ambientLight, dirLight, backLight);

    // 2. Construcción de Modelos
    const meshes = {};
    const engineGroup = new THREE.Group();
    const flightGroup = new THREE.Group();
    scene.add(engineGroup, flightGroup);
    meshes.engineGroup = engineGroup;
    meshes.flightGroup = flightGroup;

    // Materiales Base
    const matNorm = new THREE.MeshStandardMaterial({ color: 0x8892b0, metalness: 0.8, roughness: 0.4 });
    const matDark = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.9, roughness: 0.5 });
    const matActv = new THREE.MeshStandardMaterial({ color: 0x22d3ee, metalness: 0.8, roughness: 0.2, emissive: 0x0891b2, emissiveIntensity: 0.5 });

    // --- Motor ---
    meshes.chamber = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.7, 1.5, 32), matNorm.clone());
    meshes.chamber.position.set(0, 0.8, 0);
    meshes.chamber.userData = { id: 'chamber', labelOffset: [1.5, 0, 0] };
    
    meshes.nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 1.8, 2.8, 32, 1, true), matNorm.clone());
    meshes.nozzle.material.side = THREE.DoubleSide;
    meshes.nozzle.position.set(0, -1.2, 0);
    meshes.nozzle.userData = { id: 'nozzle', labelOffset: [2.5, -1, 0] };
    
    const pumpGroup = new THREE.Group();
    pumpGroup.position.set(0, 1.5, 0);
    pumpGroup.userData = { id: 'pumps', labelOffset: [2, 0.5, 0] };
    meshes.pumpGroup = pumpGroup;
    const pGeo = new THREE.TorusGeometry(0.4, 0.2, 16, 32);
    meshes.pumpL = new THREE.Mesh(pGeo, matDark.clone()); meshes.pumpL.rotation.set(0, 0, Math.PI/2); meshes.pumpL.position.set(1, 0, 0);
    meshes.pumpR = new THREE.Mesh(pGeo, matDark.clone()); meshes.pumpR.rotation.set(0, 0, Math.PI/2); meshes.pumpR.position.set(-1, 0, 0);
    pumpGroup.add(meshes.pumpL, meshes.pumpR);
    
    meshes.pipe = new THREE.Mesh(new THREE.SphereGeometry(0.6, 32, 32), matDark.clone());
    meshes.pipe.position.set(0, 2.0, 0);
    meshes.pipe.userData = { id: 'pipes', labelOffset: [1.5, 0.5, 0] };

    meshes.engineFlame = new THREE.Mesh(new THREE.ConeGeometry(1.5, 3, 32), new THREE.MeshBasicMaterial({ color: 0xff6600, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false }));
    meshes.engineFlame.rotation.x = Math.PI; meshes.engineFlame.position.set(0, -2.6, 0);
    
    meshes.engineLight = new THREE.PointLight(0xffaa00, 0, 15);
    meshes.engineLight.position.set(0, -3, 0);

    engineGroup.add(meshes.chamber, meshes.nozzle, pumpGroup, meshes.pipe, meshes.engineFlame, meshes.engineLight);
    const engineParts = [meshes.chamber, meshes.nozzle, pumpGroup, meshes.pipe];

    // --- Plataforma y Cohete ---
    flightGroup.add(new THREE.Mesh(new THREE.CylinderGeometry(12, 14, 1, 64), new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 })));
    const tower = new THREE.Mesh(new THREE.BoxGeometry(1, 10, 1), new THREE.MeshStandardMaterial({ color: 0x991b1b, metalness: 0.6 })); tower.position.set(4, 5, 0);
    const grid = new THREE.GridHelper(100, 100, 0x334155, 0x0f172a); grid.position.y = 0.51;
    flightGroup.add(tower, grid);

    const rocketGroup = new THREE.Group(); rocketGroup.position.set(0, 4, 0);
    meshes.rocketGroup = rocketGroup; flightGroup.add(rocketGroup);
    
    rocketGroup.add(new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 12, 32), new THREE.MeshStandardMaterial({ color: 0xf1f5f9, metalness: 0.3, roughness: 0.7 })).translateY(4));
    rocketGroup.add(new THREE.Mesh(new THREE.ConeGeometry(0.8, 3, 32), new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.6, roughness: 0.4 })).translateY(11.5));
    rocketGroup.add(new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.9, 1.5, 32), new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8, roughness: 0.2 })).translateY(-1));
    for(let i=0; i<4; i++) {
       const finWrapper = new THREE.Group(); finWrapper.rotation.y = (Math.PI/2) * i;
       const fin = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.5, 0.1), new THREE.MeshStandardMaterial({ color: 0x3b82f6 })); fin.position.set(1.1, 0, 0);
       finWrapper.add(fin); rocketGroup.add(finWrapper);
    }
    
    meshes.flightFlame = new THREE.Mesh(new THREE.ConeGeometry(1.2, 4, 32), new THREE.MeshBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false }));
    meshes.flightFlame.rotation.x = Math.PI; meshes.flightFlame.position.set(0, -2.5, 0);
    meshes.flightLight = new THREE.PointLight(0xf97316, 0, 30); meshes.flightLight.position.set(0, -3, 0);
    rocketGroup.add(meshes.flightFlame, meshes.flightLight);

    // 3. Controles e Interacciones
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let isDragging = false, pMouse = { x: 0, y: 0 };
    let camAngle = { azimuth: Math.PI/4, polar: Math.PI/4 };
    let targetRadius = 10, flightTargetY = 8;
    
    const onDown = (e) => { isDragging = true; pMouse = {x: e.clientX, y: e.clientY}; };
    const onUp = () => { isDragging = false; };
    const onMove = (e) => {
        if(isDragging) {
           camAngle.azimuth -= (e.clientX - pMouse.x) * 0.01;
           camAngle.polar -= (e.clientY - pMouse.y) * 0.01;
           camAngle.polar = Math.max(0.1, Math.min(Math.PI/2 - 0.1, camAngle.polar));
           pMouse = {x: e.clientX, y: e.clientY};
        }
    };
    const onWheel = (e) => { targetRadius = Math.max(2, Math.min(60, targetRadius + e.deltaY * 0.02)); };
    const onClick = (e) => {
        const s = stateRef.current;
        if(s.activeTab !== 'motor' && s.activeTab !== 'propulsion') return;
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        
        const intersects = raycaster.intersectObjects([meshes.chamber, meshes.nozzle, meshes.pumpL, meshes.pumpR, meshes.pipe]);
        if(intersects.length > 0) {
           const obj = intersects[0].object;
           onPartSelect(obj === meshes.pumpL || obj === meshes.pumpR ? 'pumps' : obj.userData.id);
        } else {
           onPartSelect(null);
        }
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onDown); window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove); dom.addEventListener('wheel', onWheel);
    dom.addEventListener('click', onClick);

    // 4. Bucle de Animación Físico-Visual
    let frameId;
    const updateMats = (mesh, id) => {
       const s = stateRef.current;
       const isActive = s.activePart === id;
       mesh.material = (isActive ? matActv : (id === 'pumps' || id === 'pipes' ? matDark : matNorm)).clone();
       mesh.material.wireframe = s.wireframeView;
    };

    const animate = () => {
       frameId = requestAnimationFrame(animate);
       const s = stateRef.current;
       const delta = 0.016;
       const isEngine = s.activeTab === 'motor' || s.activeTab === 'propulsion';

       meshes.engineGroup.visible = isEngine;
       meshes.flightGroup.visible = !isEngine;

       if (isEngine) {
          const exp = s.explodedView;
          meshes.chamber.position.y += ((exp ? 2.0 : 0.8) - meshes.chamber.position.y) * 5 * delta;
          meshes.nozzle.position.y += ((exp ? -2.0 : -1.2) - meshes.nozzle.position.y) * 5 * delta;
          meshes.pumpGroup.position.x += ((exp ? 2.0 : 0) - meshes.pumpGroup.position.x) * 5 * delta;
          meshes.pipe.position.y += ((exp ? 3.5 : 2.0) - meshes.pipe.position.y) * 5 * delta;

          if(!isDragging && !s.demoActive) engineGroup.rotation.y += 0.15 * delta;
          if(s.demoActive) camAngle.azimuth += 0.5 * delta;

          updateMats(meshes.chamber, 'chamber'); updateMats(meshes.nozzle, 'nozzle');
          updateMats(meshes.pumpL, 'pumps'); updateMats(meshes.pumpR, 'pumps'); updateMats(meshes.pipe, 'pipes');

          const heat = s.throttle / 100;
          meshes.engineFlame.visible = heat > 0;
          meshes.engineLight.intensity = heat * 10;
          if (heat > 0) {
             meshes.engineFlame.scale.y += (heat * 4 - meshes.engineFlame.scale.y) * 10 * delta;
             meshes.engineFlame.scale.set(1 + heat / 1.5, meshes.engineFlame.scale.y * (1 + (Math.random() - 0.5) * 0.15), 1 + heat / 1.5);
             meshes.engineFlame.material.opacity = 0.5 + Math.random() * 0.5;
             if(s.activePart !== 'chamber' && !s.wireframeView) {
                meshes.chamber.material.emissive.setHex(heat > 0.5 ? 0xff5500 : 0x000000);
                meshes.chamber.material.emissiveIntensity = heat * 0.8;
             }
          }
          targetRadius = 10; flightTargetY = 0;

          // Actualizar Etiquetas 2D
          engineParts.forEach(part => {
             const id = part.userData.id;
             const labelEl = labelsRef.current[id];
             if(labelEl) {
                if(s.docenteMode || s.activePart === id) {
                   labelEl.style.display = 'block';
                   const vector = new THREE.Vector3().copy(part.position);
                   if(part.userData.labelOffset) vector.add(new THREE.Vector3(...part.userData.labelOffset));
                   if(part.isGroup) vector.add(new THREE.Vector3(0,0,0));
                   vector.applyMatrix4(engineGroup.matrixWorld).project(camera);
                   labelEl.style.transform = `translate(-50%, -50%) translate(${(vector.x * .5 + .5) * window.innerWidth}px, ${(vector.y * -.5 + .5) * window.innerHeight}px)`;
                } else labelEl.style.display = 'none';
             }
          });

       } else {
          const vY = s.flightData.altitude > 0 ? Math.pow(s.flightData.altitude, 0.7) * 0.5 + 4 : 4;
          rocketGroup.position.y += (vY - rocketGroup.position.y) * 10 * delta;
          
          const isThrusting = s.flightData.thrust > 0;
          if (isThrusting && s.flightData.altitude < 20000) {
             rocketGroup.position.x = (Math.random() - 0.5) * 0.1;
             rocketGroup.position.z = (Math.random() - 0.5) * 0.1;
          } else {
             rocketGroup.position.x = 0; rocketGroup.position.z = 0;
          }

          meshes.flightFlame.visible = isThrusting;
          meshes.flightLight.intensity = isThrusting ? 8 : 0;
          if (isThrusting) {
             meshes.flightFlame.scale.set(1 + (Math.random() - 0.5) * 0.2, 1 + Math.random() * 0.8, 1 + (Math.random() - 0.5) * 0.2);
             meshes.flightFlame.material.opacity = 0.6 + Math.random() * 0.4;
          }
          if(s.demoActive) camAngle.azimuth += 0.5 * delta;
          
          if(s.flightData.state === 'idle' || s.flightData.state === 'countdown') {
             targetRadius = 25; flightTargetY = 8;
          } else {
             targetRadius = 30; flightTargetY = rocketGroup.position.y;
          }
          Object.values(labelsRef.current).forEach(el => { if(el) el.style.display = 'none'; });
       }

       camera.position.set(targetRadius * Math.sin(camAngle.azimuth) * Math.cos(camAngle.polar), targetRadius * Math.sin(camAngle.polar) + flightTargetY, targetRadius * Math.cos(camAngle.azimuth) * Math.cos(camAngle.polar));
       camera.lookAt(0, flightTargetY, 0);
       renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
       camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
       renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
       cancelAnimationFrame(frameId);
       window.removeEventListener('resize', onResize);
       dom.removeEventListener('mousedown', onDown); window.removeEventListener('mouseup', onUp);
       window.removeEventListener('mousemove', onMove); dom.removeEventListener('wheel', onWheel);
       dom.removeEventListener('click', onClick);
       mountRef.current?.removeChild(renderer.domElement);
       renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className="absolute inset-0 z-0">
       <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {[{id: 'chamber', text: 'CÁMARA DE COMBUSTIÓN'}, {id: 'nozzle', text: 'TOBERA (TUBO DE LAVAL)'}, {id: 'pumps', text: 'TURBOBOMBAS'}, {id: 'pipes', text: 'INYECTORES / VÁLVULAS'}].map(l => (
            <div key={l.id} ref={el => labelsRef.current[l.id] = el}
              className="absolute top-0 left-0 bg-slate-900/80 border border-cyan-500/50 px-2 py-1 rounded text-[10px] text-cyan-300 font-mono font-bold whitespace-nowrap backdrop-blur-sm animate-fade-in hidden transition-opacity"
            >
              {l.text}
            </div>
         ))}
       </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL (APP) ---

export default function App() {
  const [activeTab, setActiveTab] = useState('motor'); // motor, propulsion, launch, lab
  const [docenteMode, setDocenteMode] = useState(false);
  const [demoActive, setDemoActive] = useState(false);

  // Módulo 1: Motor
  const [explodedView, setExplodedView] = useState(false);
  const [wireframeView, setWireframeView] = useState(false);
  const [activePart, setActivePart] = useState(null);

  // Módulo 2: Propulsión
  const [throttle, setThrottle] = useState(0);
  const [mixture, setMixture] = useState(50);
  const [pressure, setPressure] = useState(100);
  const [efficiency, setEfficiency] = useState(90);

  // Módulos 3 & 4: Lanzamiento y Laboratorio
  const [labConfig, setLabConfig] = useState({
    planet: 'Tierra',
    mass: BASE_ROCKET_MASS,
    thrustMult: 1.0
  });
  
  const [flightState, setFlightState] = useState('idle'); // idle, countdown, flight, paused, ended
  const [countdown, setCountdown] = useState(5);
  const [telemetry, setTelemetry] = useState([]);
  const [currentStats, setCurrentStats] = useState({
    altitude: 0, velocity: 0, acceleration: 0, fuel: 100, thrust: 0, time: 0
  });

  // Referencias para la Simulación Física (evita renders excesivos en React)
  const physRef = useRef({
    altitude: 0, velocity: 0, acceleration: 0,
    mass: BASE_ROCKET_MASS, fuelMass: BASE_ROCKET_MASS * 0.8,
    time: 0, isActive: false, lastTime: 0
  });
  const telemetryIntervalRef = useRef(null);
  const requestRef = useRef();
  const demoTimeouts = useRef([]);

  // --- DEMOSTRACIÓN AUTOMÁTICA (WOW MOMENT) ---
  const clearDemo = () => {
    demoTimeouts.current.forEach(clearTimeout);
    demoTimeouts.current = [];
    setDemoActive(false);
  };

  const runDemo = () => {
    clearDemo();
    setDemoActive(true);
    resetFlight();
    setDocenteMode(true);
    
    // Secuencia Cinemática
    setActiveTab('motor');
    demoTimeouts.current.push(setTimeout(() => setExplodedView(true), 2000));
    demoTimeouts.current.push(setTimeout(() => setActivePart('chamber'), 3500));
    demoTimeouts.current.push(setTimeout(() => setActivePart('nozzle'), 5000));
    demoTimeouts.current.push(setTimeout(() => setActivePart(null), 6500));
    demoTimeouts.current.push(setTimeout(() => setExplodedView(false), 7000));
    demoTimeouts.current.push(setTimeout(() => setWireframeView(true), 8000));
    demoTimeouts.current.push(setTimeout(() => setWireframeView(false), 10000));

    demoTimeouts.current.push(setTimeout(() => {
      setActiveTab('propulsion');
      setThrottle(20);
    }, 11000));
    demoTimeouts.current.push(setTimeout(() => setThrottle(60), 13000));
    demoTimeouts.current.push(setTimeout(() => setThrottle(100), 15000));

    demoTimeouts.current.push(setTimeout(() => {
      setActiveTab('launch');
      setThrottle(0);
      startLaunchSequence();
    }, 18000));
    
    demoTimeouts.current.push(setTimeout(() => {
      setDemoActive(false);
    }, 45000));
  };

  // --- MOTOR FÍSICO (VUELO) ---
  const startLaunchSequence = () => {
    if (flightState !== 'idle' && flightState !== 'ended') return;
    resetFlight(false);
    setFlightState('countdown');
    setCountdown(5);
    
    let tick = 5;
    const interval = setInterval(() => {
      tick--;
      setCountdown(tick);
      if (tick === 0) {
        clearInterval(interval);
        ignite();
      }
    }, 1000);
  };

  const ignite = () => {
    setFlightState('flight');
    const totalMass = labConfig.mass;
    physRef.current = {
      altitude: 0, velocity: 0, acceleration: 0,
      mass: totalMass,
      fuelMass: totalMass * 0.8, // 80% masa es combustible
      time: 0,
      isActive: true,
      lastTime: performance.now()
    };
    
    setTelemetry([{ time: 0, altitude: 0, velocity: 0, acceleration: 0 }]);
    requestRef.current = requestAnimationFrame(physicsLoop);
    
    telemetryIntervalRef.current = setInterval(() => {
      if(physRef.current.isActive) updateUITelemetry();
    }, 100); // UI actualiza a 10Hz
  };

  const physicsLoop = (timestamp) => {
    if (!physRef.current.isActive) return;

    const state = physRef.current;
    const dt = (timestamp - state.lastTime) / 1000;
    state.lastTime = timestamp;

    if (dt > 0.1) { 
      requestRef.current = requestAnimationFrame(physicsLoop);
      return; 
    } // Prevenir saltos si la pestaña pierde foco

    state.time += dt;

    // Calcular Empuje
    let thrust = 0;
    if (state.fuelMass > 0) {
      thrust = BASE_MAX_THRUST * labConfig.thrustMult;
      const fuelBurned = FUEL_CONSUMPTION_RATE * labConfig.thrustMult * dt;
      state.fuelMass -= fuelBurned;
      state.mass -= fuelBurned;
    } else if (flightState === 'flight') {
       // Apagado de motor (MECO)
       state.thrust = 0;
    }

    // Calcular Fuerzas
    const gravityForce = state.mass * GRAVITY[labConfig.planet];
    // Resistencia atmosférica (Drag): decae exponencialmente con la altitud, asumiendo atmósfera terrestre simplificada
    const rho = labConfig.planet === 'Tierra' ? 1.225 * Math.exp(-state.altitude / 8000) : (labConfig.planet === 'Marte' ? 0.02 : 0);
    const dragForce = 0.5 * rho * 0.4 * (state.velocity * state.velocity) * Math.sign(state.velocity); // 0.4 es Cd*A aprox
    
    const netForce = thrust - gravityForce - dragForce;
    const acceleration = netForce / state.mass;

    // Integración Euler
    if (state.altitude <= 0 && acceleration < 0) {
      state.velocity = 0;
      state.altitude = 0;
      state.acceleration = 0;
    } else {
      state.velocity += acceleration * dt;
      state.altitude += state.velocity * dt;
      state.acceleration = acceleration;
    }
    
    state.thrust = thrust;

    // Condición de fin de simulación (caída al suelo)
    if (state.altitude < 0 && state.fuelMass <= 0) {
       state.isActive = false;
       state.altitude = 0;
       state.velocity = 0;
       setFlightState('ended');
    } else {
       requestRef.current = requestAnimationFrame(physicsLoop);
    }
  };

  const updateUITelemetry = () => {
    const s = physRef.current;
    const fuelPercent = Math.max(0, (s.fuelMass / (labConfig.mass * 0.8)) * 100);
    
    setCurrentStats({
      altitude: s.altitude, velocity: s.velocity, acceleration: s.acceleration,
      fuel: fuelPercent, thrust: s.thrust, time: s.time
    });
    
    setTelemetry(prev => {
      // Guardar 1 punto por segundo aproximadamente para la gráfica (optimización)
      const lastPoint = prev[prev.length - 1];
      if (!lastPoint || s.time - lastPoint.time >= 0.5) {
        const newData = [...prev, { 
          time: Math.round(s.time*10)/10, 
          altitude: Math.round(s.altitude), 
          velocity: Math.round(s.velocity),
          acceleration: Math.round(s.acceleration * 10) / 10
        }];
        if (newData.length > 200) return newData.slice(newData.length - 200); // Límite de puntos
        return newData;
      }
      return prev;
    });
  };

  const togglePause = () => {
    if (flightState === 'flight') {
      physRef.current.isActive = false;
      setFlightState('paused');
    } else if (flightState === 'paused') {
      physRef.current.lastTime = performance.now();
      physRef.current.isActive = true;
      setFlightState('flight');
      requestRef.current = requestAnimationFrame(physicsLoop);
    }
  };

  const resetFlight = (fullReset = true) => {
    physRef.current.isActive = false;
    cancelAnimationFrame(requestRef.current);
    clearInterval(telemetryIntervalRef.current);
    setFlightState('idle');
    setCountdown(5);
    if (fullReset) {
      setTelemetry([]);
      setCurrentStats({ altitude: 0, velocity: 0, acceleration: 0, fuel: 100, thrust: 0, time: 0 });
    }
  };

  useEffect(() => {
    return () => {
      cancelAnimationFrame(requestRef.current);
      clearInterval(telemetryIntervalRef.current);
      clearDemo();
    };
  }, []);

  // --- RENDERIZADO DEL CANON 3D ---
  const renderCanvas = () => {
    return (
      <div className="absolute inset-0 bg-slate-950">
        <ThreeCanvas 
           activeTab={activeTab}
           explodedView={explodedView}
           wireframeView={wireframeView}
           activePart={activePart}
           throttle={activeTab === 'propulsion' ? throttle : 0}
           flightData={{...currentStats, state: flightState}}
           onPartSelect={(part) => setActivePart(activePart === part ? null : part)}
           docenteMode={docenteMode}
           demoActive={demoActive}
        />
        
        {/* Efecto de Cuenta Atrás Visual */}
        {flightState === 'countdown' && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
            <span key={countdown} className="text-[15rem] font-black text-orange-500 animate-pulse-fast drop-shadow-[0_0_50px_rgba(249,115,22,1)] opacity-80">
              {countdown}
            </span>
          </div>
        )}
      </div>
    );
  };

  // --- DATOS DERIVADOS PARA MÓDULOS ---
  const propThrust = (throttle / 100) * BASE_MAX_THRUST * (efficiency / 100);
  const propFlow = (throttle / 100) * FUEL_CONSUMPTION_RATE;
  const propTemp = throttle > 0 ? 1200 + (throttle * 18) * (pressure / 100) : 20;
  const propVexit = throttle > 0 ? 2500 + (efficiency * 10) : 0;
  
  const getPartInfo = () => {
    switch(activePart) {
      case 'chamber': return "Donde el combustible y el oxidante se mezclan y queman a altísimas presiones y temperaturas (hasta 3000°C).";
      case 'nozzle': return "Diseño convergente-divergente (Laval) que acelera los gases de escape a velocidades supersónicas, maximizando el empuje.";
      case 'pumps': return "Turbomaquinaria que inyecta propelentes a la cámara venciendo su inmensa presión interna. Giran a decenas de miles de RPM.";
      case 'pipes': return "Red compleja de válvulas e inyectores que atomizan la mezcla para una combustión eficiente y estable.";
      default: return "Haz clic en los componentes del modelo 3D para aislar su función o utiliza los controles de visualización.";
    }
  };

  return (
    <div className="h-screen w-full bg-slate-950 text-slate-200 font-sans overflow-hidden flex flex-col selection:bg-cyan-500/30">
      {/* CABECERA (HEADER) */}
      <header className="h-16 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl flex items-center justify-between px-6 z-40 shrink-0 shadow-lg">
        <div className="flex items-center gap-4">
          <div className="bg-cyan-500/10 p-2 rounded-lg border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <Rocket className="text-cyan-400" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              ROCKET LAB 3D
            </h1>
            <p className="text-[10px] text-slate-400 tracking-[0.3em] uppercase font-bold">Centro de Simulación Aeroespacial</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-3 cursor-pointer group">
            <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${docenteMode ? 'text-blue-400 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]' : 'text-slate-500 group-hover:text-slate-300'}`}>
              Modo Docente
            </span>
            <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out border ${docenteMode ? 'bg-blue-600/20 border-blue-500' : 'bg-slate-800 border-slate-600'}`}>
              <div className={`bg-slate-200 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${docenteMode ? 'translate-x-6 shadow-[0_0_10px_rgba(255,255,255,0.8)]' : ''}`} />
            </div>
          </label>
          
          <div className="w-px h-8 bg-slate-700 mx-2"></div>
          
          <Button 
            variant={demoActive ? 'danger' : 'primary'} 
            onClick={demoActive ? clearDemo : runDemo}
            className={`font-bold ${!demoActive && 'animate-pulse'}`}
          >
            {demoActive ? <Pause size={18} /> : <MonitorPlay size={18} />}
            {demoActive ? 'INTERRUMPIR DEMO' : 'DEMOSTRACIÓN WOW'}
          </Button>
        </div>
      </header>

      {/* ÁREA PRINCIPAL */}
      <div className="flex flex-1 relative overflow-hidden">
        
        {/* NAVEGACIÓN LATERAL */}
        <aside className="w-72 bg-slate-900/80 border-r border-slate-800 z-30 flex flex-col p-4 gap-3 backdrop-blur-md shadow-2xl">
          <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 mt-4 px-2">Paneles de Control</div>
          {[
            { id: 'motor', icon: Layers, label: '1. Explorador 3D' },
            { id: 'propulsion', icon: Settings2, label: '2. Propulsión' },
            { id: 'launch', icon: Rocket, label: '3. Lanzamiento' },
            { id: 'lab', icon: Activity, label: '4. Laboratorio' },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); if(flightState !== 'idle' && item.id !== 'launch' && item.id !== 'lab') resetFlight(); }}
              className={`flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 text-sm font-bold uppercase tracking-wider ${
                activeTab === item.id 
                  ? 'bg-gradient-to-r from-cyan-900/40 to-slate-800/40 text-cyan-300 border border-cyan-500/50 shadow-[inset_4px_0_0_rgba(34,211,238,1)]' 
                  : 'text-slate-400 hover:bg-slate-800/80 hover:text-slate-200 border border-transparent hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} className={activeTab === item.id ? "text-cyan-400" : "text-slate-500"} />
                {item.label}
              </div>
              {activeTab === item.id && <ChevronRight size={16} className="text-cyan-500" />}
            </button>
          ))}
          
          <div className="mt-auto">
            {docenteMode && (
              <div className="mb-4 bg-blue-950/20 border border-blue-900/50 p-3 rounded-lg flex items-start gap-3">
                <Info size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-blue-200/80 leading-relaxed font-medium">
                  El <strong className="text-blue-300">Modo Docente</strong> activa superposiciones didácticas. Úsalo para conectar la simulación interactiva con los currículos de física y tecnología.
                </p>
              </div>
            )}
            
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Estado del Sistema</span>
              </div>
              <div className="text-xs font-mono text-slate-400 space-y-2">
                <div className="flex justify-between"><span>Motor Render:</span> <span className="text-cyan-400">WebGL 2.0</span></div>
                <div className="flex justify-between"><span>Físicas FPS:</span> <span className="text-cyan-400">60 Hz</span></div>
                <div className="flex justify-between"><span>Telemetría:</span> <span className="text-cyan-400">En línea</span></div>
              </div>
            </div>
          </div>
        </aside>

        {/* CONTENEDOR 3D Y SUPERPOSICIONES (UI) */}
        <main className="flex-1 relative">
          {renderCanvas()}
          
          <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between z-20">
            
            {/* TÍTULO SUPERIOR */}
            <div className="flex justify-start">
               <Panel className="pointer-events-auto border-t-2 border-t-cyan-500" glow>
                 <h2 className="text-xl font-black text-white tracking-widest uppercase flex items-center gap-3">
                    {activeTab === 'motor' && 'Análisis de Motor Líquido'}
                    {activeTab === 'propulsion' && 'Simulador Térmico y Propulsivo'}
                    {activeTab === 'launch' && 'Centro de Control de Misión (MCC)'}
                    {activeTab === 'lab' && 'Laboratorio de Mecánica Orbital'}
                 </h2>
               </Panel>
            </div>

            {/* PANELES DE CONTROL INFERIORES / LATERALES */}
            <div className="grid grid-cols-12 gap-6 items-end">
              
              {/* --- MÓDULO 1: EXPLORADOR 3D --- */}
              {activeTab === 'motor' && (
                <>
                  <div className="col-span-4 col-start-9 pointer-events-auto flex flex-col gap-4">
                    <Panel title="Controles de Visualización" icon={Maximize2}>
                      <div className="flex flex-col gap-3">
                        <Button active={explodedView} onClick={() => setExplodedView(!explodedView)}>
                          Vista Explosionada
                        </Button>
                        <Button active={wireframeView} onClick={() => setWireframeView(!wireframeView)}>
                          Análisis de Rayos X (Malla)
                        </Button>
                        {activePart && (
                          <Button variant="ghost" onClick={() => setActivePart(null)} className="mt-2 text-xs">
                            Restablecer Selección
                          </Button>
                        )}
                      </div>
                    </Panel>
                    
                    <Panel title="Datos del Componente" className="min-h-[120px]">
                      <p className="text-sm text-slate-300 leading-relaxed font-medium">
                        {getPartInfo()}
                      </p>
                    </Panel>

                    {docenteMode && (
                      <DocenteNote title="Aplicación Pedagógica">
                        La vista explosionada es fundamental en ingeniería para comprender el ensamblaje. Pide a los alumnos que identifiquen la ruta que sigue el combustible desde las bombas hasta salir por la tobera.
                      </DocenteNote>
                    )}
                  </div>
                </>
              )}

              {/* --- MÓDULO 2: PROPULSIÓN --- */}
              {activeTab === 'propulsion' && (
                <>
                  <div className="col-span-4 pointer-events-auto flex flex-col gap-4">
                    <Panel title="Parámetros de Entrada" icon={Settings2}>
                      <Slider 
                        label="Acelerador (Válvula Principal)" sublabel="Regula el flujo másico total."
                        value={throttle} min={0} max={100} 
                        onChange={setThrottle} unit="%" 
                      />
                      <Slider 
                        label="Presión de Cámara" sublabel="Afecta a la expansión de los gases."
                        value={pressure} min={50} max={150} 
                        onChange={setPressure} unit="bar" 
                      />
                      <Slider 
                        label="Eficiencia Térmica" sublabel="Pérdidas de calor y fricción."
                        value={efficiency} min={70} max={100} 
                        onChange={setEfficiency} unit="%" 
                      />
                    </Panel>
                    
                    {docenteMode && (
                      <DocenteNote title="Tercera Ley de Newton" type="law">
                        El motor expulsa masa a alta velocidad en una dirección (Acción). Por el principio de conservación del momento, esto genera una fuerza de igual magnitud en dirección opuesta (Reacción), empujando el cohete hacia arriba.
                      </DocenteNote>
                    )}
                  </div>
                  
                  <div className="col-span-4 col-start-9 pointer-events-auto flex flex-col gap-4">
                    <Panel title="Telemetría de Banco de Pruebas" icon={Activity} glow={throttle > 0}>
                      <div className="grid grid-cols-2 gap-4">
                        <DataDisplay label="Empuje Est." value={(propThrust / 1000).toFixed(1)} unit="kN" highlight={throttle>0} />
                        <DataDisplay label="Flujo Másico" value={propFlow.toFixed(1)} unit="kg/s" color="orange" />
                        <DataDisplay label="Temperatura" value={Math.floor(propTemp)} unit="°C" color="orange" />
                        <DataDisplay label="Vel. Escape" value={Math.floor(propVexit)} unit="m/s" color="blue" />
                      </div>
                      
                      {/* Indicador de Estabilidad */}
                      <div className="mt-5 pt-4 border-t border-slate-800">
                        <div className="flex justify-between text-[10px] uppercase font-bold text-slate-400 mb-2">
                          <span>Estabilidad de Combustión</span>
                          <span className={pressure > 140 ? 'text-red-400' : 'text-emerald-400'}>
                            {pressure > 140 ? 'CRÍTICA' : throttle > 0 ? 'NOMINAL' : 'INACTIVA'}
                          </span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-300 ${throttle === 0 ? 'bg-slate-600' : pressure > 140 ? 'bg-red-500 animate-pulse' : 'bg-emerald-500'}`} 
                            style={{ width: throttle === 0 ? '0%' : `${(pressure / 150) * 100}%` }}
                          />
                        </div>
                      </div>
                    </Panel>
                  </div>
                </>
              )}

              {/* --- MÓDULOS 3 y 4: LANZAMIENTO Y LABORATORIO --- */}
              {(activeTab === 'launch' || activeTab === 'lab') && (
                <>
                  <div className="col-span-3 pointer-events-auto flex flex-col gap-4">
                    
                    {activeTab === 'lab' && flightState === 'idle' && (
                       <Panel title="Diseño de Experimento" icon={Info} className="border-orange-500/50" glow>
                         <div className="mb-5">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">A. Entorno (Gravedad)</span>
                            <div className="flex gap-2">
                              {Object.keys(GRAVITY).map(planet => (
                                <Button 
                                  key={planet}
                                  active={labConfig.planet === planet}
                                  onClick={() => setLabConfig({...labConfig, planet})}
                                  className="flex-1 text-xs px-2 py-2"
                                >
                                  {planet}
                                </Button>
                              ))}
                            </div>
                         </div>
                         <Slider 
                           label="B. Masa Inicial" 
                           value={labConfig.mass} min={10000} max={100000} step={5000}
                           onChange={(v) => setLabConfig({...labConfig, mass: v})} unit="kg" 
                         />
                         <Slider 
                           label="C. Potencia del Motor" 
                           value={Math.round(labConfig.thrustMult * 100)} min={50} max={150} step={10}
                           onChange={(v) => setLabConfig({...labConfig, thrustMult: v/100})} unit="%" 
                         />
                       </Panel>
                    )}

                    <Panel className="bg-slate-950/90 shadow-2xl p-6">
                      {flightState === 'idle' || flightState === 'ended' ? (
                         <Button variant="primary" onClick={startLaunchSequence} className="w-full py-5 text-xl font-black tracking-widest shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]">
                           INICIAR LANZAMIENTO
                         </Button>
                      ) : (
                         <div className="flex gap-3">
                           {flightState === 'flight' || flightState === 'paused' ? (
                             <Button variant="default" onClick={togglePause} className="flex-1 py-4 border-slate-500">
                               {flightState === 'flight' ? <><Pause size={18}/> PAUSAR</> : <><Play size={18}/> REANUDAR</>}
                             </Button>
                           ) : null}
                           <Button variant="ghost" onClick={() => resetFlight()} className="flex-1 py-4 border-red-500/30 text-red-400 hover:bg-red-900/30">
                             <RotateCcw size={18} /> ABORTAR
                           </Button>
                         </div>
                      )}
                    </Panel>

                    {docenteMode && activeTab === 'lab' && (
                      <DocenteNote title="Dinámica: Predicción">
                        Pregunta: Si el empuje es constante y lanzamos desde la Luna (g=1.62 m/s²), ¿cómo será la aceleración inicial comparada con la Tierra (g=9.81 m/s²)? 
                        <br/><br/>
                        Fórmula: <span className="font-mono text-cyan-300 font-black tracking-wider block mt-1 bg-slate-900/50 p-2 rounded text-center">a = (F_empuje - m·g) / m</span>
                      </DocenteNote>
                    )}
                  </div>

                  {/* Panel de Telemetría (Dashboards) */}
                  <div className="col-span-9 pointer-events-auto grid grid-cols-12 gap-4">
                    <Panel title="Datos de Vuelo en Tiempo Real" className="col-span-4" icon={Activity} glow={flightState==='flight'}>
                       <div className="space-y-4">
                          <DataDisplay label="Tiempo de Misión" value={currentStats.time.toFixed(1)} unit="T+ s" highlight />
                          <DataDisplay label="Altitud (ASL)" value={Math.floor(currentStats.altitude)} unit="m" color="blue" />
                          <DataDisplay label="Velocidad Rel." value={Math.floor(currentStats.velocity)} unit="m/s" color="cyan" />
                          <DataDisplay label="Aceleración Neta" value={currentStats.acceleration.toFixed(2)} unit="m/s²" color="orange" />
                       </div>
                       
                       <div className="mt-5 pt-4 border-t border-slate-800">
                          <div className="flex justify-between text-[10px] uppercase font-bold text-slate-400 mb-2">
                            <span>Propelente Restante</span>
                            <span className="text-cyan-300">{Math.floor(currentStats.fuel)}%</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden shadow-inner">
                            <div 
                              className={`h-full ${currentStats.fuel > 20 ? 'bg-cyan-500' : 'bg-red-500 animate-pulse'} transition-all duration-300`} 
                              style={{ width: `${currentStats.fuel}%` }}
                            />
                          </div>
                       </div>
                    </Panel>
                    
                    <Panel title="Perfil de Ascenso" className="col-span-8 bg-slate-900/80">
                      <div className="h-64 w-full relative">
                        {telemetry.length === 0 && (
                          <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm font-bold uppercase tracking-widest">
                            Esperando telemetría...
                          </div>
                        )}
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={telemetry} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                              <linearGradient id="colorAlt" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                              </linearGradient>
                              <linearGradient id="colorVel" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                            <XAxis 
                              dataKey="time" 
                              stroke="#64748b" 
                              tick={{fill: '#64748b', fontSize: 11, fontWeight: 'bold'}} 
                              type="number"
                              domain={['dataMin', 'dataMax']}
                              tickFormatter={(t) => `T+${Math.floor(t)}`}
                            />
                            <YAxis 
                              yAxisId="left"
                              stroke="#3b82f6" 
                              tick={{fill: '#3b82f6', fontSize: 11, fontWeight: 'bold'}}
                              tickFormatter={(v) => v > 1000 ? `${(v/1000).toFixed(1)}k` : v}
                            />
                            <YAxis 
                              yAxisId="right" orientation="right"
                              stroke="#22d3ee" 
                              tick={{fill: '#22d3ee', fontSize: 11, fontWeight: 'bold'}}
                            />
                            <Tooltip 
                              contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px', fontWeight: 'bold' }}
                              itemStyle={{ color: '#22d3ee' }}
                              labelFormatter={(label) => `T+ ${label}s`}
                            />
                            <Area yAxisId="left" type="monotone" dataKey="altitude" name="Altitud (m)" stroke="#3b82f6" strokeWidth={3} fill="url(#colorAlt)" isAnimationActive={false} />
                            <Area yAxisId="right" type="monotone" dataKey="velocity" name="Velocidad (m/s)" stroke="#22d3ee" strokeWidth={2} fill="url(#colorVel)" isAnimationActive={false} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex gap-6 mt-4 justify-center">
                        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500"></div><span className="text-xs font-bold text-slate-400">Altitud (Eje Izq.)</span></div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-cyan-400"></div><span className="text-xs font-bold text-slate-400">Velocidad (Eje Der.)</span></div>
                      </div>
                    </Panel>
                  </div>
                </>
              )}
              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}