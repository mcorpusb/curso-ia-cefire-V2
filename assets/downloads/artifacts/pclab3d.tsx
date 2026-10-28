import React, { useState, useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { 
  Cpu, HardDrive, MonitorPlay, Maximize2, Settings, Power, 
  AlertTriangle, GraduationCap, Info, Activity, Layers, 
  CheckCircle2, XCircle, ChevronRight, Wrench, Zap
} from 'lucide-react';

// --- CONSTANTES Y CONFIGURACIÓN ---
const COLORS = {
  bg: '#020617', // slate-950
  panel: 'rgba(15, 23, 42, 0.85)',
  border: 'rgba(51, 65, 85, 0.6)',
  cyan: '#22d3ee',
  orange: '#f97316',
  green: '#10b981',
  red: '#ef4444',
  text: '#f8fafc',
};

// Inventario de Componentes
const INVENTORY = {
  cpus: [
    { id: 'cpu_intel', name: 'Intel Core i5-13600K', socket: 'LGA1700', power: 125, type: 'cpu' },
    { id: 'cpu_amd', name: 'AMD Ryzen 5 7600X', socket: 'AM5', power: 105, type: 'cpu' }
  ],
  motherboards: [
    { id: 'mb_z690', name: 'Z690 AORUS Elite', socket: 'LGA1700', ramType: 'DDR5', type: 'mb' },
    { id: 'mb_b650', name: 'B650E ROG Strix', socket: 'AM5', ramType: 'DDR5', type: 'mb' },
    { id: 'mb_b450', name: 'B450 Tomahawk', socket: 'AM4', ramType: 'DDR4', type: 'mb' } // Trampa para averías
  ],
  rams: [
    { id: 'ram_ddr5', name: '32GB (2x16) DDR5 6000MHz', ramType: 'DDR5', power: 10, type: 'ram' },
    { id: 'ram_ddr4', name: '16GB (2x8) DDR4 3200MHz', ramType: 'DDR4', power: 8, type: 'ram' }
  ],
  gpus: [
    { id: 'gpu_4070', name: 'RTX 4070 Ti', power: 285, length: 300, type: 'gpu' },
    { id: 'gpu_3060', name: 'RTX 3060', power: 170, length: 240, type: 'gpu' }
  ],
  psus: [
    { id: 'psu_850', name: '850W 80+ Gold Modular', wattage: 850, type: 'psu' },
    { id: 'psu_450', name: '450W 80+ Bronze', wattage: 450, type: 'psu' } // Trampa de consumo
  ],
  storage: [
    { id: 'ssd_nvme', name: '1TB NVMe PCIe 4.0', power: 5, type: 'storage' },
    { id: 'hdd_sata', name: '2TB HDD SATA 7200rpm', power: 15, type: 'storage' },
    { id: 'none', name: 'Ninguno (Sin SO)', power: 0, type: 'storage'}
  ]
};

// --- COMPONENTES DE INTERFAZ (UI) ---

const Panel = ({ children, className = '', title, icon: Icon, glow = false, borderColor = 'slate' }) => {
  const borderColors = {
    slate: 'border-slate-700/60',
    cyan: 'border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.15)]',
    orange: 'border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.15)]',
    red: 'border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.15)]',
    green: 'border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
  };

  return (
    <div className={`bg-slate-900/85 backdrop-blur-xl border rounded-xl p-4 transition-all duration-300 ${borderColors[borderColor]} ${className}`}>
      {title && (
        <div className="flex items-center gap-2 mb-3 border-b border-slate-700/50 pb-2">
          {Icon && <Icon size={18} className="text-cyan-400" />}
          <h3 className="text-sm font-bold text-slate-200 tracking-widest uppercase">{title}</h3>
        </div>
      )}
      {children}
    </div>
  );
};

const Button = ({ onClick, children, variant = 'default', className = '', active = false, disabled = false }) => {
  const baseStyle = "flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-bold transition-all duration-200 ease-in-out border text-sm focus:outline-none uppercase tracking-wider";
  const variants = {
    default: `bg-slate-800/80 border-slate-600 text-slate-200 hover:bg-slate-700 hover:border-cyan-500/50 ${active ? 'bg-slate-700 border-cyan-400 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]' : ''}`,
    primary: "bg-cyan-600/20 border-cyan-500 text-cyan-300 hover:bg-cyan-600/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]",
    success: "bg-emerald-600/20 border-emerald-500 text-emerald-300 hover:bg-emerald-600/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]",
    danger: "bg-red-500/20 border-red-500 text-red-400 hover:bg-red-500/40 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]",
    ghost: "bg-transparent border-slate-700 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 hover:border-slate-500"
  };
  
  return (
    <button onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed grayscale' : ''} ${className}`}>
      {children}
    </button>
  );
};

const DocenteNote = ({ title, children, type = 'info' }) => {
  const styles = {
    info: 'bg-blue-950/30 border-blue-500/50 text-blue-300',
    law: 'bg-purple-950/30 border-purple-500/50 text-purple-300',
    warning: 'bg-orange-950/30 border-orange-500/50 text-orange-300'
  };
  return (
    <div className={`mt-4 p-4 rounded-xl border backdrop-blur-md animate-fade-in ${styles[type].split(' ')[0]} ${styles[type].split(' ')[1]}`}>
      <div className="flex items-center gap-2 mb-2">
        <GraduationCap size={18} className={styles[type].split(' ')[2]} />
        <h4 className={`text-sm font-bold uppercase tracking-wider ${styles[type].split(' ')[2]}`}>{title}</h4>
      </div>
      <div className="text-sm text-slate-300 leading-relaxed space-y-2 font-medium">
        {children}
      </div>
    </div>
  );
};

// --- MOTOR 3D (THREE.JS PURO) ---

const ThreeCanvas = ({ 
  activeTab, explodedView, activePart, onPartSelect, isPoweredOn, 
  dataFlowActive, airflowActive, pcConfig, demoActive, errorScenario 
}) => {
  const mountRef = useRef(null);
  // Refs mutables para sincronizar estado con el bucle de renderizado
  const stateRef = useRef({ activeTab, explodedView, activePart, isPoweredOn, dataFlowActive, airflowActive, errorScenario });
  const labelsRef = useRef({});

  useEffect(() => {
    stateRef.current = { activeTab, explodedView, activePart, isPoweredOn, dataFlowActive, airflowActive, errorScenario };
  }, [activeTab, explodedView, activePart, isPoweredOn, dataFlowActive, airflowActive, errorScenario]);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. ESCENA BASE
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(COLORS.bg);
    
    // Grid y ambiente
    const grid = new THREE.GridHelper(40, 40, 0x1e293b, 0x0f172a);
    grid.position.y = -5;
    scene.add(grid);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Iluminación
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(10, 20, 15);
    const fillLight = new THREE.DirectionalLight(0x3b82f6, 0.5);
    fillLight.position.set(-10, 0, -10);
    scene.add(ambientLight, dirLight, fillLight);

    // Luces RGB internas (apagadas por defecto)
    const rgbLight1 = new THREE.PointLight(0x22d3ee, 0, 10);
    const rgbLight2 = new THREE.PointLight(0xf97316, 0, 10);
    scene.add(rgbLight1, rgbLight2);

    // 2. CONSTRUCCIÓN DE GEOMETRÍAS (PROGRAMÁTICO)
    const pcGroup = new THREE.Group();
    scene.add(pcGroup);
    
    const parts = {};
    const materials = {
      mb: new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.8, metalness: 0.2 }),
      pcb: new THREE.MeshStandardMaterial({ color: 0x064e3b, roughness: 0.9, metalness: 0.1 }),
      metal: new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.4, metalness: 0.8 }),
      darkMetal: new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5, metalness: 0.9 }),
      gold: new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.3, metalness: 1.0 }),
      plastic: new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.7 }),
      highlight: new THREE.MeshStandardMaterial({ color: 0x22d3ee, emissive: 0x0891b2, emissiveIntensity: 0.5 }),
      glass: new THREE.MeshPhysicalMaterial({ color: 0x000000, metalness: 0.1, roughness: 0.1, transmission: 0.9, transparent: true, opacity: 0.3 })
    };

    // Helper para crear piezas
    const addPart = (id, mesh, basePos, expOffset, labelOffset = [0,0,0]) => {
      mesh.userData = { id, basePos, expOffset, labelOffset };
      mesh.position.copy(basePos);
      pcGroup.add(mesh);
      parts[id] = mesh;
    };

    // A. Chasis (Caja)
    const caseGroup = new THREE.Group();
    const caseFrame = new THREE.Mesh(new THREE.BoxGeometry(4.5, 9, 8), materials.darkMetal);
    caseFrame.material.wireframe = true; // Simular chasis abierto
    const sidePanel = new THREE.Mesh(new THREE.BoxGeometry(0.1, 8.8, 7.8), materials.glass);
    sidePanel.position.set(2.25, 0, 0);
    caseGroup.add(caseFrame, sidePanel);
    addPart('chasis', caseGroup, new THREE.Vector3(0,0,0), new THREE.Vector3(0, 0, 0), [0, 4.5, 0]);

    // B. Placa Base
    const mb = new THREE.Mesh(new THREE.BoxGeometry(0.2, 6, 5), materials.mb);
    addPart('mb', mb, new THREE.Vector3(-1.8, 0, 0), new THREE.Vector3(-4, 0, 0), [0, 3, 0]);

    // C. CPU y Socket
    const cpuGroup = new THREE.Group();
    const socket = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1, 1), materials.darkMetal);
    const cpu = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.8, 0.8), materials.metal);
    cpu.position.x = 0.05;
    cpuGroup.add(socket, cpu);
    addPart('cpu', cpuGroup, new THREE.Vector3(-1.7, 1.5, -1), new THREE.Vector3(-4, 1.5, -4), [0, 0.5, 0]);

    // D. Disipador CPU
    const coolerGroup = new THREE.Group();
    const heatsink = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.2, 1.2), materials.metal);
    const fanCpu = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.2, 16), materials.plastic);
    fanCpu.rotation.z = Math.PI / 2;
    fanCpu.position.x = 0.8;
    coolerGroup.add(heatsink, fanCpu);
    addPart('cooler', coolerGroup, new THREE.Vector3(-0.8, 1.5, -1), new THREE.Vector3(0, 4, -4), [0, 1, 0]);

    // E. Memoria RAM
    const ramGroup = new THREE.Group();
    for(let i=0; i<4; i++) {
      const slot = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.8, 0.1), materials.plastic);
      slot.position.set(0, 0, i * 0.25 - 0.375);
      ramGroup.add(slot);
      if(i===1 || i===3) { // 2 módulos instalados
        const stick = new THREE.Mesh(new THREE.BoxGeometry(0.35, 1.7, 0.08), materials.darkMetal);
        stick.position.set(0.1, 0, i * 0.25 - 0.375);
        ramGroup.add(stick);
      }
    }
    addPart('ram', ramGroup, new THREE.Vector3(-1.7, 1.5, 0.5), new THREE.Vector3(-4, 4, 2), [0, 1, 0]);

    // F. Tarjeta Gráfica (GPU)
    const gpuGroup = new THREE.Group();
    const gpuBoard = new THREE.Mesh(new THREE.BoxGeometry(3, 1.5, 0.4), materials.pcb);
    const gpuCooler = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.4, 0.8), materials.darkMetal);
    gpuCooler.position.z = 0.6;
    gpuGroup.add(gpuBoard, gpuCooler);
    addPart('gpu', gpuGroup, new THREE.Vector3(-0.3, -1, -1), new THREE.Vector3(4, -1, -4), [0, 1, 0]);

    // G. Almacenamiento NVMe
    const ssd = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.8, 0.3), materials.pcb);
    addPart('ssd', ssd, new THREE.Vector3(-1.7, 0, 1.5), new THREE.Vector3(-4, -2, 4), [0, 0.5, 0]);

    // H. Fuente de Alimentación (PSU)
    const psu = new THREE.Mesh(new THREE.BoxGeometry(3, 2, 2.5), materials.darkMetal);
    addPart('psu', psu, new THREE.Vector3(-0.3, -3.5, 1.5), new THREE.Vector3(0, -6, 2), [0, 1, 0]);

    // 3. SISTEMA DE PARTÍCULAS (FLUJO DE DATOS Y AIRE)
    const createFlow = (color, count, size) => {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({ color, size, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false });
      return new THREE.Points(geo, mat);
    };

    // Flujo CPU <-> RAM (Data)
    const dataFlow = createFlow(0x22d3ee, 50, 0.1);
    scene.add(dataFlow);

    // Flujo de Aire (Frente a Atrás)
    const airFlow = createFlow(0x3b82f6, 100, 0.15);
    scene.add(airFlow);

    // 4. CONTROLES DE CÁMARA E INTERACCIÓN
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let isDragging = false, pMouse = { x: 0, y: 0 };
    let camAngle = { azimuth: Math.PI/4, polar: Math.PI/3 };
    let targetRadius = 15;

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
    const onWheel = (e) => { targetRadius = Math.max(5, Math.min(30, targetRadius + e.deltaY * 0.02)); };
    
    const onClick = (e) => {
      const s = stateRef.current;
      if (s.activeTab !== 'explorer' && !s.explodedView) return; // Solo interactivo en explorador
      
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      
      // Encontrar intersecciones
      const interactables = Object.values(parts);
      const intersects = raycaster.intersectObjects(interactables, true);
      
      if(intersects.length > 0) {
         // Subir en el árbol para encontrar el Group/Mesh principal con userData.id
         let obj = intersects[0].object;
         while(obj && !obj.userData.id) obj = obj.parent;
         if(obj && obj.userData.id) onPartSelect(obj.userData.id);
      } else {
         onPartSelect(null);
      }
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onDown); window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove); dom.addEventListener('wheel', onWheel);
    dom.addEventListener('click', onClick);

    // 5. BUCLE DE ANIMACIÓN
    let frameId;
    let time = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const delta = 0.016;
      time += delta;
      const s = stateRef.current;

      // Movimiento de cámara automático en Demo o por usuario
      if(s.demoActive) camAngle.azimuth += 0.3 * delta;
      camera.position.set(
        targetRadius * Math.sin(camAngle.azimuth) * Math.cos(camAngle.polar),
        targetRadius * Math.sin(camAngle.polar),
        targetRadius * Math.cos(camAngle.azimuth) * Math.cos(camAngle.polar)
      );
      camera.lookAt(0, 0, 0);

      // Animación de Vista Explosionada
      const expLerp = s.explodedView ? 1 : 0;
      Object.values(parts).forEach(part => {
        const targetPos = new THREE.Vector3().copy(part.userData.basePos);
        if(s.explodedView) targetPos.add(part.userData.expOffset);
        part.position.lerp(targetPos, 0.1);

        // Resaltado de Materiales
        part.traverse((child) => {
          if (child.isMesh) {
             // Guardar material original si no existe
             if(!child.userData.origMat) child.userData.origMat = child.material;
             
             if (s.activePart === part.userData.id) {
               child.material = materials.highlight;
             } else {
               child.material = child.userData.origMat;
             }
          }
        });
      });

      // Animación de Chasis Lateral
      sidePanel.position.x += ((s.explodedView ? 4 : 2.25) - sidePanel.position.x) * 0.1;
      sidePanel.material.opacity = s.explodedView ? 0.1 : 0.3;

      // Efectos de Encendido (Módulo 3 y 4)
      if (s.isPoweredOn && s.errorScenario !== 'psu') {
        fanCpu.rotation.y += 10 * delta; // Ventilador CPU
        rgbLight1.intensity = 5; rgbLight1.position.copy(parts.mb.position);
        rgbLight2.intensity = 3; rgbLight2.position.copy(parts.gpu.position).add(new THREE.Vector3(2,0,0));
      } else {
        rgbLight1.intensity = 0; rgbLight2.intensity = 0;
      }

      // Averías visuales
      if (s.errorScenario === 'ram') {
         parts.ram.position.y = s.explodedView ? parts.ram.userData.basePos.y + parts.ram.userData.expOffset.y : parts.ram.userData.basePos.y + 0.5; // RAM mal encajada
      } else if (!s.explodedView) {
         parts.ram.position.y = parts.ram.userData.basePos.y;
      }

      if (s.errorScenario === 'gpu') {
        parts.gpu.rotation.x = 0.2; // GPU torcida
      } else {
        parts.gpu.rotation.x = 0;
      }

      // Animación Flujo de Datos (Módulo 5)
      if (s.dataFlowActive && s.isPoweredOn) {
        dataFlow.visible = true;
        const pos = dataFlow.geometry.attributes.position.array;
        for(let i=0; i<50; i++) {
           const t = (time * 2 + i/50) % 1;
           // Ruta CPU -> RAM
           const start = parts.cpu.position;
           const end = parts.ram.position;
           pos[i*3] = start.x + (end.x - start.x) * t;
           pos[i*3+1] = start.y + (end.y - start.y) * t + Math.sin(t*Math.PI)*0.5;
           pos[i*3+2] = start.z + (end.z - start.z) * t;
        }
        dataFlow.geometry.attributes.position.needsUpdate = true;
      } else {
        dataFlow.visible = false;
      }

      // Animación Flujo de Aire (Módulo 5)
      if (s.airflowActive && s.isPoweredOn) {
        airFlow.visible = true;
        const pos = airFlow.geometry.attributes.position.array;
        for(let i=0; i<100; i++) {
           // Z de 5 a -5
           let z = 5 - ((time * 4 + i/20) % 10);
           pos[i*3] = (Math.random() - 0.5) * 4;
           pos[i*3+1] = (Math.random() - 0.5) * 8;
           pos[i*3+2] = z;
        }
        airFlow.geometry.attributes.position.needsUpdate = true;
      } else {
        airFlow.visible = false;
      }

      // Actualización de Etiquetas 2D
      Object.keys(parts).forEach(key => {
        const part = parts[key];
        const labelEl = labelsRef.current[key];
        if (labelEl) {
          if ((s.explodedView || s.activePart === key) && s.activeTab === 'explorer') {
             labelEl.style.display = 'block';
             const vector = new THREE.Vector3().copy(part.position);
             vector.add(new THREE.Vector3(...part.userData.labelOffset));
             vector.project(camera);
             const x = (vector.x * .5 + .5) * window.innerWidth;
             const y = (vector.y * -.5 + .5) * window.innerHeight;
             labelEl.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
          } else {
             labelEl.style.display = 'none';
          }
        }
      });

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
    <div ref={mountRef} className="absolute inset-0 z-0 bg-slate-950">
       {/* Capa UI 2D para etiquetas de Three.js */}
       <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {Object.keys({
            chasis: 'Chasis ATX', mb: 'Placa Base', cpu: 'Procesador (CPU)', 
            cooler: 'Disipador/Ventilador', ram: 'Memoria RAM', gpu: 'Tarjeta Gráfica', 
            ssd: 'Almacenamiento NVMe', psu: 'Fuente de Alimentación'
         }).map(key => (
            <div key={key} ref={el => labelsRef.current[key] = el}
              className="absolute top-0 left-0 bg-slate-900/80 border border-cyan-500/50 px-2 py-1 rounded text-[10px] text-cyan-300 font-mono font-bold whitespace-nowrap backdrop-blur-sm hidden"
            >
              {{chasis: 'Chasis ATX', mb: 'Placa Base', cpu: 'Procesador (CPU)', cooler: 'Disipador', ram: 'Memoria RAM', gpu: 'Tarjeta Gráfica', ssd: 'SSD M.2', psu: 'Fuente (PSU)'}[key]}
            </div>
         ))}
       </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL (APP) ---

