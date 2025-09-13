import { enableValidation } from "./validate.js";
import { cerrarEscape } from "./closeKey.js";
import { superposicion } from "./closeExt.js";
import { enableValidation2 } from "./validacion2.js";

import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
document.addEventListener("DOMContentLoaded", () => {
  //console.log(equisImage);

  const lista = [
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

  lista.forEach((item) => {
    const card = new Card(item, ".template");

    const agregar = card.generateCard();

    document.querySelector(".content__element").append(agregar);
  });

  //corazon.addEventListener("click", accion);
});

const configuracion = {
  add: ".add",
  contenedor: ".add__container",
  form: ".form",
  h3: ".add__title",
  cerrar: ".add__close",
  inputTextId: "#text-input",
  claseText: ".add__text",
  ContenidoCentrado: ".add__content",
  claseEspan: ".add__text-input-error",
  tipoEspan: "text-input-error",
  profesionInputId: "#profesion-input",
  tipoEspanProfesion: "profesion-input-error",
  botonGuardar: ".add__save",
};

const v = new FormValidator(configuracion);
