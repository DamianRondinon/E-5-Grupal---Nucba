
const $openModal = document.querySelector('.btnComprar');
const $modal = document.querySelector('.modal');
const $closeModal = document.querySelector('.modal__cancel');

$openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    alert("Hola");
    $modal.classList.add('modal--show');
});

$closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    $modal.classList.remove('modal--show');
});