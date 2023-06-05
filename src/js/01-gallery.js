// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");

function createGalleryItem({ preview, original, description }) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = preview;
  image.alt = description;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

const galleryMarkup = galleryItems.map(createGalleryItem);
gallery.append(...galleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

lightbox.on("show.simplelightbox", () => {
  document.addEventListener("keydown", handleKeyPress);
});

lightbox.on("close.simplelightbox", () => {
  document.removeEventListener("keydown", handleKeyPress);
});

function handleKeyPress(event) {
  if (event.key === "Escape") {
    lightbox.close();
  } else if (event.key === "Enter") {
    lightbox.next();
  } else if (event.key === "ArrowRight") {
    lightbox.next();
  } else if (event.key === "ArrowLeft") {
    lightbox.prev();
  }
}




// const ulGalleryEl = document.querySelector('.gallery');
// const createMarkup = createGallery(galleryItems);
// ulGalleryEl.insertAdjacentHTML('beforeend', createMarkup);
// function createGallery(galleryItems) {
//     return galleryItems.map(({ preview, original, description }) => {
//         return `<li class="gallery__item">
//     <a class="gallery__link" href="${original}">
//         <img
//             class="gallery__image"
//             src="${preview}"
//             alt="${description}"
//      />
//     </a>
// </li>`
//     }).join('');
// };
// var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

// console.log(galleryItems);

