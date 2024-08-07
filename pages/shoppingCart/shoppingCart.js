// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const cart = [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');

    // Atualiza a exibição do carrinho
    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.className = 'cart-item';
            li.textContent = `${item.name} (Tamanho: ${item.size}) - $${item.price} x ${item.quantity}`;
            cartItemsContainer.appendChild(li);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = total.toFixed(2);
    }

    // Adiciona um item ao carrinho
    function addToCart(name, price, size, quantity) {
        const existingItem = cart.find(item => item.name === name && item.size === size);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ name, price: parseFloat(price), size, quantity });
        }

        updateCartDisplay();
    }

    // Configura os botões "Adicionar ao Carrinho"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const productElement = button.parentElement;
            const size = productElement.querySelector('.size').value;
            const quantity = parseInt(productElement.querySelector('.quantity').value);
            addToCart(name, price, size, quantity);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let cartCount = 0;

    // Selecionar o botão "Add to Cart"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountElement = document.getElementById('cart-count');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Incrementar o contador do carrinho
            cartCount++;
            // Atualizar o número exibido no ícone do carrinho
            cartCountElement.textContent = cartCount;
        });
    });
});

// Modal function
const openModal = document.querySelector(".open-modal");
const modal = document.querySelector("#modal");
const btnCloseModal = document.querySelector(".circle");

openModal.addEventListener("click", () => {
    modal.classList.toggle("active");
});

btnCloseModal.addEventListener("click", () => {
    modal.classList.remove("active");
});