//musik
const musik = document.getElementById("musik");
const musikdark = document.getElementById("musikdark");
const audio = document.querySelector(".myAudio");
const audiodark = document.querySelector(".myAudioDark");
function putarmusik() {
  musikdark.style.display = "none";
  musik.style.display = "none";
  audio.play();
}
function putarmusikdark() {
  musikdark.style.display = "none";
  musik.style.display = "none";
  audiodark.play();
}

// tombol
const navMenu = document.querySelector("#nav-menu");
const tombol = document.querySelector("#tombol");
tombol.addEventListener("click", function () {
  tombol.classList.toggle("tombol-aktif");
  navMenu.classList.toggle("hidden");
});

// navbar
window.onscroll = function () {
  const toTop = document.querySelector("#to-Top");
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;
  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
  console.log("navbar fixed");
};
// Dark
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

window.onload = function () {
  update_time();
};