export default function App() {
  const [activeTab, setActiveTab] = useState('explorer');
  const [docenteMode, setDocenteMode] = useState(false);
  const [demoActive, setDemoActive] = useState(false);

  // Estado Módulo 1 (Explorador)
  const [explodedView, setExplodedView] = useState(false);
  const [activePart, setActivePart] = useState(null);

  // Estado Módulo 2 (Builder)
  const [config, setConfig] = useState({
    cpu: INVENTORY.cpus[0],
    mb: INVENTORY.motherboards[0],
    ram: INVENTORY.rams[0],
    gpu: INVENTORY.gpus[0],
    psu: INVENTORY.psus[0],
    storage: INVENTORY.storage[0]
  });
  const [validation, setValidation] = useState({ valid: true, errors: [], warnings: [] });

  // Estado Módulo 3 & 4 (Arranque y Averías)
  const [bootState, setBootState] = useState('off'); // off, power_on, post, booting, os, error
  const [postLog, setPostLog] = useState([]);
  const [errorScenario, setErrorScenario] = useState(null); // ram, psu, cpu_temp, ssd, gpu, null
  
  // Estado Módulo 5 (Visualizador)
  const [dataFlowActive, setDataFlowActive] = useState(false);
  const [airflowActive, setAirflowActive] = useState(false);
  const [telemetry, setTelemetry] = useState([]);

  // Lógica de Validación del Builder
  useEffect(() => {
    let errors = [];
    let warnings = [];
    
    // Check Socket
    if (config.cpu.socket !== config.mb.socket) {
      errors.push(`Incompatibilidad de Socket: CPU ${config.cpu.socket} vs Placa Base ${config.mb.socket}`);
    }
    // Check RAM
    if (config.ram.ramType !== config.mb.ramType) {
      errors.push(`Incompatibilidad de Memoria: RAM ${config.ram.ramType} vs Placa Base ${config.mb.ramType}`);
    }
    // Check Power
    const totalPower = config.cpu.power + config.ram.power + config.gpu.power + config.storage.power + 50; // 50W base
    if (config.psu.wattage < totalPower) {
      errors.push(`Fuente insuficiente: Requerido ~${totalPower}W, Disponible ${config.psu.wattage}W`);
    } else if (config.psu.wattage < totalPower * 1.2) {
      warnings.push("Margen de potencia muy ajustado. Podría fallar bajo carga máxima.");
    }
    // Check Storage
    if (config.storage.id === 'none') {
      errors.push("No hay unidad de almacenamiento con Sistema Operativo.");
    }

    setValidation({ valid: errors.length === 0, errors, warnings });
  }, [config]);

  // Lógica de Secuencia de Arranque (POST)
  const startBoot = () => {
    if (bootState !== 'off' && bootState !== 'error') return;
    setBootState('power_on');
    setPostLog([{ time: '0.0s', msg: 'Suministro eléctrico activado...', type: 'info' }]);
    
    let time = 0;
    const addLog = (msg, type='info') => {
      time += 0.5;
      setPostLog(prev => [...prev, { time: `${time.toFixed(1)}s`, msg, type }]);
    };

    // Secuencia Simulada
    setTimeout(() => {
      setBootState('post');
      addLog('Iniciando POST (Power-On Self-Test)...');
    }, 1000);

    setTimeout(() => {
      // Determinar si hay fallo inducido por avería o por configuración
      if (errorScenario === 'psu' || (!validation.valid && validation.errors.some(e => e.includes('Fuente')))) {
        addLog('CRITICAL: Caída de tensión detectada. Apagado de emergencia.', 'error');
        setBootState('error');
        return;
      }
      addLog(`CPU Detectada: ${config.cpu.name}`);
    }, 2000);

    setTimeout(() => {
      if (bootState === 'error') return;
      if (errorScenario === 'ram' || (!validation.valid && validation.errors.some(e => e.includes('Memoria')))) {
        addLog('ERROR 53: Memoria RAM no detectada o incompatible.', 'error');
        setBootState('error');
        return;
      }
      addLog(`Memoria OK: ${config.ram.name}`);
    }, 3000);

    setTimeout(() => {
      if (bootState === 'error') return;
      if (errorScenario === 'gpu') {
         addLog('VGA BIOS ERROR: Tarjeta gráfica no responde.', 'error');
         setBootState('error');
         return;
      }
      addLog(`VGA OK: ${config.gpu.name}`);
    }, 4000);

    setTimeout(() => {
      if (bootState === 'error') return;
      if (errorScenario === 'cpu_temp') {
         addLog('CPU FAN ERROR / OVERTEMP. Deteniendo para proteger hardware.', 'error');
         setBootState('error');
         return;
      }
      if (errorScenario === 'ssd' || config.storage.id === 'none') {
         addLog('BOOT DEVICE NOT FOUND. Inserte un disco de arranque.', 'error');
         setBootState('error');
         return;
      }
      addLog(`Almacenamiento OK: ${config.storage.name}`);
      setBootState('booting');
      addLog('Cargando Sistema Operativo...', 'success');
    }, 5000);

    setTimeout(() => {
      if (bootState === 'booting') {
         setBootState('os');
         generateTelemetry();
      }
    }, 7000);
  };

  const stopBoot = () => {
    setBootState('off');
    setPostLog([]);
    setTelemetry([]);
    setDataFlowActive(false);
  };

  // Generador de telemetría falsa para OS
  const generateTelemetry = () => {
    let t = 0;
    const interval = setInterval(() => {
      setBootState(curr => {
        if(curr !== 'os') { clearInterval(interval); return curr; }
        return curr;
      });
      t++;
      const cpuLoad = 10 + Math.random() * 30 + (dataFlowActive ? 40 : 0);
      const temp = 35 + (cpuLoad * 0.4);
      setTelemetry(prev => {
        const newData = [...prev, { time: t, cpu: cpuLoad, temp: temp }];
        if (newData.length > 20) return newData.slice(newData.length - 20);
        return newData;
      });
    }, 1000);
  };

  // Lógica Demo Cinematográfica
  const timeoutsRef = useRef([]);
  const clearDemo = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setDemoActive(false);
  };

  const runDemo = () => {
    clearDemo();
    setDemoActive(true);
    setDocenteMode(true);
    stopBoot();
    setActiveTab('explorer');
    setExplodedView(false);

    const schedule = (fn, delay) => timeoutsRef.current.push(setTimeout(fn, delay));

    schedule(() => setExplodedView(true), 2000);
    schedule(() => setActivePart('cpu'), 4000);
    schedule(() => setActivePart('mb'), 6000);
    schedule(() => setActivePart(null), 8000);
    schedule(() => setExplodedView(false), 9000);
    
    schedule(() => { setActiveTab('dataflow'); setDataFlowActive(true); startBoot(); }, 10000);
    schedule(() => setAirflowActive(true), 12000);
    
    schedule(() => {
      setActiveTab('troubleshoot');
      stopBoot();
      setErrorScenario('ram');
    }, 20000);

    schedule(() => startBoot(), 21000);
    schedule(() => clearDemo(), 28000);
  };

  useEffect(() => { return clearDemo; }, []);

  // Helpers de Info de Componentes
  const getPartInfo = (partId) => {
    const info = {
      cpu: { name: 'Procesador (CPU)', desc: 'El "cerebro" del ordenador. Ejecuta las instrucciones de los programas. Requiere un zócalo compatible en la placa base.' },
      mb: { name: 'Placa Base (Motherboard)', desc: 'Circuito principal que conecta todos los componentes. Define la compatibilidad del sistema (socket, tipo RAM, PCIe).' },
      ram: { name: 'Memoria RAM', desc: 'Almacenamiento de trabajo ultrarrápido y volátil. La CPU guarda aquí los datos que necesita procesar inmediatamente.' },
      gpu: { name: 'Tarjeta Gráfica (GPU)', desc: 'Procesador dedicado a renderizar imágenes. Fundamental para diseño 3D, simulaciones y videojuegos.' },
      psu: { name: 'Fuente de Alimentación (PSU)', desc: 'Convierte la corriente alterna del enchufe en corriente continua regulada para los componentes.' },
      cooler: { name: 'Refrigeración', desc: 'Disipa el calor generado por la CPU para evitar el estrangulamiento térmico (Thermal Throttling) o daños físicos.' },
      ssd: { name: 'Almacenamiento NVMe', desc: 'Unidad de estado sólido. Almacena el sistema operativo y los datos de forma permanente a alta velocidad.' },
      chasis: { name: 'Chasis (Caja)', desc: 'Estructura que alberga y protege los componentes, facilitando un flujo de aire adecuado para la refrigeración.' }
    };
    return info[partId] || { name: 'Selecciona un componente', desc: 'Haz clic en las piezas del modelo 3D para aislar su función.' };
  };

  return (
    <div className="h-screen w-full bg-slate-950 text-slate-200 font-sans overflow-hidden flex flex-col selection:bg-cyan-500/30">
      
      {/* HEADER */}
      <header className="h-16 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl flex items-center justify-between px-6 z-40 shrink-0 shadow-lg">
        <div className="flex items-center gap-4">
          <div className="bg-cyan-500/10 p-2 rounded-lg border border-cyan-500/30">
            <Cpu className="text-cyan-400" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              PC LAB 3D
            </h1>
            <p className="text-[10px] text-slate-400 tracking-[0.3em] uppercase font-bold">Laboratorio Virtual de Hardware</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-3 cursor-pointer group">
            <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${docenteMode ? 'text-blue-400 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]' : 'text-slate-500'}`}>
              Modo Docente
            </span>
            <div className={`w-12 h-6 rounded-full p-1 transition-colors border ${docenteMode ? 'bg-blue-600/20 border-blue-500' : 'bg-slate-800 border-slate-600'}`}>
              <div className={`bg-slate-200 w-4 h-4 rounded-full shadow-md transform transition-transform ${docenteMode ? 'translate-x-6' : ''}`} />
            </div>
            {/* Input oculto real para accesibilidad/eventos */}
            <input type="checkbox" className="hidden" checked={docenteMode} onChange={() => setDocenteMode(!docenteMode)} />
          </label>
          <div className="w-px h-8 bg-slate-700 mx-2"></div>
          <Button variant={demoActive ? 'danger' : 'primary'} onClick={demoActive ? clearDemo : runDemo} className={!demoActive && 'animate-pulse'}>
            {demoActive ? <XCircle size={18} /> : <MonitorPlay size={18} />}
            {demoActive ? 'DETENER DEMO' : 'DEMOSTRACIÓN WOW'}
          </Button>
        </div>
      </header>

      {/* ÁREA PRINCIPAL */}
      <div className="flex flex-1 relative overflow-hidden">
        
        {/* SIDEBAR NAVEGACIÓN */}
        <aside className="w-72 bg-slate-900/80 border-r border-slate-800 z-30 flex flex-col p-4 gap-2 backdrop-blur-md shadow-2xl">
          <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 mt-2 px-2">Módulos Prácticos</div>
          {[
            { id: 'explorer', icon: Layers, label: '1. Explorador 3D' },
            { id: 'builder', icon: Settings, label: '2. Montaje (Builder)' },
            { id: 'boot', icon: Power, label: '3. Secuencia de Arranque' },
            { id: 'troubleshoot', icon: AlertTriangle, label: '4. Taller de Averías' },
            { id: 'dataflow', icon: Activity, label: '5. Flujo de Datos' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); if(item.id !== 'explorer') setExplodedView(false); }}
              className={`flex items-center justify-between px-4 py-4 rounded-xl transition-all text-sm font-bold uppercase tracking-wider ${
                activeTab === item.id 
                  ? 'bg-gradient-to-r from-cyan-900/40 to-slate-800/40 text-cyan-300 border border-cyan-500/50 shadow-[inset_4px_0_0_rgba(34,211,238,1)]' 
                  : 'text-slate-400 hover:bg-slate-800/80 hover:text-slate-200 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={18} className={activeTab === item.id ? "text-cyan-400" : "text-slate-500"} />
                {item.label}
              </div>
              {activeTab === item.id && <ChevronRight size={16} />}
            </button>
          ))}
          
          <div className="mt-auto">
            {docenteMode && (
              <div className="mb-4 bg-blue-950/20 border border-blue-900/50 p-3 rounded-lg flex items-start gap-3">
                <Info size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <p className="text-[10px] text-blue-200/80 leading-relaxed font-medium uppercase tracking-wider">
                  Modo Didáctico Activo. Adaptado para CFGS ASIR (Fundamentos de Hardware).
                </p>
              </div>
            )}
            
            {/* Estado Resumido del PC */}
            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Estado Máquina</span>
                <div className={`w-2 h-2 rounded-full ${bootState === 'os' ? 'bg-emerald-400 animate-pulse' : bootState === 'error' ? 'bg-red-500' : 'bg-slate-600'}`}></div>
              </div>
              <div className="text-xs font-mono text-slate-400">
                Estado: {bootState.toUpperCase()}<br/>
                Config: {validation.valid && errorScenario===null ? <span className="text-emerald-400">VÁLIDA</span> : <span className="text-red-400">ERROR</span>}
              </div>
            </div>
          </div>
        </aside>

        {/* CONTENEDOR 3D Y UI SUPERPUESTA */}
        <main className="flex-1 relative">
          
          {/* LIENZO 3D PURE THREE.JS */}
          <ThreeCanvas 
            activeTab={activeTab}
            explodedView={explodedView}
            activePart={activePart}
            isPoweredOn={bootState !== 'off' && bootState !== 'error'}
            dataFlowActive={dataFlowActive && bootState === 'os'}
            airflowActive={airflowActive && bootState === 'os'}
            pcConfig={config}
            demoActive={demoActive}
            errorScenario={errorScenario}
            onPartSelect={(p) => setActivePart(activePart === p ? null : p)}
          />

          {/* SUPERPOSICIONES UI POR MÓDULO */}
          <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between z-20">
            
            {/* MÓDULO 1: EXPLORADOR */}
            {activeTab === 'explorer' && (
              <div className="flex justify-end h-full">
                <div className="w-80 pointer-events-auto flex flex-col gap-4">
                  <Panel title="Control de Visualización" icon={Maximize2}>
                    <Button active={explodedView} onClick={() => setExplodedView(!explodedView)} className="w-full">
                      {explodedView ? 'Ensamblar Equipo' : 'Vista Explosionada'}
                    </Button>
                    {docenteMode && (
                      <DocenteNote title="Actividad">
                        Identifica dónde se ubica la memoria caché respecto a la CPU y la memoria RAM principal. ¿Por qué están dispuestas así físicamente?
                      </DocenteNote>
                    )}
                  </Panel>

                  <Panel title="Análisis de Componente" borderColor={activePart ? 'cyan' : 'slate'} className="flex-1">
                    <h4 className="text-lg font-black text-white mb-2">{getPartInfo(activePart).name}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-medium">
                      {getPartInfo(activePart).desc}
                    </p>
                    {!activePart && (
                       <div className="mt-4 flex items-center justify-center h-32 border-2 border-dashed border-slate-700 rounded-lg text-slate-500 text-xs uppercase tracking-widest font-bold text-center p-4">
                         Gira la cámara y haz clic en una pieza 3D
                       </div>
                    )}
                  </Panel>
                </div>
              </div>
            )}

            {/* MÓDULO 2: BUILDER */}
            {activeTab === 'builder' && (
              <div className="flex justify-between items-start h-full pointer-events-none">
                 <Panel title="Inventario de Piezas" icon={Wrench} className="w-[400px] pointer-events-auto max-h-full overflow-y-auto custom-scrollbar">
                    {Object.keys(INVENTORY).map(category => (
                      <div key={category} className="mb-4">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">{category}</span>
                        <div className="space-y-2">
                          {INVENTORY[category].map(item => (
                            <button
                              key={item.id}
                              onClick={() => {
                                setConfig(prev => ({...prev, [item.type]: item}));
                                setErrorScenario(null); // Resetear averías al cambiar piezas
                              }}
                              className={`w-full text-left p-2 rounded text-sm transition-colors border ${config[item.type].id === item.id ? 'bg-cyan-900/30 border-cyan-500 text-cyan-300' : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700'}`}
                            >
                              {item.name} {item.socket && `[${item.socket}]`} {item.wattage && `[${item.wattage}W]`}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                 </Panel>

                 <div className="w-[350px] pointer-events-auto flex flex-col gap-4">
                    <Panel title="Validación del Sistema" borderColor={validation.valid ? 'green' : 'red'}>
                       {validation.valid ? (
                         <div className="flex items-center gap-2 text-emerald-400 mb-2">
                           <CheckCircle2 size={20} /> <span className="font-bold uppercase tracking-wider text-sm">Configuración Válida</span>
                         </div>
                       ) : (
                         <div className="flex items-center gap-2 text-red-400 mb-2">
                           <XCircle size={20} /> <span className="font-bold uppercase tracking-wider text-sm">Incompatibilidad Detectada</span>
                         </div>
                       )}

                       {validation.errors.map((e,i) => <div key={i} className="text-xs text-red-300 bg-red-950/30 p-2 rounded mb-1 border border-red-900/50">{e}</div>)}
                       {validation.warnings.map((w,i) => <div key={i} className="text-xs text-orange-300 bg-orange-950/30 p-2 rounded mb-1 border border-orange-900/50">{w}</div>)}
                       
                       <div className="mt-4 pt-4 border-t border-slate-700">
                          <Button variant={validation.valid ? 'success' : 'danger'} className="w-full" onClick={() => setActiveTab('boot')} disabled={!validation.valid}>
                            Proceder al Arranque
                          </Button>
                       </div>
                    </Panel>
                    {docenteMode && (
                      <DocenteNote title="Concepto Clave" type="warning">
                        Explicar la diferencia entre Socket (físico/eléctrico) y Chipset (lógico). Una CPU puede entrar en el socket pero no ser soportada por el chipset o requerir actualización de BIOS.
                      </DocenteNote>
                    )}
                 </div>
              </div>
            )}

            {/* MÓDULO 3: ARRANQUE Y MONITOR */}
            {activeTab === 'boot' && (
              <div className="flex flex-col justify-end h-full">
                 <div className="grid grid-cols-12 gap-6 pointer-events-auto">
                    
                    <Panel className="col-span-4" title="Control de Energía" icon={Power}>
                       <Button 
                         variant={bootState === 'off' || bootState === 'error' ? 'success' : 'danger'} 
                         className="w-full py-4 text-lg"
                         onClick={bootState === 'off' || bootState === 'error' ? startBoot : stopBoot}
                       >
                         <Power size={24} /> {bootState === 'off' || bootState === 'error' ? 'ENCENDER EQUIPO' : 'APAGADO FORZADO'}
                       </Button>

                       {bootState === 'os' && (
                         <div className="mt-6 space-y-4">
                           <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                             <div className="text-[10px] uppercase text-slate-500 font-bold mb-1">Carga CPU</div>
                             <div className="text-2xl font-mono text-cyan-400">{telemetry[telemetry.length-1]?.cpu.toFixed(1) || 0}%</div>
                           </div>
                           <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                             <div className="text-[10px] uppercase text-slate-500 font-bold mb-1">Temperatura CPU</div>
                             <div className="text-2xl font-mono text-orange-400">{telemetry[telemetry.length-1]?.temp.toFixed(1) || 0}°C</div>
                           </div>
                         </div>
                       )}
                    </Panel>

                    <Panel className="col-span-8 bg-black border-slate-800" title="Salida de Video (Monitor)">
                       <div className="h-64 font-mono text-sm overflow-y-auto flex flex-col justify-end pb-2 custom-scrollbar">
                         {bootState === 'off' && <div className="text-slate-600 text-center animate-pulse mt-20">NO SIGNAL</div>}
                         
                         {bootState !== 'off' && bootState !== 'os' && postLog.map((log, i) => (
                           <div key={i} className={`mb-1 ${log.type === 'error' ? 'text-red-500 font-bold' : log.type === 'success' ? 'text-emerald-400' : 'text-slate-300'}`}>
                             <span className="text-slate-600 mr-2">[{log.time}]</span> {log.msg}
                           </div>
                         ))}

                         {bootState === 'os' && (
                           <div className="absolute inset-0 mt-12 m-4 flex flex-col items-center justify-center bg-slate-900 border border-slate-700 rounded">
                              <div className="text-cyan-400 text-2xl font-bold mb-4 flex items-center gap-2"><Zap/> OS Cargado Correctamente</div>
                              <ResponsiveContainer width="90%" height={150}>
                                <AreaChart data={telemetry}>
                                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                  <XAxis dataKey="time" hide />
                                  <YAxis stroke="#3b82f6" fontSize={10} domain={[0, 100]} />
                                  <Tooltip contentStyle={{backgroundColor:'#0f172a', border:'none', color:'#fff'}} />
                                  <Area type="monotone" dataKey="cpu" stroke="#22d3ee" fill="#0891b2" fillOpacity={0.3} isAnimationActive={false} />
                                </AreaChart>
                              </ResponsiveContainer>
                           </div>
                         )}
                       </div>
                    </Panel>
                 </div>
              </div>
            )}

            {/* MÓDULO 4: TALLER DE AVERÍAS */}
            {activeTab === 'troubleshoot' && (
               <div className="flex justify-between items-start h-full pointer-events-none">
                 <Panel title="Inyectar Avería (Simulación)" icon={AlertTriangle} className="w-[350px] pointer-events-auto" borderColor="orange">
                   <p className="text-xs text-slate-400 mb-4">Selecciona un escenario para forzar un fallo físico o lógico en el equipo.</p>
                   <div className="space-y-2">
                     {[
                       {id: 'ram', label: '1. RAM mal encajada'},
                       {id: 'psu', label: '2. PSU averiada (Sin voltaje)'},
                       {id: 'gpu', label: '3. GPU sin alimentación PCIe'},
                       {id: 'ssd', label: '4. SSD no detectado'},
                       {id: 'cpu_temp', label: '5. Fallo bomba/ventilador CPU'}
                     ].map(err => (
                       <Button 
                         key={err.id} 
                         variant={errorScenario === err.id ? 'danger' : 'default'} 
                         className="w-full text-xs justify-start"
                         onClick={() => { setErrorScenario(err.id); stopBoot(); }}
                       >
                         {err.label}
                       </Button>
                     ))}
                   </div>
                   
                   {errorScenario && (
                     <div className="mt-4 pt-4 border-t border-slate-700">
                       <Button variant="primary" className="w-full" onClick={() => setActiveTab('boot')}>
                         Arrancar para Diagnosticar
                       </Button>
                       <Button variant="ghost" className="w-full mt-2 text-xs" onClick={() => setErrorScenario(null)}>
                         Reparar Equipo (Reset)
                       </Button>
                     </div>
                   )}
                 </Panel>

                 {docenteMode && (
                   <div className="w-[350px] pointer-events-auto">
                     <DocenteNote title="Guía de Diagnóstico" type="law">
                       Utiliza la metodología deductiva:
                       1. ¿Enciende físicamente? (Revisar fuente)
                       2. ¿Da imagen o pitidos POST? (Revisar CPU/RAM/VGA)
                       3. ¿Carga el SO? (Revisar almacenamiento)
                     </DocenteNote>
                   </div>
                 )}
               </div>
            )}

            {/* MÓDULO 5: FLUJO DE DATOS */}
            {activeTab === 'dataflow' && (
              <div className="flex justify-end h-full pointer-events-none">
                 <Panel title="Visualizador de Funcionamiento" icon={Activity} className="w-[350px] pointer-events-auto">
                   
                   {bootState !== 'os' ? (
                     <div className="text-center p-4 border border-dashed border-orange-500/50 rounded-lg text-orange-400 text-sm font-bold">
                       El equipo debe estar encendido y con el SO cargado para visualizar el flujo.
                       <Button onClick={() => setActiveTab('boot')} className="mt-3 mx-auto text-xs">Ir al Arranque</Button>
                     </div>
                   ) : (
                     <div className="space-y-4">
                       <div className="p-3 bg-slate-900/50 rounded border border-slate-700">
                         <div className="flex justify-between items-center mb-2">
                           <span className="text-xs font-bold text-cyan-300">Transferencia Bus de Datos</span>
                           <input type="checkbox" checked={dataFlowActive} onChange={(e) => setDataFlowActive(e.target.checked)} className="accent-cyan-500"/>
                         </div>
                         <p className="text-[10px] text-slate-400">Representa la comunicación a alta velocidad entre CPU y RAM (Jerarquía de Memoria).</p>
                       </div>

                       <div className="p-3 bg-slate-900/50 rounded border border-slate-700">
                         <div className="flex justify-between items-center mb-2">
                           <span className="text-xs font-bold text-blue-300">Termodinámica (Flujo de Aire)</span>
                           <input type="checkbox" checked={airflowActive} onChange={(e) => setAirflowActive(e.target.checked)} className="accent-blue-500"/>
                         </div>
                         <p className="text-[10px] text-slate-400">Circulación de aire fresco frontal para convección forzada y expulsión de calor trasero.</p>
                       </div>
                     </div>
                   )}

                   {docenteMode && (
                      <DocenteNote title="Arquitectura Von Neumann">
                        Observa cómo la CPU no procesa datos directamente del disco SSD, sino que estos deben cargarse primero en la memoria RAM (flujo activo).
                      </DocenteNote>
                   )}
                 </Panel>
              </div>
            )}

          </div>
        </main>
      </div>

      {/* ESTILOS GLOBALES CUSTOM */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.5); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(51, 65, 85, 0.8); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(34, 211, 238, 0.8); }
      `}} />
    </div>
  );
}