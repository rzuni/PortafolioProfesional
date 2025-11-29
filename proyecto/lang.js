// =========================================================
// SISTEMA MULTI-IDIOMA (ES / EN)
// =========================================================

const translations = {
  es: {
    "header.name": "Ronny Zuñiga",

    "hero.name": "Ronny Zuñiga",
    "hero.role": "Desarrollador de software",
    "hero.quote": "\"Desarrollo confiable, resultados reales\"",

    "about.title": "Sobre mí",
    "about.text":
      "Desarrollador de software con experiencia en C#, Java, JavaScript y SQL. He trabajado en proyectos que integran autenticación segura, manejo de bases de datos, desarrollo de APIs y aplicaciones web dinámicas con frameworks como Spring Boot y Angular.",

    "mission.title": "Misión",
    "mission.text":
      "Brindar soluciones tecnológicas innovadoras y funcionales que impulsen la productividad y eficiencia aplicando mis conocimientos desde un enfoque en la calidad.",

    "vision.title": "Visión",
    "vision.text":
      "Convertirme en un profesional altamente especializado en desarrollo de software y colaborar en proyectos grandes que generen un cambio.",

    "values.title": "Valores",
    "values.quality": "Calidad",
    "values.innovation": "Innovación",
    "values.teamwork": "Trabajo en equipo",
    "values.ethics": "Ética profesional",

    "skills.title": "Skills",

    "footer.text": "© 2024 Ronny Zuñiga. Todos los derechos reservados.",

    /* -------- NAV -------- */
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.skills": "Skills",
    "nav.projects": "Proyectos",
    "nav.gallery": "Galería",
    "nav.contact": "Contacto",

    /* -------- PROJECTS -------- */
    "projects.title": "Proyectos",
    "projects.gym.title": "Sistema administrativo para gimnasio (.NET MVC)",
    "projects.gym.text": "Sistema web desarrollado con C#, JavaScript, HTML y CSS usando el patrón MVC y SQL Server como base de datos.",

    "projects.warframe.title": "Warframe Webpages",
    "projects.warframe.text": "Aplicación web para consultar estadísticas de ítems del juego, usando C#, JavaScript y BigQuery como base de datos.",

    "projects.pdfai.title": "AI PDF Reader & Summary",
    "projects.pdfai.text": "Plataforma que resume archivos PDF y PPTX usando IA. Desarrollada con Angular, TypeScript, Java Spring Boot y MariaDB.",

    /* -------- GALLERY -------- */
    "gallery.title": "Galería de proyectos",
    "gallery.subtitle": "Proyectos destacados publicados en GitHub.",
    "gallery.load": "Cargar repositorios",
    "gallery.noRepos": "No se encontraron repositorios.",
    "gallery.techTitle": "Tecnologías",
    "gallery.viewRepo": "Ver repo",

    /* -------- CONTACT -------- */
    "contact.title": "Contacto",
    "contact.subtitle": "¿Interesado en colaborar? Envíame un mensaje.",
    "contact.labelName": "Nombre",
    "contact.labelEmail": "Correo",
    "contact.labelMessage": "Mensaje",
    "contact.send": "Enviar",

    /* -------- CV -------- */
    "cv.download": "Descargar CV",

    /* -------- SOCIAL -------- */
    "social.linkedin": "LinkedIn",
    "social.github": "GitHub",

    /* -------- TESTIMONIOS -------- */
    "testimonials.title": "Testimonios",
    "test1.text": "Excelente profesional, muy responsable y enfocado en calidad.",
    "test1.author": "- Cliente 1",
    "test2.text": "Dominio total del backend y frontend. Claramente recomendado.",
    "test2.author": "- Cliente 2",
    "test3.text": "Entrega rápida, ordenada y con muy buena comunicación.",
    "test3.author": "- Cliente 3",

    /* -------- FAQ -------- */
    "faq.title": "Preguntas frecuentes",
    "faq.q1": "¿Cuánto tarda un proyecto típico?",
    "faq.a1": "Entre 1 y 4 semanas dependiendo del alcance.",
    "faq.q2": "¿Brindas soporte y mantenimiento?",
    "faq.a2": "Sí, puedo ofrecer mantenimiento mensual o por proyecto.",
    "faq.q3": "¿Trabajas con clientes internacionales?",
    "faq.a3": "Sí, proyectos en inglés y español sin problema.",
  },

  // =========================================================
  // ENGLISH
  // =========================================================
  en: {
    "header.name": "Ronny Zuñiga",

    "hero.name": "Ronny Zuñiga",
    "hero.role": "Software Developer",
    "hero.quote": "\"Reliable development, real results\"",

    "about.title": "About me",
    "about.text":
      "Software developer with experience in C#, Java, JavaScript and SQL. I have worked on projects that integrate secure authentication, database management, API development, and dynamic web applications using frameworks such as Spring Boot and Angular.",

    "mission.title": "Mission",
    "mission.text":
      "Provide innovative and functional technological solutions that boost productivity and efficiency, applying my knowledge with a strong focus on quality.",

    "vision.title": "Vision",
    "vision.text":
      "Become a highly specialized professional in software development and collaborate on large-scale projects that create real impact.",

    "values.title": "Values",
    "values.quality": "Quality",
    "values.innovation": "Innovation",
    "values.teamwork": "Teamwork",
    "values.ethics": "Professional ethics",

    "skills.title": "Skills",

    "footer.text": "© 2024 Ronny Zuñiga. All rights reserved.",

    /* -------- NAV -------- */
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",

    /* -------- PROJECTS -------- */
    "projects.title": "Projects",
    "projects.gym.title": "Gym Administrative System (.NET MVC)",
    "projects.gym.text": "Web system developed using C#, JavaScript, HTML and CSS with the MVC pattern and SQL Server as the project database.",

    "projects.warframe.title": "Warframe Webpages",
    "projects.warframe.text": "Web application for tracking in-game item statistics using C#, JavaScript and BigQuery as the project database.",

    "projects.pdfai.title": "AI PDF Reader & Summary",
    "projects.pdfai.text": "Platform that summarizes PDF and PPTX files using AI. Built with Angular, TypeScript, Java Spring Boot and MariaDB.",

    /* -------- GALLERY -------- */
    "gallery.title": "Projects gallery",
    "gallery.subtitle": "Featured projects published on GitHub.",
    "gallery.load": "Load repos",
    "gallery.noRepos": "No repositories found.",
    "gallery.techTitle": "Technologies",
    "gallery.viewRepo": "View repo",

    /* -------- CONTACT -------- */
    "contact.title": "Contact",
    "contact.subtitle": "Interested in collaborating? Send me a message.",
    "contact.labelName": "Name",
    "contact.labelEmail": "Email",
    "contact.labelMessage": "Message",
    "contact.send": "Send",

    /* -------- CV -------- */
    "cv.download": "Download CV",

    /* -------- SOCIAL -------- */
    "social.linkedin": "LinkedIn",
    "social.github": "GitHub",

    /* -------- TESTIMONIALS -------- */
    "testimonials.title": "Testimonials",
    "test1.text": "Excellent professional, very responsible and quality-focused.",
    "test1.author": "- Client 1",
    "test2.text": "Strong backend and frontend mastery. Highly recommended.",
    "test2.author": "- Client 2",
    "test3.text": "Fast delivery, organized work and great communication.",
    "test3.author": "- Client 3",

    /* -------- FAQ -------- */
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "How long does a typical project take?",
    "faq.a1": "Between 1 and 4 weeks depending on the scope.",
    "faq.q2": "Do you offer support and maintenance?",
    "faq.a2": "Yes, I can provide monthly or project-based maintenance.",
    "faq.q3": "Do you work with international clients?",
    "faq.a3": "Yes, projects in English and Spanish without problem.",
  }
};



document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const toggle = document.getElementById("langToggle");
  const i18nElements = document.querySelectorAll("[data-i18n]");

  let currentLang = localStorage.getItem("lang") || "es";
  toggle.checked = currentLang === "en";

  function applyTranslations(lang) {
    i18nElements.forEach(el => {
      const key = el.dataset.i18n;
      const text = translations[lang][key];
      if (text) {
        el.classList.remove("text-fade");
        void el.offsetWidth; 
        el.textContent = text;
        el.classList.add("text-fade");
      }
    });

    html.lang = lang;
  }

  applyTranslations(currentLang);

  toggle.addEventListener("change", () => {
    currentLang = toggle.checked ? "en" : "es";
    localStorage.setItem("lang", currentLang);
    applyTranslations(currentLang);
  });
});
