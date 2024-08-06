const openModal = document.querySelector(".open-modal");
const modal = document.querySelector("#modal");
const btnCloseModal = document.querySelector(".circle");

openModal.addEventListener("click", () => {
  modal.classList.toggle("active");
});

btnCloseModal.addEventListener("click", () => {
  modal.classList.remove("active");
});