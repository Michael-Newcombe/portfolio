const video = document.getElementById('video');
const videoOverlay = document.querySelector('.project-video-overlay');
const videoBtns = document.querySelectorAll('.play-btn')
const closeBtn = document.getElementById('close-video-btn');

const playVideo =(videoSrc)=>{
  video.src = videoSrc;
  video.style.display = 'block';
  videoOverlay.style.display = 'block';

  closeBtn.addEventListener('click',()=>{
    video.pause();
    video.style.display = 'none'
    videoOverlay.style.display = 'none';
  })
}

videoBtns.forEach(item => {
  item.addEventListener('click', () => {
    switch(item.id){
      case 'video-describe-my-location':
        playVideo('./videos/describe-my-location.mp4');
      break;
      case 'video-mpc':
        playVideo('./videos/mpc.mp4');
      break;
      case 'video-hows-the-weather-sounding':
        playVideo('./videos/hows-the-weather-sounding.mp4');
      break;
      case 'video-audio-visualizer':
        playVideo('./videos/audio-visualizer.mp4');
      break;
      case 'video-image-filters':
        playVideo('./videos/image-filters.mp4');
      break;
      case 'video-audio-filters':
        playVideo('./videos/audio-filters.mp4'); 
      break;
      case 'video-subtractive-synthesis':
        playVideo('./videos/subtractive-synthesis.mp4'); 
      break;
      case 'video-giant-escape':
        playVideo('./videos/giant-escape.mp4'); 
      break;
      case 'video-openCV-game':
        playVideo('./videos/openCV-game.mp4'); 
      break;
      case 'video-battle-royale':
        playVideo('./videos/battle-royale.mp4'); 
      break;
      case 'video-keep-your-head-in-the-game':
        playVideo('./videos/keep-your-head-in-the-game.mp4');
      break;
      case 'video-snake-pathfinding':
        playVideo('./videos/snake-pathfinding.mp4');
      break;
      case 'video-robo-quest':
        playVideo('./videos/robo-quest.mp4'); 
      break;
      case 'video-music-and-machine-learning':
        playVideo('./videos/music-and-machine-learning.mp4'); 
    }
  });
});
