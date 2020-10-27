function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs>div>img");
  let mainImage = document.querySelector("#gallery-photo img");
  let galleryInfo = document.querySelector("#gallery-info");
  let imageTitle = galleryInfo.querySelector(".title");
  let imageInfo = galleryInfo.querySelector(".description");

  thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener("click", function () {
      // Preload large images
      let newImageSrc = thumbnail.dataset.largeVersion;
      let largeVersion = new Image();
      largeVersion.src = newImageSrc;

      // set clicked image as main image.
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", thumbnail.alt);

      // change which image is current
      let currentClass = "current";
      document.querySelector("." + currentClass).classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      // change image title and info
      imageTitle.innerHTML = thumbnail.dataset.title;
      imageInfo.innerHTML = thumbnail.dataset.description;
    });
  });
}
