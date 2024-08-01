// Task 1: Basic Error Handling
try {
  console.log(a); // ReferenceError: a is not defined
} catch (error) {
  console.log("Task 1 Error:", error.message);
}

try {
  let a = 0;
  let b = 4;
  let c = b / a;
  throw new Error("We can't divide by zero"); // Manually throwing an error
} catch (error) {
  console.log("Task 1 Error:", error.message);
}

// Task 2: Error Handling with Finally Block
try {
  let a = 0;
  let b = 4;
  let c = b / a;
  throw new Error("We can't divide by zero"); // Manually throwing an error
} catch (error) {
  console.log("Task 2 Error:", error.message);
} finally {
  console.log("Task 2: Finally block executed");
}

// Task 3: Custom Error Class
class CustomError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.name = this.constructor.name;
    this.errorCode = errorCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

try {
  console.log(p); // ReferenceError: p is not defined
  throw new CustomError("p is not defined", 300); // Custom error
} catch (error) {
  console.log("Task 3 Error:", error.message);
}

try {
  let userInput = "";
  if (!userInput) {
    throw new CustomError("Input should not be empty", 404); // Custom error
  }
  console.log(userInput);
} catch (error) {
  console.log("Task 3 Error:", error.message);
}

// Task 4: Promise Error Handling and Fetch with Custom Error Class
const simplePromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 1300, 45);
  setTimeout(reject, 2000, 49);
});

simplePromise
  .then((result) => {
    console.log("Task 4: Promise Success");
    console.log(result);
  })
  .catch((err) => {
    console.log("Task 4: Promise Failed");
    console.log(err);
  });

const newpromise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Data fetching failed"), 1000);
});

async function p2() {
  try {
    const data = await newpromise2;
    console.log("Task 4: Promise Success:", data);
  } catch (error) {
    console.log("Task 4 Error:", error);
  }
}
p2();

// Custom Error Class for Fetch Errors
class FetchError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'FetchError';
    this.statusCode = statusCode;
  }
}

// Function to fetch data with enhanced error handling
async function fetchData(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      // HTTP error, throw a custom FetchError
      throw new FetchError(`HTTP error! Status: ${response.status}`, response.status);
    }
    
    const data = await response.json(); // Parse JSON response
    return data;
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(`Custom FetchError: ${error.message} (Status: ${error.statusCode})`);
    } else {
      console.error('Network or parsing error:', error.message);
    }
    throw error; // Rethrow error if needed
  }
}

// Example usage of fetchData
fetchData('https://example.com/data')
  .then(data => {
    console.log('Task 4: Fetched Data:', data);
  })
  .catch(error => {
    console.error('Task 4: Error fetching data:', error.message);
  });
