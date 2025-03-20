function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      renderBooks(data);
      return data; 
    })
    .catch(error => console.error("Error fetching books:", error));
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list");
  if (!bookList) {
    console.error("Error: book-list element not found.");
    return;
  }

  bookList.innerHTML = books.map(book => `<li>${book.name}</li>`).join("");
}


export { fetchBooks, renderBooks };
