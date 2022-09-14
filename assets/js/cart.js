// Contenedor de productos
const productsAll = document.querySelector(".products-cards");
// Contenedor de productos del carrito
const productsCart = document.querySelector(".cart-container");
// El total en precio del carrito
const total= document.querySelector(".total");
// Bonton de agregar
const buyBtn = document.querySelector(".btn-add");
// Boton para el carrito
const cartBtn = document.querySelector(".cart-label");
// Carrito
const cartMenu = document.querySelector(".cart");
// Overlay
const overlay = document.querySelector(".overlay");

// Seteamos el carrito
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Función para guardar el carrito en el localStorage
const saveLocalStorage = cartList => {
    localStorage.setItem("cart", JSON.stringify(cartList));
};

// Lógica del carrito
// Renderizado del producto del carrito
const renderCartProduct = (cartProduct) => {
    const {id, name, price, img, quantity} =cartProduct;
    return `
    <div class="cart-item">
    <img src="${img}"/>
    <div class="item-info">
    <h3 class="item-title">${name}</h3>
    <span class="item-price>${price}</span>
    </div>
    <div class="item-handler">
    <span class="quantity-handler down" data-id=${id}>-</span>
    <span class="item-quantity">${quantity}</span>
    <span class="quantity-handler up" data-id=${id}>+</span>
    </div>
    </div>
    `;
};

// lógica para renderizar el carro
const renderCart = (cartList) => {
    if(!cartList.length) {
    productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito</p>`;
    return;
}
productsCart.innerHTML = cartList.map(renderCartProduct).join
('');
};

const addProduct = (e) => {
    if(!e.target.cartList.contains("#agregar")) return;
    const product = {
        id: e.target.dataset.id,
        name: e.target.dataset.nombre,
        price: e.target.dataset.precio,
        img: e.target.dataset.iamgen,
    };

    // Variable para checkear si el producto existe en el carrito
    const existingCartItem = cart.find((item) => item.id ==
    product.id);

    if(existingCartItem){
        cart = cart.map(item => {
            return item.id == product.id
            ? { ...item, quantity: Number(item.quantity) + 1}
            : item;
        });
     } else {
            cart = [... cart, {...product, quantity: 1 }];
        }
        saveLocalStorage(cart);
        renderCart(cart);
        //showTotal(cart)
        // disableBuyBtn();
};

const toggleCart = () => {
    cartMenu.classList.toggle('open-cart');
}

// Función para tener todos los eventos
const init = () => {
    productsAll.addEventListener('click', addProduct);
    cartBtn.addEventListener('click', toggleCart);
};

init();



