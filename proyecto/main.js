/* =========================================================
   1) OBTENER REPOS DE GITHUB
   ========================================================= */
async function fetchRepos(username) {
  const url = `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('No se pudo obtener repositorios');
  return await res.json();
}

function createProjectCard(repo) {
  const card = document.createElement('div');
  card.className = 'project-card-mini';
  card.setAttribute('data-repo', repo.html_url);

  card.innerHTML = `
    <div class="project-mini-title">${repo.name}</div>
    <div class="project-mini-desc">${repo.description || 'Sin descripción'}</div>
    <div class="project-mini-tech">
      ${(repo.topics && repo.topics.length) ? repo.topics.join(' · ') : (repo.language || '—')}
    </div>
  `;

  card.addEventListener('click', () => openProjectModal(repo));
  return card;
}

function renderGallery(repos) {
  const gallery = document.getElementById('projectsGallery');
  gallery.innerHTML = '';

  if (!repos.length) {
    gallery.innerHTML = `<p data-i18n="gallery.noRepos">No se encontraron repositorios.</p>`;
    return;
  }

  repos.slice(0, 24).forEach(repo => {
    gallery.appendChild(createProjectCard(repo));
  });
}

/* =========================================================
   2) MODAL DE PROYECTOS
   ========================================================= */
const modal = document.getElementById('projectModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');

function openProjectModal(repo) {
  modal.setAttribute('aria-hidden', 'false');
  document.getElementById('modalTitle').textContent = repo.name;
  document.getElementById('modalDescription').textContent = repo.description || 'Sin descripción';
  document.getElementById('modalTech').textContent =
    (repo.topics && repo.topics.length) ? repo.topics.join(', ') : (repo.language || '—');

  const link = document.getElementById('modalRepoLink');
  link.href = repo.html_url;
  link.textContent = link.dataset.i18n ? '' : 'Ver repo';

  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeProjectModal);
modal.addEventListener('click', e => { if (e.target === modal) closeProjectModal(); });

/* Cargar repos al inicio */
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('loadReposBtn');
  btn.click();
});

document.getElementById('loadReposBtn').addEventListener('click', async () => {
  const user = document.getElementById('ghUser').value.trim() || 'rzuni';
  const btn = document.getElementById('loadReposBtn');

  btn.disabled = true;
  btn.textContent = (localStorage.getItem('lang') === 'en') ? 'Loading...' : 'Cargando...';

  try {
    const repos = await fetchRepos(user);
    renderGallery(repos);
  } catch (err) {
    document.getElementById('projectsGallery').innerHTML =
      `<p style="color:crimson;">${err.message}</p>`;
  }

  btn.disabled = false;
  btn.textContent = (localStorage.getItem('lang') === 'en') ?
    'Load repos' : 'Cargar repositorios';
});

/* =========================================================
   3) BOTÓN SCROLL TOP
   ========================================================= */
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('show', window.scrollY > 300);
});
scrollTopBtn.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

/* =========================================================
   4) EMAILJS – FORMULARIO DE CONTACTO
   ========================================================= */
(function initContact() {
  const serviceID = 'service_f0i3chg';
  const templateID = 'template_68cdhby';
  const publicKey = 'xhV_JCkufuloBmcBV0MwC';

  if (!window.emailjs) {
    const s = document.createElement('script');
    s.src = 'https://cdn.emailjs.com/dist/email.min.js';
    s.defer = true;
    s.onload = () => emailjs.init(publicKey);
    document.head.appendChild(s);
  } else emailjs.init(publicKey);

  const form = document.getElementById('contactForm');
  const status = document.getElementById('contactStatus');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      status.textContent = localStorage.getItem('lang') === 'en'
        ? 'Please complete all fields.'
        : 'Por favor complete todos los campos.';
      return;
    }

    status.textContent =
      localStorage.getItem('lang') === 'en' ? 'Sending...' : 'Enviando...';

    try {
      await emailjs.send(serviceID, templateID, {
        from_name: name,
        from_email: email,
        message: message,
      });

      status.textContent =
        localStorage.getItem('lang') === 'en'
          ? 'Message sent — thanks!'
          : 'Mensaje enviado — ¡gracias!';
      form.reset();

    } catch (err) {
      status.textContent =
        localStorage.getItem('lang') === 'en'
          ? 'Error sending message.'
          : 'Error al enviar el mensaje.';
    }
  });
})();

/* =========================================================
   5) SMOOTH SCROLL LINKS
   ========================================================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const section = document.querySelector(link.getAttribute("href"));
    if (!section) return;
    e.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

/* =========================================================
   6) SLIDER TESTIMONIOS (ÚNICA Y CORRECTA VERSIÓN)
   ========================================================= */
const tsTrack = document.querySelector(".testimonials-track");
const tsSlides = document.querySelectorAll(".testimony");
const tsPrev = document.querySelector(".ts-prev");
const tsNext = document.querySelector(".ts-next");

let tsIndex = 0;

function updateTestimonial() {
  tsTrack.style.transform = `translateX(-${tsIndex * 100}%)`;
}

tsNext.addEventListener("click", () => {
  tsIndex = (tsIndex + 1) % tsSlides.length;
  updateTestimonial();
});

tsPrev.addEventListener("click", () => {
  tsIndex = (tsIndex - 1 + tsSlides.length) % tsSlides.length;
  updateTestimonial();
});

/* Automático */
setInterval(() => {
  tsIndex = (tsIndex + 1) % tsSlides.length;
  updateTestimonial();
}, 5000);

/* Touch – móvil */
let startX = 0;

tsTrack.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});
tsTrack.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    tsNext.click();
  } else if (endX - startX > 50) {
    tsPrev.click();
  }
});

/* =========================================================
   7) REVEAL SCROLL (ÚNICO Y OPTIMIZADO)
   ========================================================= */
const revealEls = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  revealEls.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
