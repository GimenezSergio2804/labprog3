// Selección de elementos del DOM
const btnCart = document.querySelector(".container-cart-icon");
const containerCartProducts = document.querySelector(".container-cart-products");
const productList = document.querySelector('.products');
const rowProduct = document.querySelector('.row-product');
const totalPagar = document.querySelector('.total-pagar');
const contadorProductos = document.querySelector('#contador-productos');

// Lista de todos los productos en el carrito
let allProducts = [];

// Mostrar/ocultar el carrito al hacer clic en el ícono del carrito
btnCart.addEventListener("click", () => {
    containerCartProducts.classList.toggle("hidden-cart");
});

// Evento para añadir productos al carrito
productList.addEventListener('click', e => {
    if(e.target.classList.contains('compras-boton')){
        const product = e.target.closest('.card');
        const title = product.querySelector('.card__name').textContent;
        const price = product.querySelector('.sale__price').textContent;

        const productInfo = {
            quantity: 1,
            title: title,
            price: price
        };

        addProductToCart(productInfo);
    }
});

// Función para añadir un producto al carrito
function addProductToCart(product) {
    const exists = allProducts.some(prod => prod.title === product.title);

    if (exists) {
        const products = allProducts.map(prod => {
            if (prod.title === product.title) {
                prod.quantity++;
                return prod;
            } else {
                return prod;
            }
        });
        allProducts = [...products];
    } else {
        allProducts = [...allProducts, product];
    }

    updateCart();
}

// Función para actualizar el carrito
function updateCart() {
    // Limpiar HTML
    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
        `;

        rowProduct.append(containerProduct);

        total += product.quantity * parseInt(product.price.replace('$', ''));
        totalOfProducts += product.quantity;
    });

    totalPagar.textContent = `$${total}`;
    contadorProductos.textContent = totalOfProducts;
}

// funcion para borrar los elementos 


// Selección del icono de cerrar
const iconClose = document.querySelector('.icon-close');

// clic en el icono de cerrar
iconClose.addEventListener('click', () => {
    // Eliminar el producto del carrito
    allProducts = [];
    updateCart(); // Actualizar el carrito después de eliminar
});

// Función para actualizar el carrito
function updateCart() {
    // Resto del código para actualizar el carrito como lo tenías antes
    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
        `;

        rowProduct.append(containerProduct);

        total += product.quantity * parseInt(product.price.replace('$', ''));
        totalOfProducts += product.quantity;
    });

    totalPagar.textContent = `$${total}`;
    contadorProductos.textContent = totalOfProducts;
}




