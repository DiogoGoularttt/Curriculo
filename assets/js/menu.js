const botaoAbrir = document.querySelector(".fa-bars");
const botaoFechar = document.querySelector(".fa-xmark");
const overlay = document.querySelector(".overlay");
const itemsMenu = document.querySelector(".menu-items");
let isMenuOpen = false;

const openMenu = () => {
  if (isMenuOpen == false) {
    itemsMenu.style.display = "flex";
    overlay.style.display = "block";
    botaoAbrir.style.display = "none";
    botaoFechar.style.display = "block";
    isMenuOpen = true;
  } else if (isMenuOpen == true) {
    itemsMenu.style.display = "none";
    overlay.style.display = "none";
    botaoFechar.style.display = "none";
    botaoAbrir.style.display = "block";
    isMenuOpen = false;
  }
};

botaoAbrir.addEventListener("click", () => {
  openMenu();
});

botaoFechar.addEventListener("click", () => {
  openMenu();
});

overlay.addEventListener("click", () => {
  openMenu();
});
