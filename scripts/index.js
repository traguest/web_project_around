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

  //let corazon = document.querySelector(".content__corazon");
  class Card {
    constructor(data, cardElement, corazon) {
      this._name = data.name;
      this._link = data.link;

      this._cardElement = cardElement;
      this._corazon = document.querySelector(corazon);

      console.log(this._corazon);
    }

    _generateTemplate() {
      const getTemplate = document
        .querySelector(this._cardElement)
        .content.querySelector(".content__target")
        .cloneNode(true);

      return getTemplate;
    }

    generadorValores() {
      let valores = [
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
        "D",
        "E",
        "F",
      ];
      let acom = "#";
      let aleatorio = 0;

      for (let i = 0; i < 6; i++) {
        aleatorio = Math.floor(Math.random() * (valores.length - 0) + 0);

        acom += valores[aleatorio];
      }

      return acom;
    }

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
        .querySelector(".content__corazon")
        .addEventListener("click", () => {
          this.element
            .querySelector(".content__corazon")
            .setAttribute("fill", "yellow");
          console.log("Hola mundo");
        });

      this.element
        .querySelector(".content__capa")
        .append(this.element.querySelector(".content__corazon"));

      //this.setEventListenersx();

      return this.element;
    }
  }

  lista.forEach((item) => {
    const card = new Card(item, ".template", ".content__corazon");

    const agregar = card.generateCard();

    document.querySelector(".content__element").append(agregar);
  });

  //corazon.addEventListener("click", accion);
});
