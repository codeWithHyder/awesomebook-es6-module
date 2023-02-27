import display from './modules/hide.js';
import displayonesection from './modules/showonesection.js';
import updateTime from './modules/time.js';
import addToStorage from './modules/storage.js';

display();
const menuItems = document.querySelectorAll('.menuitem');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    const sectionId = menuItem.querySelector('a').getAttribute('href').replace('#', '');
    displayonesection(sectionId);
  });
});
updateTime();
addToStorage();
