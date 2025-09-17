// Cambia la función isValid() de modo que tenga los parámetros formElement e inputElement
// en lugar de tomar las variables correspondientes del scope externo

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // El parámetro de showInputError() es ahora un formulario
    // que contiene un campo a comprobar
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // Lo mismo para hideInputError(), su parámetro es ahora un formulario
    // que contiene un campo a comprobar
    hideInputError(formElement, inputElement);
  }
};

const showInputError = (formElement, inputElement, errorMessage) => {
  // Encuentra el elemento del mensaje de error dentro de la propia función
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // El resto permanece intacto
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  // Encuentra el elemento del mensaje de error
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // El resto permanece intacto
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

formInput.addEventListener("input", isValid);

const setEventListeners = (formElement) => {
  // Encuentra todos los campos dentro del formulario y
  // crea un array a partir de estos, utilizando el método Array.from()
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));

  // Itera sobre el array obtenido
  inputList.forEach((inputElement) => {
    // agrega el controlador de eventos de entrada a cada campo
    inputElement.addEventListener("input", () => {
      // Llama a la función isValid() dentro del callback
      // y pásale el formulario y el elemento a comprobar
      isValid(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  // Encontrará todos los formularios con la clase especificada en el DOM y
  // creará un array, a partir de estos, utilizando el método Array.from()
  const formList = Array.from(document.querySelectorAll(".form"));

  // Itera sobre el array obtenido
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      // Cancela el comportamiento por defecto de cada formulario
      evt.preventDefault();
    });

    // Llama a la función setEventListeners() para cada formulario
    // tomando un elemento del formulario como argumento
    setEventListeners(formElement);
  });
};

// Llama a la función
enableValidation();
