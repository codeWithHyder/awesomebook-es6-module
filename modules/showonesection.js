// hide all section except one who triggers event
const displayonesection = (sectionId) => {
  const addBook = document.getElementById('addbook');
  const removeBook = document.getElementById('removebook');
  const contactInfo = document.getElementById('contactinfo');

  // Hide all sections
  addBook.style.display = 'none';
  removeBook.style.display = 'none';
  contactInfo.style.display = 'none';

  // Show only the selected section
  if (sectionId === 'addbook') {
    addBook.style.display = 'block';
  } else if (sectionId === 'removebook') {
    removeBook.style.display = 'block';
  } else if (sectionId === 'contactinfo') {
    contactInfo.style.display = 'block';
  }
};

export default displayonesection;