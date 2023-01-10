import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// Change code below this line

// console.log(galleryItems);
{
  /* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>; */
}

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryItem(galleryItems);
galleryContainer.innerHTML = imagesMarkup;

function createGalleryItem(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> `;
    })
    .join('');
}
const gallery = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.3,
  showCounter: false,
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
