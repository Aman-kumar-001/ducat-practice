//objects


let object ={
    name :{
     firstName : "Aman",
     lastNAme : "sharma"
    } ,
    age : "23",
    getfullName : function(){
        console.log("Getfullname is called");
        console.log(this);
    }
}
console.log(object , typeof object);
console.log(object.name);

console.log(object["name"]);
console.log(object.getfullName());
console.log(object["getfullName"]());
console.log(Object.is(24 , 24));
console.log(object.name?.firstName);


//new object


const obj = new Object({
    name :{
        firstName : "arjun",
        lastNAme : "sharma"
       } 
})

const obj2 = new Object();

// console.log(obj);
// console.log(obj2);

for(const key in object){
    console.log(key, object[key]);
    // console.log(key, object[i]);
}


//array 


let arr = [1,2,3,4,5,6,7,8];

for(let index in arr){
    console.log(index , arr[index]);
}

// string
 
let str = "sunshine";

for(let index in str){
    console.log(index ,  str[index]);
}


// math
 

var maxResult = Math.max(300, 523, 111, 99);
console.log(maxResult);


var maxResult2 = Math.min(999 ,899,799,1209);
console.log(maxResult2);

var absoluteValue = Math.abs(-5);
console.log(absoluteValue);

var randomNUm = Math.floor(Math.random()* 100000);
console.log(randomNUm);

var  num ="123456";
var num2 = parseInt(num);
console.log(num2 , typeof num2);

var randomNUm1 = Math.floor(Math.random()* 900000) + 100000;
console.log(randomNUm1);
console.log("question started")



//Q1

// let a=[];
// let b=[];

// console.log(a==b);
// console.log(a===b);

//answer :-- when ever we compare two array then its reference address get compare not the value.

//Q2 

// let a=[];
// let b=a;

// console.log(a==b);
// console.log(a===b);

//ans :-- ture , because both of them having the same address 


//Q3

let a2=[20];
let b2 = [20];

console.log(a2[0]== b2[0]);
console.log(a2[0]===b2[0]);

// here value get compare not the memmory

//Q4 
let z=[1,2,3,4]
let a = {name : "anil"};
console.log(...z);

//spred operator is used here 

//Q5 

console.log(typeof NaN);

//number 


//Q6

let data = 10 - - 10;
console.log(data);

// 20 bodmass rule

//Q7

const set = new Set([1,1,2,3,2,4]);
console.log(set);

// [1,2,3,4] because is take unique value

//Q8

let data2 = {name : "aman"};
console.log(delete data2.name);

//true

//Q9 

const data3 =["peter " , "aman" , "suraj"];
const [x,y] =data3;
console.log(x,y);

// is asscess the data according to the index values

//Q10

const data4 =["peter " , "aman" , "suraj"];
const [ ,q] =data3; //how to get the second value direct
console.log(q);

















