
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(tab)?.classList.add('active');
  });
});

const photos = document.getElementById('carPhotos');
if (photos) {
  photos.addEventListener('change', () => {
    if (photos.files.length > 2) {
      alert('Solo puedes subir 2 fotos como máximo.');
      photos.value = '';
    }
  });
}

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (event) => {
    if (!form.getAttribute('action')) {
      event.preventDefault();
      alert('Formulario preparado. Para recibir solicitudes, conecta este formulario con Formspree, Netlify Forms o Google Forms. Revisa el README.');
    }
  });
});
