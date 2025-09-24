import { Card } from "./Card.js";
export class Utils {
  constructor(configuracion) {
    this._configuracion = configuracion;
    this._BotonEntrada = document.querySelector(configuracion.BotonEntrada);
    this._boton = document.querySelector(this._configuracion.cerrar);
    this._botonGuardar = document.querySelector(
      this._configuracion.botonGuardar
    );

    this.link = this._eventos();
    this._agregar();
  }

  _cambiar(estado) {
    let contenedorPrincipal = document.querySelector(
      this._configuracion.contenedorPrincipal
    );
    contenedorPrincipal.setAttribute("style", "display:" + estado);
    console.log(estado);
  }

  _eventos() {
    let estado;

    this._BotonEntrada.addEventListener("click", (e) => {
      estado = "block";

      if (e.target.className === "description__edit") {
        this._modificar(estado);
      }

      this._cambiar(estado);
    });

    this._boton.addEventListener("click", () => {
      estado = "none";
      this._cambiar(estado);
    });
  }

  _agregar() {
    let estado = "none";
    this._botonGuardar.addEventListener("click", (e) => {
      if (e.target.className === "add__save") {
        this._modificarTexto();
        this._cambiar(estado);
      } else {
        this._agregarTarjeta();
      }
    });
  }

  _agregarTarjeta() {
    let estado = "none";
    let obtenerUrl = document.querySelector("#url-input").value;
    let obtenerTexto = document.querySelector("#text-input").value;

    const lista = {
      name: obtenerTexto,
      link: obtenerUrl,
    };

    const card = new Card(lista, ".template");
    const agregar = card.generateCard();
    document.querySelector(".content__element").append(agregar);
    this._cambiar(estado);
  }

  _modificar(estado) {
    let nombre = document.querySelector(this._configuracion.nombre);
    let profesion = document.querySelector(this._configuracion.profesion);

    let nombreagregar = document.querySelector(this._configuracion.claseText);
    let profesionagregar = document.querySelector(
      this._configuracion.profesionInputId
    );

    nombreagregar.value = nombre.innerText;
    profesionagregar.value = profesion.innerText;

    this._cambiar(estado);
  }

  _modificarTexto() {
    let nombreagregar = document.querySelector(
      this._configuracion.claseText
    ).value;
    let profesionagregar = document.querySelector(
      this._configuracion.profesionInputId
    ).value;
    let nombre = document.querySelector(this._configuracion.nombre);
    let profesion = document.querySelector(this._configuracion.profesion);

    nombre.textContent = nombreagregar;
    profesion.textContent = profesionagregar;
  }
}
