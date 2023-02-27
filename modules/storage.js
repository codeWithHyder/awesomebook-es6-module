// store data to local storage and populate list section and text boxes on window refresh
const bookList = document.querySelector('.booklist');
const booksList = JSON.parse(localStorage.getItem('storedbook')) || [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const renderBooks = () => {
  bookList.innerHTML = '';
  booksList.forEach((book, index) => {
    const bookElem = document.createElement('span');
    bookElem.className = 'bookdesc';
    bookElem.id = `book-${index}`;
    bookElem.innerText = `${book.title} by ${book.author}`;
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'removebtn';
    removeBtn.innerText = 'Remove';
    removeBtn.addEventListener('click', () => {
      booksList.splice(index, 1);
      localStorage.setItem('storedbook', JSON.stringify(booksList));
      renderBooks();
    });
    const removeElem = document.createElement('li');
    removeElem.className = 'bookremove';
    removeElem.appendChild(bookElem);
    removeElem.appendChild(removeBtn);
    bookList.appendChild(removeElem);
    bookList.insertAdjacentElement('afterend', document.createElement('br'));
  });
};

const addToStorage = () => {
  const bookTitle = document.getElementById('title');
  const bookDesc = document.getElementById('author');
  const btnAdd = document.getElementById('btnsubmit');

  btnAdd.addEventListener('click', () => {
    const mybook = new Book(bookTitle.value, bookDesc.value);
    booksList.push(mybook);
    localStorage.setItem('storedbook', JSON.stringify(booksList));
    renderBooks();
    bookTitle.value = '';
    bookDesc.value = '';
  });
  window.onload = () => {
    const loadTextBox = JSON.parse(localStorage.getItem('storedbook'));
    bookTitle.value = loadTextBox[loadTextBox.length - 1].title;
    bookDesc.value = loadTextBox[loadTextBox.length - 1].author;
  };
  renderBooks();
};

export default addToStorage;