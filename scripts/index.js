import { Card } from "./Card.js";
import { Utils } from "./Utils.js";
import { FormValidator } from "./FormValidator.js";
import { cerrarEscape } from "./closeKey.js";
import { superposicion } from "./closeExt.js";
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
  BotonEntrada: ".description__edit",
  cerrar: ".add__close",
  contenedorPrincipal: ".add",
  contenedor: ".add__container",
  form: ".form",
  h3: ".add__title",
  inputTextId: "#text-input",
  claseText: ".add__text",
  ContenidoCentrado: ".add__content",
  claseEspan: ".add__text-input-error",
  tipoEspan: "text-input-error",
  profesionInputId: "#profesion-input",
  tipoEspanProfesion: "profesion-input-error",
  botonGuardar: ".add__save",
  nombre: ".description__text",
  profesion: ".description__span",
};

const configuracion2 = {
  BotonEntrada: ".description__button",
  cerrar: ".modal__close",
  contenedorPrincipal: ".modal",
  botonGuardar: ".modal__add",
  urlInput: "#url-input",
};

const v = new Utils(configuracion);
const v2 = new Utils(configuracion2);

const configuracionAdd = {
  inactiveButtonClass: ".add__save",
  error: "add__submit_disabled",
  inputSelector: ".add__text",
};

const configuracionmodal = {
  inactiveButtonClass: ".modal__add",
  error: "modal__submit_disabled",
  inputSelector: ".modal__text",
};

const forms = Array.from(document.querySelectorAll(".form"));
const forms2 = Array.from(document.querySelectorAll(".modal__content"));

//console.log(forms);

forms2.forEach((formElement) => {
  const validator = new FormValidator(configuracionmodal, formElement);
  validator.enableValidation();
});

forms.forEach((formElement) => {
  const validator = new FormValidator(configuracionAdd, formElement);
  validator.enableValidation();
});

cerrarEscape(".add");

cerrarEscape(".modal");

const objeto1 = {
  contenedor: ".add",

  bloque: ".add__container",
};

const objeto2 = {
  contenedor: ".modal",

  bloque: ".modal__container",
};

superposicion(objeto1);
superposicion(objeto2);
