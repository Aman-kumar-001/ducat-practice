///scope or lexical enivironment

function display() {
  var name = "aman";
  // console.log(name);
}
display();

//IIFE
(function () {
  var message = "Hello, world!";
  console.log(message); // Outputs: Hello, world!
})();

//promise

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("hello");
    resolve("operation done");
  }, 2000);
});

myPromise
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// CLASSES

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayName() {
    console.log(`hello ${this.name} , your age is ${this.age} `);
  }
}

const person1 = new person(aman, 25);
person1.displayName();

//classes  with parent element

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayName() {
    console.log(`hello ${this.name} , your age is ${this.age} `);
  }
}

class student extends person {
  constructor(name, age, group) {
    super(name, age);
    this.group = group;
  }
  displayAll() {
    console.log(
      `hello ${this.name} , your age is ${this.age} from ${this.group} `
    );
  }
}

const person2 = new student("aman", 25, "b.tech");
person2.displayAll();

//find the duplicate in array

function FindDuplicate(arr) {
  const freq = {};
  const duplicate = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (freq[element]) {
      duplicate.push(element);
    } else {
      freq[element] = true;
    }
  }

  return duplicate;
}

const arr = [1, 2, 3, 6, 3, 6, 1];
const duplicateElements = FindDuplicate(arr);
console.log("Duplicate elements in the array:", duplicateElements);

// find the missind number 

