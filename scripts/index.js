document.addEventListener("DOMContentLoaded", () => {
  let edit = document.querySelector(".description__edit");

  let nombre = document.querySelector(".description__text");
  let profesion = document.querySelector(".description__span");

  let reglon1 = document.querySelector(".popup__text-nameInput");
  let reglon2 = document.querySelector(".popup__text-jobInput");

  let cerrar = document.querySelector(".popup__close");
  let boton = document.querySelector(".popup");

  let formElement = document.querySelector(".popup__save");

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

  edit.addEventListener("click", abrir);
  cerrar.addEventListener("click", accion);
  formElement.addEventListener("click", handleProfileFormSubmit);
});
