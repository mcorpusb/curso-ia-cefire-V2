(function () {
  'use strict';

  document.querySelectorAll('[data-copy-target]').forEach(function (button) {
    button.hidden = false;
    button.addEventListener('click', async function () {
      var target = document.getElementById(button.dataset.copyTarget);
      var status = button.parentElement.querySelector('[role="status"]');
      if (!target || !status) return;
      try {
        await navigator.clipboard.writeText(target.textContent.trim());
        status.textContent = 'Copiado al portapapeles.';
      } catch (error) {
        var range = document.createRange();
        range.selectNodeContents(target);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        target.focus();
        status.textContent = 'Texto seleccionado: utiliza la opción Copiar de tu dispositivo.';
      }
    });
  });

  var filterButtons = document.querySelectorAll('[data-artifact-filter]');
  var cards = document.querySelectorAll('.artifact-card[data-platform]');
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.dataset.artifactFilter;
      filterButtons.forEach(function (item) {
        var active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      cards.forEach(function (card) {
        card.hidden = filter !== 'all' && card.dataset.platform !== filter;
      });
    });
  });

  var dialog = document.querySelector('.artifact-lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  var dialogImage = dialog.querySelector('img');
  document.querySelectorAll('[data-artifact-image]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var sourceImage = link.querySelector('img');
      dialogImage.src = link.href;
      dialogImage.alt = sourceImage ? sourceImage.alt : 'Captura ampliada';
      dialog.showModal();
    });
  });
  dialog.querySelector('[data-lightbox-close]').addEventListener('click', function () {
    dialog.close();
  });
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) dialog.close();
  });
})();
