const slideshowContainer = document.querySelector('.slideshow');
const getImageHeight = document.querySelector('.slideshow-image');
const slideshow = document.querySelector('.slideshow-list');
const slides = Array.from(slideshow.children);
const slideshowNav = document.querySelector('.slideshow-nav');
const dots = Array.from(slideshowNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
const currentSlide = slideshow.querySelector('.current-slide');
let slideIndex = 0;
startAudioSlide = false;

setInterval(()=>{ 
  const setSlideHeight = getImageHeight.getBoundingClientRect().height;
  slideshowContainer.style.height = setSlideHeight + 'px';
}, 0);

const setSlidePosition = (slide,index) =>{
  slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const updateDots = (currentDot, targetDot) =>{
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}

const moveToSlide = (slideshow, currentSlide, targetSlide) =>{
  slideshow.style.transform = 'translateX(-' +  targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

const autoSlide = () =>{
  slideIndex++;
  const currentDot = slideshowNav.querySelector('.current-slide');
  if(slideIndex == slides.length){
    slideIndex=0;
    const targetSlide = slides[0];
    moveToSlide(slideshow,currentSlide, targetSlide);
    updateDots(currentDot,dots[slideIndex]);
  }
  else{
    const targetSlide = slides[slideIndex];
    moveToSlide(slideshow,currentSlide, targetSlide);
    updateDots(currentDot,dots[slideIndex]);
  }
}

let timer = null; 

setTimeout(() => { 
  timer = setInterval(autoSlide,3000); 
},2000);

//dots
slideshowNav.addEventListener('click', e=>{
  const targetDot = e.target.closest('button');
  if(!targetDot) return;
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];
  const currentDot = slideshowNav.querySelector('.current-slide');
  moveToSlide(slideshow,currentSlide, targetSlide);
  updateDots(currentDot,targetDot);
  slideIndex = targetIndex;
  clearInterval(timer);
  timer = setInterval(autoSlide,3000);
});




