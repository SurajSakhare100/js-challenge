// Activity 1: Basic Pattern Matching

// Task 1: Match all occurrences of 'JavaScript'
const pattern = /JavaScript/g; // The 'g' flag is used for global search
const text = "JavaScript is a versatile language. JavaScript can be used for both front-end and back-end development.";
const matches = text.match(pattern);
console.log("JavaScript matches:", matches); // Output: ['JavaScript', 'JavaScript']

// Task 2: Match all digits in a text
const numPattern = /\d/g; // The 'g' flag is used for global search
const numText = "The year is 2024 and the time is 14:30.";
const numMatches = numText.match(numPattern);
console.log("Digits matches:", numMatches); // Output: ['2', '0', '2', '4', '1', '4', '3', '0']

// Activity 2: Text and Phone Number Analysis

// Task 3: Match all capital letters in a text
const capitalText = "Example Text with CAPITAL Letters and More Words";
const capitalRegex = /[A-Z]/g;
const capitalMatches = capitalText.match(capitalRegex);
console.log("Capital letters matches:", capitalMatches); // Output: ['E', 'T', 'C', 'A', 'P', 'I', 'T', 'A', 'L', 'L', 'M', 'W']

// Task 4: Match all multi-digit numbers in a text
const numPatternForMoreDigit = /\d+/g; // The 'g' flag is used for global search
const numMatchesMoreDigit = numText.match(numPatternForMoreDigit);
console.log("Multi-digit numbers matches:", numMatchesMoreDigit); // Output: ['2024', '14', '30']

// Activity 3: Phone Number and Email Extraction

// Task 5: Extract area code and central office code from phone numbers
const phoneText = `
Call me at (123) 456-7890
Or reach my office at 987-654-3210
Another number is (555) 222-3333
`;

// Split the input text by lines
const lines = phoneText.split('\n');
const phoneRegex = /\(?(\d{3})\)?[-\s]?(\d{3})/;
lines.forEach((line, index) => {
  const matches = line.match(phoneRegex);
  if (matches) {
    const areaCode = matches[1];
    const centralOfficeCode = matches[2];
    const lineNumber = index + 1; // Line numbers are 1-based
    console.log(`Line ${lineNumber}: Area Code: ${areaCode}, Central Office Code: ${centralOfficeCode}`);
  }
});

// Task 6: Extract username and domain from email
const email = "example.user@domain.com";
const emailRegexExtract = /^([^@]+)@([^@]+)$/;
const emailMatches = email.match(emailRegexExtract);

if (emailMatches) {
  const username = emailMatches[1];
  const domain = emailMatches[2];
  console.log(`Username: ${username}, Domain: ${domain}`);
} else {
  console.log("No match found");
}

// Activity 4: Word Position and Validation

// Task 7: Match a word at the start of a string
const textStart = "Hello world!";
const wordToMatchStart = "Hello";
const regexStart = new RegExp(`^${wordToMatchStart}\\b`, 'i'); // Case-insensitive match
const matchStart = textStart.match(regexStart);
console.log("Word at start match:", matchStart); // Output: ['Hello']

// Task 8: Match a word at the end of a string
const textEnd = "This is the end";
const wordToMatchEnd = "end";
const regexEnd = new RegExp(`\\b${wordToMatchEnd}$`, 'i'); // Case-insensitive match
const matchEnd = textEnd.match(regexEnd);
console.log("Word at end match:", matchEnd); // Output: ['end']

// Task 9: Validate a password
const password = "Passw0rd!";
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

if (passwordRegex.test(password)) {
  console.log("Valid password");
} else {
  console.log("Invalid password");
}

// Task 10: Validate an email address
const emailToValidate = "example.user@domain.com";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (emailRegex.test(emailToValidate)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}
