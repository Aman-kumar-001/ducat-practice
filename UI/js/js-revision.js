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

//Q11
//without using . operator find the value of age

const person = { name : "aman " , age : "23" , company : "google"}
const {age} = person;
console.log(age);


//Q12 merge two object

let data5 = { name : "Aman" , age : "110" , package : "1cr"};
let infp ={ company : "remote"};

data5={...data5 , ...infp};
console.log(data5);

//use let not const
//what is the {data,..onfo}

//Q13 

let data6 = { name : "Aman" , age : "110" , package : "1cr"};
let info ={ company : "remote" , age : "23"};
data6={...data6 , ...info};

console.log(data6);

//second value will rerender the the value

//Q14 

// let name1 = "aman";
// console.log(name1());

//output :-- name1 is not a function

//Q15

const result3 = false || {} || null;
console.log(result3);

//{} , in or operator it will get the first positive value;

//Q16

const result4 = false || null || " ";
console.log(result4);


//Q17 

const result5 = false || null || 0;
console.log(result5);

//if all the value is negative then if will take the last value

//Q18

const result6 = {} || true || 0;
console.log(result6);

//{}

//Q19 

console.log(Promise.resolve(5));

//promise fulfilled , promise contain another promise inside 


//Q20

console.log("emoji " === "emoji ");

//return ture , becuase is compare the unicode inside the emoji


//Q21 

// JSON.parse();

//parses JSON to a javascript value




//Q22

// let name3 = "sharma";

// function getName(){
//     console.log(name3);
//     let name3 = "sharma ji"
// }

// getName();

//hoisting used in var only but not let


//Q23


let name3 = "sharma";

function getName(){
    console.log(name3);
}

getName();

//because let have block scope 


//Q24 

console.log(`${(x => x)(' i love to ')}program`);



//Q25 


function sum(x,y,z){
    return x + y + z;
}

let num9 = sum(...[1,2,3])
console.log(num9);


//first destruct the array using spread operator


//Q26

const str2 =`hye you heavy developer`;
console.log(!typeof str2 === 'Object');
console.log(!typeof str2 === 'string');


//because not of type is false and false === anything is false expect false


//Q27

const name7 = "subscribe";
const age1 = "21"

console.log(isNaN(name7)); //true
console.log(isNaN(age));


//Q28 modify perosn object

let person2 = {name : "harshit"};
Object.seal(person2);

person2.name = " tiwari";
console.log(person2);

//you can not add any thing when you aree using seal in it


//Q29 

let  data7  =[ 2,3,4,5];
data7.shift();
console.log(data7);

///shift to remove the first number 


//30

let  data8  =[ 2,3,4,5];
data8.pop();
console.log(data8);

//pop to remove last one

//Q31

// check the number is odd or event


//Q32 

let person3 ={
    name : "Naman"
}
delete person3.name;
console.log(person3);

//it delete the value and return the updated object , array or true||false;


//Q33

let value = "true";
console.log(!value , typeof !value);

//Q34 

let value2 = Boolean("true");

console.log(value2 , typeof value2);

//or

let values3 = "true";
console.log(!!values3 , typeof values3);

























