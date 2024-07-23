const books = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    price: 320,
    year: 1997,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 250,
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    price: 300,
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 200,
    year: 1925,
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    price: 350,
    year: 1851,
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    price: 450,
    year: 1869,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 270,
    year: 1813,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 280,
    year: 1951,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 310,
    year: 1937,
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    price: 360,
    year: 1866,
  },
];

// class Library
class Library {
  constructor(books) {
    this.books = books;
  }

  getBookTitle(index) {
    return this.books[index].title;
  }

  getBookAuthor(index) {
    return this.books[index].author;
  }

  returnBookByAuthorName(name) {
    return this.books.filter((book) => book.author === name);
  }

  updateYear(name, year) {
    let updatedBook;
    this.books.forEach((book) => {
      if (book.author === name) {
        book.year = year;
        updatedBook = book;
      }
    });
    return updatedBook;
  }
}

const library = new Library(books);

console.log("Title of book: ", library.getBookTitle(4));
console.log("Author of book: ", library.getBookAuthor(4));
console.log(library.updateYear("Fyodor Dostoevsky", 1986));

const bookref = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  price: 280,
  year: 1951,
};

const keys = Object.keys(bookref);
console.log(keys);

const values = Object.values(bookref);
console.log(values);
