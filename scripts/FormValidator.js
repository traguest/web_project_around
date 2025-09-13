let editar = document.querySelector(".description__edit");
let modal = document.querySelector(".add");
export class FormValidator {
  constructor(configuracion) {
    this._configuracion = configuracion;
    this.eventos();
  }

  _cambiar(estado) {
    modal.setAttribute("style", "display:" + estado);
    console.log(estado);
  }

  eventos() {
    let estado;
    let boton = document.querySelector(this._configuracion.cerrar);
    //  console.log(this._configuracion.cerrar);
    editar.addEventListener("click", () => {
      this._cambiar((estado = "block"));
    });

    boton.addEventListener("click", () => {
      this._cambiar((estado = "none"));
    });
  }

  mostrar() {
    console.log(this._configuracion);
  }
}
