
const Ropas = document.getElementById('Ropas');
const Perfumes = document.getElementById('Perfumes');
const Juguetes = document.getElementById('Juguetes');
const Accesorios = document.getElementById('Accesorios');
const Utiles = document.getElementById('Utiles');
const Otros = document.getElementById('Otros');
const contendedorProductos = document.querySelector('.contenedor-productos');
const comprar = document.getElementById('comprar');
const carrito = document.getElementById('btn-carrito');

let suparCompras = 0


comprar.addEventListener('click', () => {
    suparCompras++
    carrito.innerText = `carrito ${suparCompras}`
    localStorage.setItem('compras', suparCompras)

})





Ropas.addEventListener('click', () => {
    contendedorProductos.innerHTML = `
    <div class="card" style="width: 200px;">
    <img src="/img/gorras/gorra-10.jpeg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="card " style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>



    `
})












