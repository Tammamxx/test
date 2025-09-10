// AOS init
AOS.init({ duration: 800, once: true });

// Year
document.getElementById('year').innerText = new Date().getFullYear();

// Theme Toggle
const root = document.documentElement;
const savedTheme = localStorage.getItem('luxury-theme');
if (savedTheme) root.setAttribute('data-theme', savedTheme);

document.getElementById('themeToggle').addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('luxury-theme', next);
});

// Dynamic Projects
const projects = [
  {
    title: "Light/Dark Theme Toggle",
    desc: "A theme switcher with persistence and smooth transitions.",
    img: "theme-toggle.jpg",
    link: "https://github.com/Tammamxx/Light-Dark-Theme",
    tech: "HTML • CSS • JS"
  },
  {
    title: "Signup Validation",
    desc: "Form validation with real-time feedback.",
    img: "signup.jpg",
    link: "https://github.com/Tammamxx/Signup-Validation",
    tech: "HTML • JS • Bootstrap"
  },
  {
    title: "Calculator Program",
    desc: "Functional calculator with keyboard support.",
    img: "calculator.jpg",
    link: "https://github.com/Tammamxx/Calculator-Program",
    tech: "HTML • CSS • JS"
  }
];

const container = document.getElementById('projects-container');
projects.forEach((p, i) => {
  container.innerHTML += `
    <div class="col-md-4" data-aos="zoom-in" data-aos-delay="${i*100}">
      <a href="${p.link}" target="_blank" class="card h-100 text-decoration-none text-dark luxury-card">
        <img src="${p.img}" class="card-img-top" alt="${p.title}" loading="lazy">
        <div class="card-body">
          <h5 class="card-title luxury-title">${p.title}</h5>
          <p class="card-text">${p.desc}</p>
          <div class="small text-muted">${p.tech}</div>
        </div>
      </a>
    </div>
  `;
});
