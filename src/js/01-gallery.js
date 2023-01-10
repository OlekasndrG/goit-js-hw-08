import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// console.log(galleryItems);

{
  /* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>; */
}

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryItem(galleryItems);
galleryContainer.innerHTML = imagesMarkup;
galleryContainer.addEventListener('click', onImageClick);
function createGalleryItem(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `;
    })
    .join('');
}

function onImageClick(event) {
  event.preventDefault();
  const smallImage = event.target;
  const issmallImgeEl = smallImage.nodeName === 'IMG';
  //   const issmallImgeEl1 = smallImage.classList.contains('gallery__image');
  if (!issmallImgeEl) {
    return;
  }
  const bigImage = smallImage.dataset.source;

  const instance = basicLightbox.create(`
      <img src="${bigImage}" width="800" height="600">
  `);

  instance.show();

  galleryContainer.addEventListener('keydown', onEscClick);
  function onEscClick(event) {
    if (event.code === 'Escape') {
      instance.close();
      galleryContainer.removeEventListener('keydown', onEscClick);
    }
  }
}

// import * as basicLightbox from 'basiclightbox';
// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();
