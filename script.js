// init AOS
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({ once: true, duration: 700, easing: 'ease-out-cubic' });

  // set year
  document.getElementById('year').innerText = new Date().getFullYear();

  // theme from localStorage
  const root = document.documentElement;
  const saved = localStorage.getItem('site-theme');
  if (saved === 'dark') root.setAttribute('data-theme', 'dark');

  // theme toggle button
  const themeBtn = document.getElementById('themeToggle');
  themeBtn.addEventListener('click', () => {
    const cur = root.getAttribute('data-theme');
    if (cur === 'dark') {
      root.removeAttribute('data-theme');
      localStorage.setItem('site-theme', 'light');
      themeBtn.innerHTML = '<i class="bi bi-moon"></i>';
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('site-theme', 'dark');
      themeBtn.innerHTML = '<i class="bi bi-sun"></i>';
    }
  });

  // smooth anchor scrolling fallback
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
