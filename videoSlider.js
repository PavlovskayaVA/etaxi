
/*SliderVideo*/
const galleryContainer = document.querySelector(".gallery-container");
const galleryControlsContainer = document.querySelector(".gallery-controls");

const galleryItems = document.querySelectorAll(".gallery-item");

const galleryControls = ["previous", "next"];

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselArray = [...items];
    this.carouselControls = controls;
  }

  updateGallery() {
    this.carouselArray.forEach((el) => {
      el.classList.remove("gallery-item-1");
      el.classList.remove("gallery-item-2");
      el.classList.remove("gallery-item-3");
      el.classList.remove("gallery-item-4");
      el.classList.remove("gallery-item-5");
    });

    this.carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i + 1}`);
    });
  }

  setCurrentState(direction) {
    if (direction.className == "gallery-controls-previous") {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  setControls() {
    this.carouselControls.forEach((control) => {
      galleryControlsContainer.appendChild(
        document.createElement("button")
      ).className = `gallery-controls-${control}`;
    });
  }

  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forEach((control) => {
      control.addEventListener("click", (e) => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

const exampleCarousel = new Carousel(
  galleryContainer,
  galleryItems,
  galleryControls
);

exampleCarousel.setControls();
exampleCarousel.useControls();

/*Воспроизведение видео по клику*/
let videoActive = document.querySelectorAll('.video-item')
let videoStop = document.querySelector('.gallery-controls')

videoActive.forEach ((activeVideo) => {
  activeVideo.addEventListener('click', playVideo)

  function playVideo(){
    activeVideo.removeEventListener('click',playVideo);
    activeVideo.addEventListener('click',pauseVideo);
    activeVideo.play();
}

  function pauseVideo(){
    activeVideo.removeEventListener('click',pauseVideo);
    activeVideo.addEventListener('click',playVideo);
    activeVideo.pause();
  }

  videoStop.addEventListener('click', stopVideo)

  function stopVideo(){
    activeVideo.pause();
  }

})