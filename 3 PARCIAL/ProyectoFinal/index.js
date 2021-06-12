const listaloggedout = document.querySelectorAll('.logged-out');
 const listaloggedin = document.querySelectorAll('.logged-in');
 const datosdelacuenta = document.querySelector('.datosdelacuenta');
 
 const configuraMenu = (user) => {
     if(user){
        

        db.collection('usuariosapple').doc(user.uid).get().then( doc =>{
            const html = `
                <p>Nombre: ${ doc.data().nombre }</p>
                <p>Correo: ${ user.email}</p>
                <p>Telefono: ${ doc.data().telefono }</p>
                <p>Direccion: ${ doc.data().direccion }</p>
            `;
            datosdelacuenta.innerHTML = html;
        });

        listaloggedin.forEach( item => item.style.display = 'block');
        listaloggedout.forEach( item => item.style.display = 'none');
     }
     else
     {
        datosdelacuenta.innerHTML = '';
        listaloggedin.forEach( item => item.style.display = 'none');
        listaloggedout.forEach( item => item.style.display = 'block');
     }
 }
 
 const listadeProductoApples = document.getElementById('listadeProductoApples');

 const obtieneProductoApples = (data) =>{


    if(data.length){
        
        let html = '';

        data.forEach(doc => {
            const ProductoApple = doc.data();
            console.log(ProductoApple);
            const columna = `
                <div class="col-12 col-md-6">
                    <img src="./${ProductoApple.imagen}" alt="${ProductoApple.nombre}">
                    <p>${ProductoApple.nombre}</p>
                    <p class="text-danger">$${ProductoApple.precio}.00 pesos</p>
                    <a href="https://www.paypal.me/mariogarcia27/${ProductoApple.precio}" target="_blank">
                        <button class="btn btn-primary">Pagar Ahora</button>
                    </a>
                </div>

                
            `;
    
            html += columna;
    
        });
    
        listadeProductoApples.innerHTML = html;

    }
    else{
        listadeProductoApples.innerHTML = '<div class="p-3 mb-2 bg-info text-dark"><h1>Ingrese para acceder a los productos Apple</h1></div>';
    }




 };