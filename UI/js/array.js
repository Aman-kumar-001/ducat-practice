//Q1 create a custom function in push method

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(`Original Array : ${arr}`);

function customPush(arr, ...element) {
  arr[arr.length] = element;
  return arr;
}

let newArr = customPush(arr, 10,20 ,30 ,40 ,50);
console.log(`New Array : ${newArr}`);


//Q2 create a custom function in pop method

let array1 = [100, 200, 300];
let new_array1 = [];

for (i = 0; i <= array1.length - 2; i++) {
  new_array1 = new_array1 + " " + array1[i];
}
console.log(new_array1);

//Q3 create a Unshift function:--

let array2 = [3000, 4000, 5000];
let unshift = [1000, 2000];

function shifting(arr , elements){
  let new_array2 = [];

  for (i = 0; i <= elements.length - 1; i++) {
  new_array2 = new_array2 + " " + unshift[i];
}
for (j = 0; j <= arr.length - 1; j++) {
  new_array2 = new_array2 + " " + array2[j];
}

console.log(`After unshifting :-- ${new_array2}`);
}

shifting(array2 , unshift);



//Q4 create a shift function :

let array3 = [1, 2, 3, 4, 5];

function shift(arr) {
  let output = arr[0];
  for (i = 0; i <= arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
  console.log(arr);
  return output;
}
const data = shift(array3);
console.log(data);

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
