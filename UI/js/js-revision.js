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

console.log(obj);
console.log(obj2);

