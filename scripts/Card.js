let contenido = document.querySelector(".contentImage");
let Imagen = document.querySelector(".contentImage__target-image");

export class Card {
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

  _cambio(corazon) {
    if (corazon.getAttribute("fill") === "black") {
      corazon.setAttribute("fill", "white");
    } else {
      corazon.setAttribute("fill", "black");
    }
  }

  _eliminar(e) {
    let hijo = e.target;
    let padre = hijo.parentElement.parentElement;

    //console.log(padre);
    padre.remove();
  }

  _abrir(e) {
    // Imagen.src = this._link;
    contenido.classList.add("content__visible");
    console.log("hola mundo");
  }

  generateCard() {
    this.element = this._generateTemplate();

    this.element
      .querySelector(".content__target-image")
      .setAttribute("src", this._link);

    this.element
      .querySelector(".content__target-image")
      .addEventListener("click", (e) => {
        this._abrir(e);
      });

    this.element.querySelector(".content__text").textContent = this._name;

    this.element
      .querySelector(".content__capa")
      .append(this.element.querySelector(".content__text"));

    this.element
      .querySelector(".content__corazon")
      .addEventListener("click", (e) => {
        let corazon = e.target;
        this._cambio(corazon);
      });

    this.element
      .querySelector(".content__image-delete")
      .addEventListener("click", (e) => {
        this._eliminar(e);
      });

    this.element
      .querySelector(".content__capa")
      .append(this.element.querySelector(".content__corazon"));

    return this.element;
  }
}
