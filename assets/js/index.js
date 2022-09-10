let pizzas = [
  {
    nombre: "La MR. Pit",
    descripcion: "Sólo para expertos",
    precio: "$350",
    imagen: "./assets/img/Photo Menu.png",
  },
  {
    nombre: "¡Q'Jamone!",
    descripcion: "c/jamón crudo",
    precio: "$350",
    imagen: "./assets/img/Photo Menu-1.png",
  },
  {
    nombre: "La Charly García",
    descripcion: "¡BASTA!",
    precio: "$380",
    imagen: "./assets/img/Photo Menu-2.png",
  },
  {
    nombre: "La Maradona",
    descripcion: "¡Eterna!",
    precio: "$450",
    imagen: "./assets/img/Photo Menu-3.png",
  },
  {
    nombre: "Picantovich",
    descripcion: "Pica 2 veces",
    precio: "$350",
    imagen: "./assets/img/Photo Menu-4.png",
  },
  {
    nombre: "La Hasbulla",
    descripcion: "En honor al 1",
    precio: "$990",
    imagen: "./assets/img/Photo Menu-5.png",
  },
  {
    nombre: "Leo Messi",
    descripcion: "¡De pie señores!",
    precio: "$350",
    imagen: "./assets/img/Photo Menu-6.png",
  },
  {
    nombre: "Nick Gi",
    descripcion: "La que desaparece",
    precio: "Gratis",
    imagen: "./assets/img/Photo Menu-7.png",
  },
];

localStorage.setItem("pizzas", JSON.stringify(pizzas)); // lo envío al local storage

const container = document.querySelector(".products-cards");
// al cargar la página, quiero que se renderice el HTML de todas las pizzas
window.addEventListener("load", () => pintarHTML());
function pintarHTML() {
  container.innerHTML = pizzas
    .map((pizza) => {
      return `
      <div class="product-card">
        <img src="${pizza.imagen}" alt="">
        <div class="product-info">
          <div class="product-top">
            <h1>${pizza.nombre}</h1>
          </div>
          <div class="product-mid">
            <p>${pizza.descripcion}</p>
          </div>
          <div class="product-after">
            <h2>${pizza.precio}</h2>
            <a href="#agregar">Agregar</a>
          </div>
        </div>
      </div>
			`;
    })
    .join("");
}
