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
    constructor(data, cardElement) {
      this._name = data.name;
      this._link = data.link;

      this._cardElement = cardElement;
    }

    _generateTemplate() {
      const getTemplate = document
        .querySelector(this._cardElement)
        .content.querySelector(".content__target")
        .cloneNode(true);

      return getTemplate;
    }

    setEventListenersx() {}

    generateCard() {
      this.element = this._generateTemplate();
      // this.setEventListenersx();
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

      this.setEventListenersx();
      return this.element;
    }
  }

  lista.forEach((item) => {
    const card = new Card(item, ".template");

    const agregar = card.generateCard();

    document.querySelector(".content__element").append(agregar);
  });

  //corazon.addEventListener("click", accion);
});
