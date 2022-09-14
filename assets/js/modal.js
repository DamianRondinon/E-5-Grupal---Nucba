
const $openModal = document.querySelector('.btnComprar');
const $modal = document.querySelector('.modal');
const $closeModal = document.querySelector('.modal__cancel');

$openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    $modal.classList.add('modal--show');
});

$closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    $modal.classList.remove('modal--show');
});

document.write('<script src="./assets/js/index.js"></script>');
function agregarProductoAlCarrito(e) {
    // Anyadimos el Nodo a nuestro carrito
    e.preventDefault();
    alert("Hola");  
}