// Shared utilities across all tools

function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 1800);
  });
}

function setupCopyBtn(outputId, btnId) {
  const btn = document.getElementById(btnId);
  const out = document.getElementById(outputId);
  if (!btn || !out) return;
  btn.addEventListener('click', () => copyToClipboard(out.textContent, btn));
}

function showError(outputId, msg) {
  const el = document.getElementById(outputId);
  if (el) {
    el.style.color = 'var(--error)';
    el.textContent = '⚠ ' + msg;
  }
}

function showOutput(outputId, text, isSuccess = true) {
  const el = document.getElementById(outputId);
  if (el) {
    el.style.color = isSuccess ? 'var(--text)' : 'var(--error)';
    el.textContent = text;
  }
}

// Marks nav link active based on current page
(function markActiveNav() {
  const path = location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (path.includes(a.getAttribute('href').replace('../', '').replace('./', ''))) {
      a.classList.add('active');
    }
  });
})();
