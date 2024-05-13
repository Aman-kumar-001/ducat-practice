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

function findMissing(arr, n) {
  const missingNumber = [];

  for (i = 1; i <= n; i++) {
    if (arr.indexOf(i) === -1) {
      missingNumber.push(i);
    }
  }
  return missingNumber;
}

const num = 5;
const arr = [1, 3];
let number = findMissing(arr, 5);
console.log(number);

//find the max and the min in array

function Minmax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return { min, max };
}
const arr2 = [1, 2, 3, 4, 5, 6];
const { min, max } = Minmax(arr2);

console.log("minimum is", min);
console.log("maximum is ", max);

//reverse an array
function arrayReverse(arr) {
  let reverse = arr.reverse();
  return reverse;
}
let arr11 = [1, 2, 3, 4, 5, 6];
let result = arrayReverse(arr11);
console.log(result);

let array = [1, 2, 3, 4, 5];
let reversedArray = [...array].reverse();

let reversedArray2 = array.slice().reverse();
console.log(reversedArray2);
console.log(array);

// to sort the array
let array223 = [3, 1, 4, 2, 5, 99, 61, 72];
array223.sort((a, b) => a - b);
console.log(array223);

//to find the peak then the neibhour element

function findPeak(arr, n) {
  // first or last element is peak element
  if (n == 1) return 0;
  if (arr[0] >= arr[1]) return 0;
  if (arr[n - 1] >= arr[n - 2]) return n - 1;

  let maxPeakIndex = -1;
  let maxPeakValue = Number.MIN_SAFE_INTEGER;

  // check for every other element
  for (let i = 1; i < n - 1; i++) {
      // check if the neighbors are smaller
      if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
          // Update maximum peak value and index
          if (arr[i] > maxPeakValue) {
              maxPeakValue = arr[i];
              maxPeakIndex = i;
          }
      }
  }

  return maxPeakValue;
}

var arr888 = [1, 3, 20, 4, 100, 0];
var n = arr.length;
document.write("Peak value is " + findPeak(arr888, n));


// another way 


function peak(arr , n){
  let indexofPeak = -1;
  let valueofpeak = 0;
  
  for(let i=0;i<n;i++){
      if(arr[i] > arr[i -1] && arr[i] > arr[i+1]){
          if(arr[i] > valueofpeak){
              valueofpeak = arr[i];
              indexofpeak = i;
          }
      }
  }
  return valueofpeak;
}

arr1= [1,2,3,4,5,67,8];
n=arr1.length;
console.log("value is " , peak(arr1 , n))
