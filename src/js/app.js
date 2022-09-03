const modalImg = document.querySelector(`#modal-img`);

if (modalImg) {
  modalImg.addEventListener(`show.bs.modal`, function (e) {
    const link = event.relatedTarget;
    const rutaImg = link.getAttribute(`data-bs-img`);

    const img = document.createElement(`IMG`);
    img.src = `assets/img/${rutaImg}.jpg`;
    img.classList.add(`img-fluid`);
    img.alt = `imagen-galeria`;

    const modalContent = document.querySelector(`.modal-body`);
    modalContent.appendChild(img);

    // console.log(img);
  });

  modalImg.addEventListener(`hidden.bs.modal`, function (e) {
    const modalContent = document.querySelector(`.modal-body`);
    modalContent.textContent = ``;

    // console.log(`Ocultar modal`);
  });
}
