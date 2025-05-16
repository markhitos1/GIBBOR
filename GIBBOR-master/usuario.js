const nombreUsuario = document.getElementById('namePassword');
const contrasenaUsuario = document.getElementById('inputPassword');
const cargarUsuario = document.getElementById('cargar-usuario');
const imgFile = document.getElementById('imageFile');
const img = document.querySelector('.img2')
const subirBtn = document.getElementById('subirProducto');
const nombreInput = document.getElementById('nombreProducto');
const imgInput = document.getElementById('imageFileForm');
const contenedorFormulario = document.getElementById('contenedor-formulario');


cargarUsuario.addEventListener('click', () => {
   if(nombreUsuario.value === 'marcos' && contrasenaUsuario.value === '1234'){
  contenedorProductos.innerHTML = `
    <div class="contenedor-card" >
       <h5 class="card-title">Card title</h5>
       <div class="card-columns">
          <input type="file" id="imageFile" accept="image/*" />
           <a href="#" class="btn m-3 mb-2 btn-primary" id="comprar" >Carrito</a>
       </div>
     </div>
   `
   }
})

const nuevoProducto = (nombre, img) => {
  const card = document.createElement('div');
  card.className = 'contenedor-card';
  card.innerHTML = `
    <h5 class="card-title">${nombre}</h5>
    <div class="card-columns">
      <img src="${img}" class="img-card" alt="${nombre}">
      <a href="#" class="btn m-3 mb-2 btn-primary" id="comprar">Carrito</a>
    </div>
  `;
  contenedorProductos.appendChild(card);
};


subirBtn.addEventListener('click', () => {
  if (nombreInput.value && imgInput.files[0]) {
    const imgURL = URL.createObjectURL(imgInput.files[0]);
    nuevoProducto(nombreInput.value, imgURL);
    nombreInput.value = '';
    imgInput.value = '';
    // No borres el formulario, solo limpia los campos
  } else {
    alert("Debe ingresar un nombre y seleccionar una imagen.");
  }
});


