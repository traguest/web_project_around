export function superposicion(obj) {
  let contenedor = document.querySelector(obj.contenedor);
  let bloque = document.querySelector(obj.bloque);
  document.addEventListener("mousemove", function (e) {
    const elem = document.elementFromPoint(e.clientX, e.clientY);
    let z = window.getComputedStyle(elem).zIndex;
    //let color = window.getComputedStyle(elem);

    if (z === "0") {
      console.log(z);
      contenedor.addEventListener("click", accion);
      z = "";
    } else {
      console.log(z);
      bloque.addEventListener("click", accion2);

      z = "";
    }
  });

  function accion2() {
    let cont = 0;

    contenedor.removeEventListener("click", accion);

    console.log(cont);
  }

  function accion() {
    contenedor.style.display = "none";
  }
}
