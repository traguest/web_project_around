document.addEventListener("DOMContentLoaded", () => {
  let edit = document.querySelector(".description__edit");

  let nombre = document.querySelector(".description__text");
  let profesion = document.querySelector(".description__span");

  let reglon1 = document.querySelector(".popup__text-nameInput");
  let reglon2 = document.querySelector(".popup__text-jobInput");

  let cerrar = document.querySelector(".popup__close");
  let boton = document.querySelector(".popup");
  let linea = document.querySelector(".header__content ");
  let formElement = document.querySelector(".popup__save");
  /* let color = document.querySelector(".landscapes__element");
  let valores = [
    "landscapes__element-color1",
    "landscapes__element-color2",
    "landscapes__element-color3",
    "landscapes__element-color4",
    "landscapes__element-color5",
    "landscapes__element-color6",
  ];
*/
  function cambioColor() {
    /* let i;
    let clase = event.target;
    for (i = 0; i < valores.length; i++) {
      if (clase === valores[i]) {
        clase = valores[i];
      }
    }

    console.log(clase);
    */

    let hexa = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "E",
      "F",
    ];

    setInterval(() => {
      let acom = "#";
      let posicion = 0;
      for (let i = 0; i < 6; i++) {
        posicion = Math.floor(Math.random() * (hexa.length - 0) + 0);
        acom += hexa[posicion];
      }
      console.log(acom);
      linea.setAttribute(
        "style",
        "border-bottom: 1px solid" +
          acom +
          ";transition-property:color;transition-duration: 1s;transition-timing-function: ease-in;"
      );
    }, 5000);
  }
  cambioColor();

  edit.classList.add("description__edit");
  function abrir(evt) {
    evt.preventDefault();
    boton.setAttribute("style", "display:block");

    reglon1.value = document
      .querySelector(".description__text")
      .textContent.trim();
    reglon2.value = document.querySelector(".description__span").textContent;
  }

  function accion(evt) {
    evt.preventDefault();
    boton.setAttribute("style", "display:none");
  }

  function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector(".popup__text-nameInput");
    let jobInput = document.querySelector(".popup__text-jobInput");

    nombre.textContent = nameInput.value;
    profesion.textContent = jobInput.value;
    boton.setAttribute("style", "display:none");
  }
  //color.addEventListener("mouseover", cambioColor);
  edit.addEventListener("click", abrir);
  cerrar.addEventListener("click", accion);
  formElement.addEventListener("click", handleProfileFormSubmit);
});
