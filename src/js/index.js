// Preloader
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  setTimeout(() => {
    preloader.style.height = "0";
  }, 3000);
});

// Navigation Bar
const nav = document.querySelector("#nav");
const navBtnGroup = document.querySelector(".nav-btn-group");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const navLine4 = document.querySelector(".nav-line-4");

navBtnGroup.addEventListener("click", function () {
  if (navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    navBtnGroup.classList.remove("active");
    setTimeout(() => {
      navMenu.style.transform = "scaleY(0)";
    }, 100);
    setTimeout(() => {
      navLine4.style.transform = "rotate(0)";
    }, 100);
  } else {
    navMenu.classList.add("active");
    navMenu.style.transform = "scaleY(1)";
    navBtnGroup.classList.add("active");
    setTimeout(() => {
      navLine4.style.transform = "rotate(45deg)";
      navLine4.style.transition = "transform 400ms ease";
    }, 200);
  }
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    header.style.transform = `translateY(-${window.scrollY}px)`;
    if (window.scrollY > 300) {
      header.classList.add("sticky");
      header.style.transform = "translateY(0)";
    } else {
      header.classList.remove("sticky");
      header.style.transform = `translateY(-${window.scrollY}px)`;
    }
  });
});

// Banner Text Animation
const heroText = document.querySelector(".hero-section .intro_text text");
window.addEventListener("load", () => {
  setTimeout(() => {
    heroText.classList.add("animate-stroke");
  }, 3500);
});

// Scroll Top Button
window.addEventListener("scroll", () => {
  const scrollTopBtn = document.querySelector(".scroll-top");
  const circlePath = document.querySelector(".progress-circle path");
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("progress-done");
  } else {
    scrollTopBtn.classList.remove("progress-done");
    circlePath.style.strokeDashoffset = 0;
  }

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});

