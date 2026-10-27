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


var nuevaImg = []
var nuevoNombre = []
var nuevoResultado = []

subirBtn.addEventListener('click', async (e) => {
  
   e.preventDefault();
   
   const nombre = nombreInput.value;
   const imagen = imgInput.files[0];
   nuevaImg.push(imagen);
   nuevoNombre.push(nombre);
    nuevoProducto(nombre, imagen);

  
  // Creamos el FormData
  const formData = new FormData();
  
  formData.append('nombre', nombre);
  formData.append('image', imagen);
  
  
  try {
    
    const response = await fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData
    });
    
    const resultado = await response.json();
    
    console.log('Respuesta del servidor:', resultado);
    console.log('URL:', resultado.url);
    console.log('ID:', resultado.id);
    
    // URL que devuelve Cloudinary
    const imgURL = resultado.url;
    nuevoResultado.push(imgURL);
    
        
        nombreInput.value = '';
        imgInput.value = '';

    } catch (error) {

        console.error('Error:', error);
        alert('No se pudo subir la imagen.');

    }
});



