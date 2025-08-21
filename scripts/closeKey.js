export function cerrarEscape(e) {
  let bloque = document.querySelector(e.bloque);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      bloque.setAttribute("style", "display:none");
    } else {
      console.log(e.key);
    }
  });
}
