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


// sorting method 


function sorting(arr) {
  return arr.slice().sort((a, b) => a - b);
}

function sortingd(arr) {
  return arr.slice().sort((a, b) => b - a);
}

let arr4565 = [1, 2, 7, 0, 66, 23];

let result7655 = sorting(arr);
let result1 = sortingd(arr);

console.log("Sorted array in ascending order:", result);
console.log("Sorted array in descending order:", result1);


//asscess the value in array of object

function getPersonByName(people, name) {
  for (let i = 0; i < people.length; i++) {
      if (people[i].name.toLowerCase() === name.toLowerCase()) {
          return people[i];
      }
  }
  return null; // Return null if no person with the given name is found
}

// Example array of objects
let people = [
  { name: "aman", age: 30 },
  { name: "harshit", age: 30 },
  { name: "aman1223", age: 30 }
];

// Get a person by name
let person = getPersonByName(people, "harshit");
console.log(person);






// find the Kth largest and the smallest element 


function smallestk(arr,k){
  //sort the array
  arr.sort((a,b) => a -b);
  
  return arr[k - 1];
}

let arr321= [1,2,3,4,5,6,7];
let  k=5
let result11 = smallestk(arr, k);
console.log(k +"smallest element in the array is " + result);

function klargest(arr,k){
  //sort the array
  arr.sort((a,b) => b - a);
  
  return arr[k - 1];
}

let output = klargest(arr , k);
console.log(k +"largest element in the array is " + output);


//find the number of occurance in array 

function findN(arr, N){
  let num =N;
  let freq = 0
  for(i=0 ;i<=arr.length -1 ; i++){
      if(arr[i]== num){
          freq += 1;
      }
  }
  return freq;
}
let arr09 =[1,1,1,5,5,5,5,2,2,2,2,]
let result55=findN(arr , 7);
console.log(result55);


// sort the array in  0 1 2

function sorting (arr){
  let Newarray= [];
  
  for(i=0 ;i<=arr.length-1;i++){
      if(arr[i]== 0){
          Newarray.push(arr[i]);
      }
  }
  for(i=0 ;i<=arr.length-1;i++){
      if(arr[i]== 1){
          Newarray.push(arr[i]);
      }
  }
  for(i=0 ;i<=arr.length-1;i++){
      if(arr[i]== 2){
          Newarray.push(arr[i]);
      }
  }
  return Newarray;
}
let arr89= [1,0,2,0,0,1,1,1]
let result89 = sorting(arr);
console.log(result);

//or 



function sorting(arr){
  const count = [0,0,0];
  for(let num of arr){
      count[num]++;
  }
  console.log(count);
  
  const sortedarray =[];
  for(let i=0;i<=count.length-1;i++){
      for(j=0 ;j<count[i];j++){
          sortedarray.push(i);
      }
  }
  return sortedarray;
}
let arr789= [1,1,1,2,1,0]
const result789 = sorting(arr);
console.log(result);



//find the sum to given index 


function findSub(arr,num1, num2){
  let first = num1;
  let last = num2;
  let sum = 0;
  
  for(i=0;i<=arr.length-1;i++){
      if(arr[i]< 0) return "negative array";
  }
  for(i=first;i<=last;i++){
      sum += arr[i];
  }
  return sum;
}

let arr000 = [1,2,3,4,5];
first = 1;
last = 3;
let result0000 = findSub(arr,1,3);
console.log("sum of index from "+ first + " to " + last + "is " +result);


//or 

function findSub(arr,num1, num2){
  let first = num1;
  let last = num2;
  let sum = 0;
  let containNegative = false
  
  for(i=0;i<=arr.length-1;i++){
      if(arr[i]< 0) {
          containNegative = true;
      }
  }
  if(!containNegative){
  for(i=first;i<=last;i++){
      sum += arr[i];
  }
  return sum;
}
if(containNegative){
    return -1;
}
}

let arr123 = [1,2,3];
first = 0;
last = 2;
let result7890 = findSub(arr,first,last);
if(result>=0){
    console.log("sum of index from "+ first + " to " + last + "is " +result);
}else{
    console.log("negative array found");
}


//string question   reverse a string


function resverSTR(str){
  let words = str.split(" ")//give space between () then it will do it on space 
  let reverseW= words.reverse();
   return reverseW.join(" ");
}

let str="aman";
let result321 = resverSTR(str);
console.log(result);


//Longest Common Prefix using Sorting



function Findprefix(arr){
  if(arr.length === " ")return "empty array";
  if(arr.length === 1) return arr[0];
  
  if(arr.length > 1){
  let first = arr[0];
  let last = arr[arr.length - 1];
  let commonPrefix = "";

  // Step 3: Find the common prefix between the first and last strings
  for (let i = 0; i < first.length; i++) {
      if (first[i] === last[i]) {
          commonPrefix += first[i];
      } else {
          break;
      }
  }

  return commonPrefix;
  }
}


const strings = [ "flower"];
let resul1234t = Findprefix(strings);
console.log(result)


///


