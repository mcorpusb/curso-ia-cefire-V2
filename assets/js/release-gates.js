/**
 * release-gates.js
 * ────────────────
 * Sistema global de puertas de publicación por fecha.
 *
 * Funciones:
 *  1. Oculta del sidebar las páginas bloqueadas Y todos sus descendientes.
 *  2. Alterna el contenido visible/oculto en páginas con div .release-gate.
 *  3. Protege páginas hijas accedidas por URL directa cuyo ancestro
 *     esté bloqueado (inyecta aviso sobre .main-content).
 *  4. Programa un auto-refresh para el instante de la próxima apertura.
 *
 * Datos de entrada: window.__releasePages  (inyectado en head_custom.html)
 *   [{ url, title, parent, releaseAt }, …]
 *
 * Parámetro GET  ?preview  desactiva todas las puertas (vista previa).
 */
(function () {
  "use strict";

  var preview = new URLSearchParams(window.location.search).has("preview");
  var pages   = window.__releasePages || [];
  var now     = new Date();

  /* ═══════════════════════════════════════════════════
     Índice de páginas por título
     ═══════════════════════════════════════════════════ */
  var byTitle = {};
  pages.forEach(function (p) {
    if (p.title) byTitle[p.title] = p;
  });

  /* ═══════════════════════════════════════════════════
     Fecha efectiva de bloqueo (propia + heredada)
     ═══════════════════════════════════════════════════ */
  function effectiveDate(page, seen) {
    if (!page) return null;
    if (!seen) seen = {};
    if (seen[page.title]) return null;       // evitar ciclos
    seen[page.title] = true;

    var own = page.releaseAt ? new Date(page.releaseAt) : null;
    if (own && isNaN(own.getTime())) own = null;

    var parentDate = null;
    if (page.parent && byTitle[page.parent]) {
      parentDate = effectiveDate(byTitle[page.parent], seen);
    }

    // Devolver la fecha más restrictiva (la más lejana)
    if (own && parentDate) return own > parentDate ? own : parentDate;
    return own || parentDate;
  }

  // Calcular estado de bloqueo para cada página
  var nearestUnlock = Infinity;
  pages.forEach(function (p) {
    p._eff    = effectiveDate(p);
    p._locked = !!(p._eff && now < p._eff && !preview);
    if (p._locked && p._eff.getTime() < nearestUnlock) {
      nearestUnlock = p._eff.getTime();
    }
  });

  /* ═══════════════════════════════════════════════════
     1. Ocultar páginas bloqueadas del sidebar
     ═══════════════════════════════════════════════════ */
  var navLinks = document.querySelectorAll(
    ".site-nav a, .nav-list a, .navigation-list a"
  );

  pages.forEach(function (p) {
    if (!p._locked) return;

    var link = findNavLink(navLinks, p.url);
    if (!link) return;

    var li = link.closest("li");
    if (li) li.style.display = "none";
  });

  /* ═══════════════════════════════════════════════════
     2. Alternar divs .release-gate (contenido en página)
     ═══════════════════════════════════════════════════ */
  document.querySelectorAll(".release-gate").forEach(function (gate) {
    var openAt = gate.getAttribute("data-open-at");
    if (!openAt) return;

    var openDate = new Date(openAt);
    var notice   = gate.querySelector(".release-gate__notice");
    var content  = gate.querySelector(".release-gate__content");
    var dateSpan = gate.querySelector(".release-gate__date");

    if (!notice || !content) return;

    if (preview || now >= openDate) {
      notice.hidden  = true;
      content.hidden = false;
    } else {
      notice.hidden  = false;
      content.hidden = true;
      if (dateSpan) dateSpan.textContent = formatDateES(openDate);
    }
  });

  /* ═══════════════════════════════════════════════════
     3. Protección de contenido por herencia
        (páginas hijas sin .release-gate propio)
     ═══════════════════════════════════════════════════ */
  var currentPath = normUrl(window.location.pathname);
  var currentPage = null;
  pages.forEach(function (p) {
    if (normUrl(p.url) === currentPath) currentPage = p;
  });

  if (currentPage && currentPage._locked) {
    var hasGate = document.querySelector(".release-gate");
    if (!hasGate) {
      var main = document.querySelector(
        ".main-content, #main-content, main .main-content-wrap"
      );
      if (main) {
        var dateStr = formatDateES(currentPage._eff);
        main.innerHTML =
          '<div class="release-gate-inherited">' +
            '<p class="release-gate-inherited__icon">🔒</p>' +
            '<p class="release-gate-inherited__title">Contenido no disponible aún</p>' +
            '<p>Este contenido se abrirá el <strong>' + dateStr + '</strong>.</p>' +
            '<p style="margin-top:1em;opacity:.75;">Mientras tanto, ' +
              'céntrate en completar el bloque actual.</p>' +
          '</div>';
      }
    }
  }

  /* ═══════════════════════════════════════════════════
     4. Auto-refresh en la próxima apertura
     ═══════════════════════════════════════════════════ */
  if (nearestUnlock < Infinity) {
    var delay = nearestUnlock - now.getTime();
    if (delay > 0 && delay < 86400000) {          // máximo 24 h
      setTimeout(function () { window.location.reload(); }, delay + 2000);
    }
  }

  /* ═══════════════════════════════════════════════════
     Helpers
     ═══════════════════════════════════════════════════ */
  function normUrl(url) {
    return (url || "")
      .replace(/\/+$/, "")
      .replace(/\.html$/, "")
      .replace(/\/index$/, "");
  }

  function formatDateES(date) {
    return date.toLocaleDateString("es-ES", {
      day:      "2-digit",
      month:    "long",
      year:     "numeric",
      hour:     "2-digit",
      minute:   "2-digit",
      timeZone: "Europe/Madrid"
    }).replace(",", " a las");
  }

  function findNavLink(links, targetUrl) {
    var target = normUrl(targetUrl);
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute("href");
      if (!href) continue;
      if (normUrl(href) === target) return links[i];
      try {
        var abs = new URL(links[i].href, window.location.origin).pathname;
        if (normUrl(abs) === target) return links[i];
      } catch (e) { /* ignorar */ }
    }
    return null;
  }
})();
