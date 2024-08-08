let cart = [null];
let total = 0;

function selectSize(button) {
    const buttons = document.querySelectorAll('.sizes-options .btn');
    buttons.forEach(btn => btn.classList.remove('btn-primary'));
    button.classList.add('btn-primary');
}

function addToCart(button) {
    const cardBody = button.closest('.card-body');
    // const cardName =  cardBody.querySelector('.card-title')
    const [cardName , cardPrice] =  button.value.split('/')
    const sizeSelected = cardBody.querySelector('.btn-primary');
    const image = document.querySelector('.card img');
    const quantityInput = cardBody.querySelector('.quantity');
    const confirmationMessage = cardBody.querySelector('.confirmation-message');


    if (!sizeSelected) {
        alert('Por favor, selecione um tamanho antes de adicionar ao carrinho.');
        return;
    }

    if (parseInt(quantityInput.value) > 0) {
        confirmationMessage.style.display = 'block';
        setTimeout(() => {
            confirmationMessage.style.display = 'none';
        }, 2000);
        console.log(cardName, parseFloat(cardPrice), sizeSelected.value, parseInt(quantityInput.value), image.src)
        sendToModal(cardName, parseFloat(cardPrice), sizeSelected.value, parseInt(quantityInput.value), image.src);
    } else {
        alert('Por favor, selecione a quantidade antes de adicionar ao carrinho.');
    }

}

function changeQuantity(button, amount) {
    const quantityInput = button.parentElement.querySelector('.quantity');
    let currentQuantity = parseInt(quantityInput.value);
    currentQuantity += amount;
    if (currentQuantity < 0) {
        currentQuantity = 0;
    }
    quantityInput.value = currentQuantity;
}

function sendToModal(name, price, size, quantity, image) {
    // Adiciona um item ao carrinho
    addToCart2(name, price, size, quantity, image)

    // Configura os botões "Adicionar ao Carrinho"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const productElement = button.parentElement;
            const size = productElement.querySelector('.size').value;
            const quantity = parseInt(productElement.querySelector('.quantity').value);
            addToCart2(name, price, size, quantity);
        });
    });
}
function addToCart2(name, price, size, quantity, image) {
    let existingItem
    if(cart[0] != null){
        existingItem = cart.find(item => item.name === name && item.size === size);
    }
    if (existingItem) {
        let index = cart.findIndex(item => item.name === name);
        cart[index].quantity += quantity
    } else {
        if (cart[0] === null) {
            cart[0] = { name, price: parseFloat(price), size, quantity, image };
        }
        else {
            cart.push({ name, price: parseFloat(price), size, quantity, image });
        }
    }

    updateCartDisplay();
}
// Atualiza a exibição do carrinho
function updateCartDisplay() {
    let cartItemsContainer = document.querySelector('.cart-items');
    let cartTotal = document.querySelector('.cart-total');
    cartItemsContainer.innerHTML = '';

    cart.slice(1, cart.length).forEach(item => {
        const li = document.createElement('li');
        const template = document.querySelector("#cart-items-product");
        li.className = 'cart-item';
        const clone = template.content.cloneNode(true);
        let span = clone.querySelectorAll("span");
        span[0].textContent = item.name;
        span[1].textContent = item.size;
        span[2].textContent = item.price;
        span[4].textContent = item.quantity;
        li.appendChild(clone)
        cartItemsContainer.appendChild(li);
    });
    total = cart.slice(1, cart.length).reduce((accumulator, current) => accumulator + (current.price * current.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}
// scripts.js
document.addEventListener('DOMContentLoaded', sendToModal)

