const carouselSlider = document.querySelector('.carousel-slider');
const carouselItems = document.querySelectorAll('.carousel-item-custom');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const totalItems = carouselItems.length;
let autoSlideInterval;

// Calculate how many items should be visible based on the container width
function getVisibleItemsCount() {
  const visibleItems = Math.min(totalItems, Math.floor(carouselSlider.clientWidth / carouselItems[0].clientWidth));
  return visibleItems;
}

// Update the carousel's position based on the current index
function updateCarousel() {
  const offset = -(currentIndex * carouselItems[0].clientWidth);
  carouselSlider.style.transform = 'translateX(' + offset + 'px)';
}

// Handle next button click
nextBtn.addEventListener('click', () => {
  if (currentIndex < totalItems - getVisibleItemsCount()) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first item if it reaches the end
  }
  updateCarousel();
});

// Handle previous button click
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - getVisibleItemsCount(); // Loop to the last visible item
  }
  updateCarousel();
});

// Auto-slide the carousel every 3 seconds
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    if (currentIndex < totalItems - getVisibleItemsCount()) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back to the first item
    }
    updateCarousel();
  }, 3000); // 3 seconds interval
}

// Stop auto-slide when hovering over the carousel
carouselSlider.addEventListener('mouseover', () => {
  clearInterval(autoSlideInterval);
});

// Restart auto-slide when mouse leaves the carousel
carouselSlider.addEventListener('mouseleave', () => {
  startAutoSlide();
});

// Resize event to recalculate the visible items when the window size changes
window.addEventListener('resize', () => {
  updateCarousel();
});

// Start auto-slide when the page loads
window.onload = function () {
  startAutoSlide();
};
