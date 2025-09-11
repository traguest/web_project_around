import { enableValidation } from "./validate.js";
import { cerrarEscape } from "./closeKey.js";
import { superposicion } from "./closeExt.js";
import { enableValidation2 } from "./validacion2.js";
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

  let corazon = document.querySelector(".content__corazon");

  class Card {
    constructor(name, link) {
      this._name = name;
      this._link = link;
    }

    _generateTemplate() {
      const getTemplate = document
        .querySelector(".template")
        .content.querySelector(".content__target")
        .cloneNode(true);

      return getTemplate;
    }

    generateCard() {
      this.element = this._generateTemplate();
      //this._setEventListeners();
      this.element
        .querySelector(".content__target-image")
        .setAttribute("src", this._link);

      this.element.querySelector(".content__text").textContent = this._name;

      this.element
        .querySelector(".content__capa")
        .append(this.element.querySelector(".content__text"));

      this.element
        .querySelector(".content__capa")
        .append(this.element.querySelector(".content__corazon"));

      return this.element;
    }
  }

  lista.forEach((item) => {
    const card = new Card(item.name, item.link);

    const agregar = card.generateCard();

    document.querySelector(".content__element").append(agregar);
  });

  console.log("Hola mundo");
});
