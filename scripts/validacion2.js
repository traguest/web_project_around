const showInputError = (formElement, inputElement, errorMessage) => {
  // Encuentra el elemento del mensaje de error dentro de la propia función

  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // El resto permanece intacto
  inputElement.classList.add("add__input__type_error");

  //  inputElement.classList.add(`${inputElement.id}`);

  errorElement.textContent = errorMessage;

  errorElement.classList.add("add__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  // Encuentra el elemento del mensaje de error
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // El resto permanece intacto
  inputElement.classList.remove("add__input__type_error");
  errorElement.classList.remove("add__input-error_active");
  errorElement.textContent = "";
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // El parámetro de showInputError() es ahora un formulario
    // que contiene un campo a comprobar
    showInputError(
      formElement,
      inputElement,

      inputElement.validationMessage
    );
  } else {
    // Lo mismo para hideInputError(), su parámetro es ahora un formulario
    // que contiene un campo a comprobar
    hideInputError(formElement, inputElement);
  }
};

//////////////////////////////////////////////////////////

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, obj) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("add_inactive");
  } else {
    buttonElement.classList.remove("add_inactive");
  }
};

const setEventListeners = (formElement, obj) => {
  //  console.log("Hola desde setEventlisteners");
  // Encuentra todos los campos dentro del formulario y
  // crea un array a partir de estos, utilizando el método Array.from()
  const inputList = Array.from(formElement.querySelectorAll(obj.InputEntrada));
  const buttonElement = formElement.querySelector(obj.boton);

  toggleButtonState(inputList, buttonElement);

  //console.log(inputList);
  // Itera sobre el array obtenido
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    // agrega el controlador de eventos de entrada a cada campo
    inputElement.addEventListener("input", () => {
      // Llama a la función isValid() dentro del callback
      // y pásale el formulario y el elemento a comprobar
      toggleButtonState(inputList, buttonElement, obj);
      isValid(formElement, inputElement, obj);
    });
  });
};

export const enableValidation2 = (obj) => {
  //console.log("hola desde el exterior");
  // Encontrará todos los formularios con la clase especificada en el DOM y
  // creará un array, a partir de estos, utilizando el método Array.from()
  const formList = Array.from(document.querySelectorAll(obj.formElement));

  // Itera sobre el array obtenido
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      // Cancela el comportamiento por defecto de cada formulario
      evt.preventDefault();
    });

    // Llama a la función setEventListeners() para cada formulario
    // tomando un elemento del formulario como argumento
    setEventListeners(formElement, obj);
    //console.log("Hola desde validate");
  });
};
