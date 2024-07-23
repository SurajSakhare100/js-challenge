const name = "suraj";
const age = 20;
const word = "jio";

const string = `
hi there i am ${name}
and let's ${word} ${word} ${word} ${word} dhandahna dhan
`;

const arr = [1, 2, 3, 4];

const [first, second, third] = arr;
console.log(first); 
console.log(second); 
console.log(third);

const [, , , fourthElement] = arr;
console.log(fourthElement);

const [firstElement, ...rest] = arr;
console.log(firstElement); 
console.log(rest);

let bookref = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

const { title: bookTitle, author: bookAuthor } = bookref;
console.log(bookTitle);
console.log(bookAuthor);

const { genre = "Fiction" } = bookref;
console.log(genre);

function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3)); 
console.log(sum(4, 5));

const { title, author, ...details } = bookref;
console.log(title);   
console.log(author);  
console.log(details);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined);

const copy = [...arr1];
console.log(copy);

const bookDetails = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald"
};

const additionalDetails = {
  year: 1925,
  genre: "Fiction"
};

const completeBook = { ...bookDetails, ...additionalDetails };
console.log(completeBook);

const bookCopy = { ...bookDetails };
console.log(bookCopy);

const numbers = [1, 2, 3];

function add(a, b, c) {
  return a + b + c;
}

console.log(add(...numbers));

function greet(greeting, ...names) {
  return `${greeting}, ${names.join(" and ")}!`;
}

console.log(greet("Hello", "Alice", "Bob", "Charlie"));

const arr4 = [1, 2, 3, 4, 5];
const [firstel, ...restele] = arr4;

console.log(firstel); 
console.log(restele);

const newArr = [firstel, ...rest];
console.log(newArr);

function add(a, b = 1) {
  return a + b;
}

console.log(add(3, 4));
console.log(add(3));

const createBook = (title, author, year) => ({
  title,
  author,
  year,
  getSummary() {
    return `${this.title} by ${this.author}, published in ${this.year}.`;
  }
});

const myBook = createBook("Pride and Prejudice", "Jane Austen", 1813);
console.log(myBook.getSummary());

const { title: myBookTitle, author: myBookAuthor, ...restDetails } = myBook;
console.log(myBookTitle);  
console.log(myBookAuthor); 
console.log(restDetails);

const properties = {
  title: "1984",
  author: "George Orwell",
  year: 1949
};

const book = {
  [properties.title]: properties.author,
  [`publishedYear_${properties.year}`]: properties.year
};

console.log(book["1984"]);           
console.log(book["publishedYear_1949"]); 

function createObject(key, value) {
  return {
    [key]: value,
    [`${key}_description`]: `This is a description for ${key}`
  };
}

const result = createObject("item", "value");
console.log(result.item);               
console.log(result.item_description);   
