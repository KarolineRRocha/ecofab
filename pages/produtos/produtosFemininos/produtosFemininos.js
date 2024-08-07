var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle(){
    if(MenuItems.style.maxHeight == "0px"){
        MenuItems.style.maxHeight= "200px";
    }
    else{
        MenuItems.style.maxHeight= "0px";
    }
}

function selectSize(button) {
    var buttons = document.querySelectorAll('.sizes-options .btn');
    buttons.forEach(btn => btn.classList.remove('btn-primary'));
    button.classList.add('btn-primary');
}


function addToCart(button) {
    const cardBody = button.closest('.card-body');
    const sizeSelected = cardBody.querySelector('.btn-primary');
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