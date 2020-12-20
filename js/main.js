const container = document.querySelector("#container");

document.querySelector("#button-menu").addEventListener("click", () => {
  container.classList.toggle("active");
});

const comprobarAncho = () => {
  if (window.innerWidth <= 768) {
    container.classList.remove("active");
  } else {
    container.classList.add("active");
  }
};

comprobarAncho();

window.addEventListener("resize", () => {
  comprobarAncho();
});
