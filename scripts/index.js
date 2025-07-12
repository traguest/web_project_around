document.addEventListener("DOMContentLoaded", () => {
  let edit = document.querySelector(".description__edit");

  let nombre = document.querySelector(".description__text");
  let profesion = document.querySelector(".description__span");

  let reglon1 = document.querySelector(".popup__text-nameInput");
  let reglon2 = document.querySelector(".popup__text-jobInput");

  let cerrar = document.querySelector(".popup__close");
  let boton = document.querySelector(".popup");
  let linea = document.querySelector(".header__content");
  let formElement = document.querySelector(".popup__save");
  let contenedor = document.querySelector(".landscapes__content");
  let template = document.querySelector("#landscapes-template").content;
  let tarjeta;
  const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
    },
  ];

  for (let i = 0; i < 6; i++) {
    tarjeta = template.querySelector(".landscapes__element").cloneNode(true);

    let eliminar = document.createElement("img");
    eliminar.classList.add("landscapes__image-delete");
    eliminar.setAttribute("src", "images/eliminar.png");

    tarjeta.append(eliminar);

    tarjeta
      .querySelector(".landscapes__image")
      .setAttribute("src", "" + initialCards[i].link);

    tarjeta.querySelector(".landscapes__text").textContent =
      initialCards[i].name;

    tarjeta
      .querySelector(".landscapes__central")
      .append(tarjeta.querySelector(".landscapes__text"));
    tarjeta
      .querySelector(".landscapes__central")
      .append(tarjeta.querySelector(".landscapes__love"));

    contenedor.append(tarjeta);
  }

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
