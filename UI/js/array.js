//Q1 create a custom function in push method

let array = [10, 20, 30];
let push = [40, 50, 60, 70, 80];
let new_array = [];

for (j = 0; j <= array.length - 1; j++) {
  new_array = new_array + " " + array[j];
}
for (i = 0; i <= push.length - 1; i++) {
  new_array = new_array + " " + push[i];
}

console.log(`Final Array we get is : ${new_array}`);

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
let new_array2 = [];

for (i = 0; i <= unshift.length - 1; i++) {
  new_array2 = new_array2 + " " + unshift[i];
}
for (j = 0; j <= array2.length - 1; j++) {
  new_array2 = new_array2 + " " + array2[j];
}

console.log(new_array2);

//Q4 create a shift function :

let array3 = [1, 2, 3, 4, 5];

function shift(arr) {
  for (i = 0; i <= arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
  console.log(arr);
}

shift(array3);
