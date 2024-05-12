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

const arr1 = [1, 2, 3, 6, 3, 6, 1];
const duplicateElements = FindDuplicate(arr1);
console.log("Duplicate elements in the array:", duplicateElements);

// find the missind number 

function findMissing(arr, n){
  const missingNumber = [];
  
  for(i=1;i<=n;i++){
      if (arr.indexOf(i) === -1) {
        missingNumber.push(i);
    }
   
  }
   return missingNumber;
}

const num=5;
const arr=[1,3];
let number = findMissing(arr,5);
console.log(number);

//find the max and the min in array

function Minmax(arr){
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return {min, max};
}
const arr2=[1,2,3,4,5,6];
const {min ,max} = Minmax(arr2);

console.log('minimum is', min)
console.log('maximum is ' ,max)

function arrayReverse(arr){
  let reverse =  arr.reverse();
  return reverse
}
let arr1 =[ 1,2,3,4,5,6]
let result = arrayReverse(arr1);
console.log(result);


let array = [1, 2, 3, 4, 5];
let reversedArray = [...array].reverse(); 

let reversedArray2 = array.slice().reverse(); 
console.log(reversedArray2); 
console.log(array); 


let array223 = [3, 1, 4, 2, 5,99,61,72];
array223.sort((a, b) => a - b);
console.log(array223); 
//