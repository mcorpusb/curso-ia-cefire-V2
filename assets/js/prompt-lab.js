(function () {
  'use strict';
  var valencian = document.documentElement.lang === 'ca-valencia' || document.querySelector('.language-switcher [lang="ca-valencia"][aria-current="page"]');
  document.querySelectorAll('[data-copy-prompt]').forEach(function (button) {
    button.hidden = false;
    button.addEventListener('click', async function () {
      var prompt = document.getElementById(button.dataset.copyPrompt);
      var status = button.parentElement.querySelector('[role="status"]');
      try {
        await navigator.clipboard.writeText(prompt.textContent);
        status.textContent = valencian ? 'Prompt copiat.' : 'Prompt copiado.';
      } catch (error) {
        var range = document.createRange();
        range.selectNodeContents(prompt);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        prompt.focus();
        status.textContent = valencian ? 'Text seleccionat: usa l’opció Copia del dispositiu.' : 'Texto seleccionado: usa la opción Copiar del dispositivo.';
      }
    });
  });
})();
