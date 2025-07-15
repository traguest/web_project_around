document.addEventListener("DOMContentLoaded", () => {
  let contenido = document.querySelector(".content__element");
  //let lista=document.querySelectorAll(".content__target");

  let boton = document.querySelector(".modal__add");
  let texto = document.querySelector(".modal__text");
  let cerraModal = document.querySelector(".modal__close");
  let imagen = document.querySelector(".modal__image");
  let template = document.querySelector("#template").content;
  let pagina = document.querySelector(".page");
  let editor = document.querySelector(".description__button");
  let modal = document.querySelector(".modal");

  let nombre = document.querySelector(".description__text");
  let profesion = document.querySelector(".description__span");
  let imagenEDitar = document.querySelector(".description__edit");
  let nombreEntrada = document.querySelector(".add__text");
  let profesionEntrada = document.querySelector(".add__profesion");
  let add = document.querySelector(".add");
  let cerrarModififacion = document.querySelector(".add__close");
  let imagenC;
  let elemento;

  const initialCards = [
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

  for (let i = 0; i < 6; i++) {
    let tarjeta = template.querySelector(".content__target").cloneNode(true);

    let eliminar = document.createElement("img");
    eliminar.classList.add("content__image-delete");
    eliminar.setAttribute("src", "images/eliminar.png");
    eliminar.addEventListener("click", eliminacion);
    tarjeta.append(eliminar);
    tarjeta
      .querySelector(".content__target-image")
      .setAttribute("src", "" + initialCards[i].link);
    tarjeta
      .querySelector(".content__target-image")
      .addEventListener("click", expandir);
    tarjeta.querySelector(".content__text").textContent = initialCards[i].name;
    tarjeta
      .querySelector(".content__capa")
      .append(tarjeta.querySelector(".content__text"));
    tarjeta
      .querySelector(".content__capa")
      .append(tarjeta.querySelector(".content__corazon"));
    tarjeta
      .querySelector(".content__corazon")
      .addEventListener("click", cambio);
    contenido.append(tarjeta);
  }

  function crear(e) {
    e.preventDefault();

    let bloque = template.querySelector(".content__target").cloneNode(true);
    bloque
      .querySelector(".content__target-image")
      .setAttribute("src", "" + imagen.value);
    bloque
      .querySelector(".content__target-image")
      .addEventListener("click", expandir);
    bloque.querySelector(".content__text").textContent = texto.value;
    bloque
      .querySelector(".content__capa")
      .append(bloque.querySelector(".content__text"));
    bloque
      .querySelector(".content__capa")
      .append(bloque.querySelector(".content__corazon"));
    bloque.querySelector(".content__corazon").addEventListener("click", cambio);
    let eliminar = document.createElement("img");
    eliminar.classList.add("content__image-delete");
    eliminar.setAttribute("src", "images/eliminar.png");
    eliminar.addEventListener("click", eliminacion);
    bloque.append(eliminar);

    contenido.append(bloque);

    imagen.value = "";
    texto.value = "";
    modal.setAttribute("style", "display:none");
  }

  function eliminacion(event) {
    let padre = event.target;
    let elemento = padre.parentElement;

    elemento.remove(elemento);
  }

  function cambio(event) {
    let corazon = event.target;
    if (corazon.getAttribute("fill") === "black") {
      corazon.setAttribute("fill", "white");

      corazon.setAttribute("style", "border:1px solid red");
    } else {
      corazon.setAttribute("fill", "black");
      corazon.setAttribute("style", "border:1px solid red");
    }
  }

  function cerrar() {
    console.log("hola");
    imagenC.setAttribute("style", "display:none");
    elemento.setAttribute("style", "display:none");
  }

  function expandir(e) {
    let abuelo = e.target.parentElement;
    let imagenR = e.target;
    console.log("Natural:", imagenR.naturalWidth, imagenR.naturalHeight);
    let padre = abuelo.children;

    let hijos = padre[1];
    let nietos = hijos.children;

    let nombrex = nietos[0].textContent;

    console.log(nombrex);
    let src = e.target.src;

    elemento = document.createElement("div");
    elemento.classList.add("creacion__encima");

    let contenedor = document.createElement("div");
    contenedor.classList.add("creacion__content");
    elemento.append(contenedor);

    imagenC = document.createElement("img");
    imagenC.classList.add("creacion__image");
    imagenC.setAttribute("src", src);

    contenedor.append(imagenC);

    let parrafo = document.createElement("p");
    parrafo.classList.add("creacion__cerrando");
    parrafo.textContent = "X";
    parrafo.addEventListener("click", cerrar);
    contenedor.append(parrafo);

    let parrafo2 = document.createElement("p");
    parrafo2.classList.add("creacion__frase");
    parrafo2.textContent = "" + nombrex;
    contenedor.append(parrafo2);
    pagina.append(elemento);
    console.log(parrafo2.textContent);
  }

  function accion(e) {
    e.preventDefault();
    alert("Hola mundo");
  }

  function abrir() {
    modal.setAttribute("style", "display:block");
    console.log(modal);
  }

  function CerrarModal() {
    modal.setAttribute("style", "display:none");
  }

  function cerrarModalAdd() {
    add.setAttribute("style", "display:none");
  }

  function modificar() {
    add.setAttribute("style", "display:block");
    //let nombreR=nombre.textContent;
    //let profesionR=profesion.textContent;

    nombreEntrada.value = nombre.textContent;
    profesionEntrada.value = profesion.textContent;

    let guardarCambios = document.querySelector(".add__save");
    guardarCambios.addEventListener("click", guadarCambiosModificados);
  }

  function guadarCambiosModificados(e) {
    e.preventDefault();

    nombre.textContent = nombreEntrada.value;
    profesion.textContent = profesionEntrada.value;
    add.setAttribute("style", "display:none");
  }

  editor.addEventListener("click", abrir);
  imagenEDitar.addEventListener("click", modificar);
  boton.addEventListener("click", crear);
  cerraModal.addEventListener("click", CerrarModal);
  cerrarModififacion.addEventListener("click", cerrarModalAdd);
});
