const tabNav = document.querySelectorAll('.tab-nav-btn');
const tabContent = document.querySelectorAll('.projects-content');

tabNav.forEach(item=>{
  item.addEventListener('click',()=>{
    switch(item.id){
      case 'web-apps-link':
        changeTab('web-apps-link','web-app-projects');
      break;
      case 'desktop-apps-link':
        changeTab('desktop-apps-link','desktop-app-projects');
      break;
      case 'games-link':
        changeTab('games-link','games-projects');
      break;
      case 'other-link':
        changeTab('other-link','other-projects');
    }
  })
})

const changeTab=(tabLink,tab)=>{
  tabNav.forEach(item=>{
    item.classList.remove('current-tab');
  });
  tabContent.forEach(item=>{
    item.classList.add('inactive');
  });
  const targetTabLink = document.getElementById(tabLink);
  targetTabLink.classList.add('current-tab');
  const targetTab = document.getElementById(tab);
  targetTab.classList.remove('inactive');
}