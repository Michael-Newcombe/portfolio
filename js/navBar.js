const navBarButton = document.querySelector('.nav-icon');
const navBarLinks = document.querySelector('.nav-links');
const navBarButtonPos = navBarButton.getBoundingClientRect();
navBarLinks.style.top = navBarButtonPos.y + navBarButtonPos.height + "px";

navBarButton.addEventListener('click',() =>{
  
  if(!navBarLinks.classList.contains('active')){

    navBarLinks.classList.add('active');
    navBarLinks.style.height = 'auto';
    const maxHeight = navBarLinks.clientHeight;
    navBarLinks.style.height = '0px';
    setTimeout(() => {
        navBarLinks.style.height = maxHeight + 'px';
      }, 0) 
  }
  else{

    navBarLinks.style.height = '0px';
    navBarLinks.addEventListener('transitionend', () => {
      navBarLinks.classList.remove('active');
    }, {once: true});
  }

});
