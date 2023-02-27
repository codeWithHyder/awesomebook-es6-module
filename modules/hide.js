// Refernce all sections of markup file
const addBook = document.getElementById('addbook');
const removeBook = document.getElementById('removebook');
const contactInfo = document.getElementById('contactinfo');

// Hide all sections of mark up file except add book section

const display = () => {
  addBook.style.display = 'block';
  removeBook.style.display = 'none';
  contactInfo.style.display = 'none';
  // console.log('trial text');
};
export default display;
