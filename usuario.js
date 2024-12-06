const nombreUsuario = document.getElementById('namePassword');
const contrasenaUsuario = document.getElementById('inputPassword');
const cargarUsuario = document.getElementById('cargar-usuario');
const imgFile = document.getElementById('imageFile');
const img = document.querySelector('.img2')



cargarUsuario.addEventListener('click', () => {
   if(nombreUsuario.value === 'marcos' && contrasenaUsuario.value === '1234'){
    contendedorProductos.innerHTML = `
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

const nuevoPodructo = (nombre, img)=>{
    contendedorProductos.innerHTML += `
    <div class="contenedor-card" >
      <h5 class="card-title">${nombre}</h5>
      <div class="card-columns">
          <img src="${img}"class="img-card" alt="...">
          <a href="#" class="btn m-3 mb-2 btn-primary" id="comprar" >Carrito</a>
      </div>
    </div>
 
 `
}

imgFile.addEventListener('change', (e) => {

    if(e.target.files[0]){
        i = URL.createObjectURL(e.target.files[0])
    }
    nuevoPodructo('gorra', i)

   
   
})













