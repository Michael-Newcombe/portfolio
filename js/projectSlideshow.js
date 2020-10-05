const slideshowContainer = document.querySelector('.slideshow');
const getImageHeight = document.querySelector('.slideshow-image');
const slideshow = document.querySelector('.slideshow-list');
const slides = Array.from(slideshow.children);
const slideshowNav = document.querySelector('.slideshow-thumbnails');
const dots = Array.from(slideshowNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;


setInterval(()=>{ 
  const setSlideHeight = getImageHeight.getBoundingClientRect().height;
  slideshowContainer.style.height = setSlideHeight + 'px';
}, 0);

const setSlidePosition = (slide,index) =>{
  slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (slideshow, currentSlide, targetSlide) =>{
  slideshow.style.transform = 'translateX(-' +  targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
  slideshow.addEventListener('transitionend', () => {
    console.log('transitionend')
  }, {once: true});
}

//dots
slideshowNav.addEventListener('click', e=>{
  const targetDot = e.target.closest('img');

  if(!targetDot) return;

  const currentSlide = slideshow.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(slideshow,currentSlide, targetSlide);
  
})


