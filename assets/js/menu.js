const botaoAbrir = document.querySelector("#botaoAbrir");
const botaoFechar = document.querySelector("#botaoFechar");
const overlay = document.querySelector(".overlay");
const itemsMenu = document.querySelector(".menu-items");

const toggleMenu = () => {
  itemsMenu.classList.toggle("active");
  overlay.classList.toggle("active");

  botaoAbrir.classList.toggle("hidden");
  botaoFechar.classList.toggle("hidden");
};

botaoAbrir.addEventListener("click", toggleMenu);
botaoFechar.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
