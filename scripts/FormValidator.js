export class FormValidator {
  constructor(configuracion) {
    this._configuracion = configuracion;
    this._BotonEntrada = document.querySelector(configuracion.BotonEntrada);
    this._boton = document.querySelector(this._configuracion.cerrar);

    this.eventos();
  }

  _cambiar(estado) {
    let contenedorPrincipal = document.querySelector(
      this._configuracion.contenedorPrincipal
    );
    contenedorPrincipal.setAttribute("style", "display:" + estado);
    console.log(estado);
  }

  eventos() {
    let estado;

    this._BotonEntrada.addEventListener("click", (e) => {
      estado = "block";

      if (e.target.className === "description__edit") {
        this.agregar(estado);
      }

      this._cambiar(estado);
    });

    this._boton.addEventListener("click", () => {
      estado = "none";
      this._cambiar(estado);
    });
  }

  agregar(estado) {
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
}
