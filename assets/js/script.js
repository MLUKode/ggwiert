/*==================== ANIMATE MAIN-HEADER TOGGLE ====================*/
const navToggle = document.getElementById("main-nav-toggle");
document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector(".main-nav-toggle").addEventListener("click", () => {
    navToggle.classList.toggle("active");
  });
});

/*==================== CHANGE  HEADER ====================*/
const headerEl = document.querySelector(".top-header");
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.querySelector(".main-header").classList.add("scroll-header");
      sectionHeroEl.classList.add("margin-top");
    } else {
      document.querySelector(".main-header").classList.remove("scroll-header");
      sectionHeroEl.classList.remove("margin-top");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);
obs.observe(headerEl);

/*==================== SHOW/HIDE MENU ====================*/
const navMenu = document.getElementById("nav-menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
}
let navLink = document.querySelectorAll(".main-nav-link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => {
  n.addEventListener("click", linkAction);
  n.addEventListener("click", () => {
    navToggle.classList.toggle("active");
  });
});

navLink.forEach((button) => {
  button.addEventListener("click", function () {
    navLink.forEach((btn) => btn.classList.remove("main-nav-link-active"));
    this.classList.add("main-nav-link-active");
  });
});

// active link section
const sec = document.querySelectorAll("section");

function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  navLink.forEach((ltx) => ltx.classList.remove("main-nav-link-active"));
  navLink[len].classList.add("main-nav-link-active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// message
function popup() {
  var Name = document.getElementById("full-name");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var msg = document.getElementById("message");
  var okMessage = document.getElementById("ok-message");

  if (
    Name.value !== "" &&
    email.value !== "" &&
    phone.value !== "" &&
    msg.value !== ""
  ) {
    okMessage.style.display = "block";
  }
}
