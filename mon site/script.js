/* ==========================================================================
   SVT SCHOOL - ARCHITECTURE SPA (ROUTAGE INTERNE)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  
  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");
  const logoHome = document.getElementById("logoHome");
  const navLinks = document.querySelectorAll(".nav-link");
  const pageViews = document.querySelectorAll(".page-view");
  const pageTriggers = document.querySelectorAll(".page-trigger");
  const backToHomeButtons = document.querySelectorAll(".back-to-home");

  function switchPage(targetPageId) {
    pageViews.forEach(view => {
      view.classList.remove("active-view");
    });

    const targetView = document.getElementById(targetPageId);
    if (targetView) {
      targetView.classList.add("active-view");
    }

    navLinks.forEach(link => {
      if (link.getAttribute("data-target") === targetPageId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (navbar && navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      menuToggle.querySelector("i").className = "fa-solid fa-bars";
    }
  }

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-target");
      switchPage(target);
    });
  });

  pageTriggers.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      switchPage(target);
    });
  });

  backToHomeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      switchPage("home");
    });
  });

  if (logoHome) {
    logoHome.addEventListener("click", () => {
      switchPage("home");
    });
  }

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
      const icon = menuToggle.querySelector("i");
      if (navbar.classList.contains("active")) {
        icon.className = "fa-solid fa-xmark";
      } else {
        icon.className = "fa-solid fa-bars";
      }
    });
  }

  const quizButtons = document.querySelectorAll(".quiz-toggle-btn");
  quizButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const parentBox = btn.parentElement;
      const content = parentBox.querySelector(".quiz-collapse-content");

      if (!content) return;

      parentBox.classList.toggle("active");
      content.classList.toggle("show");
    });
  });
});