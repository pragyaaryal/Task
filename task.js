document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.querySelector(".gallery-container");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
  
    let currentIndex = 0;
    const maxIndex = galleryItems.length - 1;
    const itemWidth = galleryItems[0].offsetWidth + 20; // Including margin
  
    function updateGallery() {
      galleryItems.forEach((item, index) => {
        const distanceFromCenter = Math.abs(index - currentIndex);
        const blurAmount = distanceFromCenter === 0 ? 0 : 5;
        const opacity = distanceFromCenter === 0 ? 1 : 0.3;
        item.style.filter = `blur(${blurAmount}px)`;
        item.style.opacity = opacity;
      });
    }
  
    function moveToNext() {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      updateGallery();
      updateTransform();
    }
  
    function moveToPrev() {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      updateGallery();
      updateTransform();
    }
  
    function updateTransform() {
      const translateX = -currentIndex * itemWidth;
      galleryContainer.style.transform = `translateX(${translateX}px)`;
    }
  
    // Event listeners for arrow buttons
    prevButton.addEventListener("click", moveToPrev);
    nextButton.addEventListener("click", moveToNext);
  
    // Initial update of the gallery
    updateGallery();
    updateTransform();
  });
  