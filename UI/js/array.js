//Q1 create a custom function in push method

let arr = [1];
console.log(`Original Array : ${arr}`);

function customPush(arr, ...element) {
  arr[arr.length] = element;
  return arr;
}

let newArr = customPush(arr, 2,3,4,5,6);
console.log(`New Array : ${newArr}`, typeof(newArr));


//Q2 create a custom function in pop method


let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
function myPop(arr2) {
  arr2 = arr2.slice(0,  -1);
  return arr2;
}

let result = myPop(arr2);
console.log("here is the update",result);

//Q3 create a Unshift function:--


let arr4 = [20, 30];

function myUnshift2(arr, ...values) {
  console.log(values.length);
  console.log(arr.length);
  for (let i = arr.length + values.length - 1; i >= values.length; i--) {
    arr[i] = arr[i - values.length];
  }
  
  for (let j = 0; j < values.length; j++) {
    arr[j] = values[j];
  }

  return arr;
}

console.log("multiple", myUnshift2(arr4, 9,10,11));


//Q4 create a shift function :

let array3 = [1, 2, 3, 4, 5];

function myshift(arr){
  arr = arr.slice(1, arr.length+1);
  return arr;
}
const result2 = myshift(array3);
console.log("shift method:--",result2);







//Q5 create a splice method :--

function customSplice(arr, start, deleteCount, ...items) {
  // Step 1: Handle negative start value
  if (start < 0) {
    start = Math.max(arr.length + start, 0);
  }

  // Step 2: Handle deleteCount greater than length - start
  deleteCount = Math.min(Math.max(deleteCount, 0), arr.length - start);

  // Step 3: Remove deleted elements and store them in a new array
  const deleted = [];
  for (let i = 0; i < deleteCount; i++) {
    deleted.push(arr[start + i]);
  }

  // Step 4: Shift remaining elements
  const shiftCount = arr.length - start - deleteCount;
  for (let i = 0; i < shiftCount; i++) {
    arr[start + i] = arr[start + deleteCount + i];
  }

  // Step 5: Insert new items
  const itemsCount = items.length;
  const newLength = arr.length - deleteCount + itemsCount;
  arr.length = newLength; // Adjust array length
  for (let i = newLength - 1; i >= start + itemsCount; i--) {
    arr[i] = arr[i - itemsCount];
  }
  for (let i = 0; i < itemsCount; i++) {
    arr[start + i] = items[i];
  }

  // Step 6: Return the deleted elements
  return deleted;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const deletedElements = customSplice(originalArray, 2, 2, 7, 8, 9, 10);
console.log(deletedElements); // Output: [3, 4]
console.log(originalArray); // Output: [1, 2, 'a', 'b', 'c', 5]

//Q6 convert two dimensional array into one dimension

let array4 = [10, [11, 12], 13, 14, [15, 16]];
let new_array3 = [];

for (let i = 0; i < array4.length; i++) {
  if (Array.isArray(array4[i])) {
    for (let j = 0; j < array4[i].length; j++) {
      new_array3.push(array4[i][j]);
    }
  } else {
    new_array3.push(array4[i]);
  }
}

console.log(new_array3);
