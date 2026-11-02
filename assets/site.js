// Shared behaviour: theme toggle, TOC highlighting, KaTeX auto-render.
(function () {
  var root = document.documentElement;
  try { var saved = localStorage.getItem('theme'); if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved); } catch (e) {}
  function current() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function setTheme(t) { root.setAttribute('data-theme', t); try { localStorage.setItem('theme', t); } catch (e) {} updateBtn(); document.dispatchEvent(new CustomEvent('themechange')); }
  function updateBtn() { var b = document.getElementById('themeBtn'); if (b) b.textContent = current() === 'dark' ? 'Light mode' : 'Dark mode'; }
  document.addEventListener('DOMContentLoaded', function () {
    var b = document.getElementById('themeBtn');
    if (b) { updateBtn(); b.addEventListener('click', function () { setTheme(current() === 'dark' ? 'light' : 'dark'); }); }
    // TOC active section
    var links = Array.prototype.slice.call(document.querySelectorAll('.toc a[href^="#"]'));
    if (links.length && 'IntersectionObserver' in window) {
      var map = {};
      links.forEach(function (a) { var el = document.getElementById(a.getAttribute('href').slice(1)); if (el) map[el.id] = a; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { links.forEach(function (a) { a.classList.remove('active'); }); map[en.target.id].classList.add('active'); } });
      }, { rootMargin: '-20% 0px -70% 0px' });
      Object.keys(map).forEach(function (id) { io.observe(document.getElementById(id)); });
    }
    // KaTeX
    if (window.renderMathInElement) {
      renderMathInElement(document.body, { delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true }
      ], throwOnError: false });
    }
  });
})();
