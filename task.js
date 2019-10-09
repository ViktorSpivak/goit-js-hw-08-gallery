"use strict";
import pictures from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
const modalPicture = document.querySelector(".lightbox___image");
const modalWindow = document.querySelector(".lightbox");

function createGallery(parentElement, pictureBox) {
  const domElement = pictureBox.reduce(
    (domElement, element) =>
      (domElement += `<li class="gallery__item">
      <a
  class="gallery__link"
  href='#'
>
  <img
    class="gallery__image"
    src=${element.preview}
    data-source=${element.original}
    alt=${element.description}
  />
  <span class="gallery__icon">
    <i class="material-icons">zoom_out_map</i>
  </span>
</a>
</li>
`),
    ""
  );
  parentElement.insertAdjacentHTML("beforeend", domElement);
}
function bigPicture(elem) {
  modalWindow.classList.replace("lightbox", "is-open");
  modalPicture.setAttribute("src", `${elem.target.dataset.source}`);
  modalPicture.setAttribute("alt", `${elem.target.alt}`);
}
const closeModWindow = elem => {
  elem.target.closest(".is-open").classList.replace("is-open", "lightbox");
  modalPicture.setAttribute("src", "");
  modalPicture.setAttribute("alt", "");
};

createGallery(gallery, pictures);
gallery.addEventListener("click", bigPicture);
modalWindow.addEventListener("click", closeModWindow);
