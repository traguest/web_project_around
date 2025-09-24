export class FormValidator {
  constructor(configuracion, formulario) {
    this._configuracion = configuracion;
    this._formelement = formulario;
    this._boton = configuracion.inactiveButtonClass;

    this._error = configuracion.error;

    this._inputSelector = configuracion.inputSelector;
    this._inputList = Array.from(
      this._formelement.querySelectorAll(this._inputSelector)
    );

    this._botonx = this._formelement.querySelector(this._boton);
  }

  enableValidation() {
    this._formelement.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    this._setEventListeners();
    this._toggleButtonState();
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButtonState(); // Actualiza el botón después de cada input
      });
    });
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formelement.querySelector(
      `.${inputElement.id}-error`
    );
    //inputElement.classList.add(this._error);
    errorElement.textContent = errorMessage;
    // errorElement.classList.add(this._error);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formelement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._error);
    errorElement.classList.remove(this._error);
    errorElement.textContent = "";
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  }

  // Devuelve true si algún input es inválido
  _hasInvalidInput() {
    return this._inputList.some((input) => !input.validity.valid);
  }

  _disableButton() {
    this._botonx.classList.add(this._error);
    this._botonx.disabled = true;
  }

  _enableButton() {
    this._botonx.classList.remove(this._error);
    this._botonx.disabled = false;
  }
}
