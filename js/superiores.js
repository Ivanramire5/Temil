
function cargarProductos() {
    fetch('../json/superiores.json')
        .then(response => response.json())
        .then(data => {
            const contenedor = document.querySelector('.row'); 
            if (!contenedor) { 
                console.error('No se encontró el elemento con la clase.row');
                return; 
            }
            data.forEach(producto => {
                const tarjeta = `
                    <div class="col-md-4 mb-4 ">
                        <div class="card divTarjeta">
                            <img src="../imgPantalones/${producto.image}" class="card-img-top imagenTarjeta" alt="${producto.product}">
                            <div class="card-body">
                                <h5 class="card-title">${producto.product}</h5>
                                <p class="card-text"><strong>Material:</strong> ${producto.material}<br><strong>Color:</strong> ${producto.color}<br><strong>Precio:</strong> $${producto.precio}</p>
                                <a href="#" class="btn btn-primary botonTarjeta">Añadir al carrito</a>
                            </div>
                        </div>
                    </div>`;
                contenedor.innerHTML += tarjeta; 
            });
        })
    .catch(error => console.error('Error cargando productos:', error));
}

// Llamar a la función para cargar los productos
cargarProductos();