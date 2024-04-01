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



