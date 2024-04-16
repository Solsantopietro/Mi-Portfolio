
const proyectos = document.querySelectorAll(".proyecto");
const botonesFiltro = document.querySelectorAll(".filtro");

for (let boton of botonesFiltro) {
  boton.onclick = () => {
    const botones = boton.dataset.conocimientos;
    for (let proyecto of proyectos) {
      const caja = proyecto.dataset.conocimientos;
      if (botones == caja) {
        proyecto.classList.remove("hidden");

      } else if (botones === "Todos") {
        proyecto.classList.remove("hidden");

      } else {
        proyecto.classList.add("hidden");

      }
    }
  };
}