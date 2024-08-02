// Define a class
class Person {
    // Constructor method to initialize new objects
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to greet
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  
    // Static method that is called on the class itself, not instances
    static species() {
      return "Homo sapiens";
    }
    // Method to update age
  updateAge(newAge) {
    if (newAge >= 0) {
      this.age = newAge;
    } else {
      console.log('Age must be a positive number.');
    }
  }
  }
  
  // Create an instance of the class
  const person1 = new Person('Alice', 30);
  
  // Call the method on the instance
  person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
  
  // Call the static method on the class
  console.log(Person.species());  // Output: Homo sapiens
  person1.updateAge(31);

  // Define a subclass that extends the Person class
  class Student extends Person {
    constructor(name, age, studentId) {
      // Call the parent class's constructor
      super(name, age);
      this.studentId = studentId;
    }
  
    // Method specific to Student to return student ID
    getStudentId() {
      return this.studentId;
    }
  
    study() {
      console.log(`${this.name} is studying.`);
    }
  }
  
  // Create an instance of the Student class
  const student1 = new Student('Bob', 20, 'S12345');

  // Call the method to get student ID
  console.log(student1.getStudentId()); 
  // Call methods from both the parent and child class
  student1.study(); // Output: Bob is studying.
  