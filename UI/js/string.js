//convert the Lower Case to Upper case 

let str="aman sharma";
let New_str ="";
let lower ="abcdefghijklmnopqrstuvwxyz";
let upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for(let i =0 ; i<=str.length-1 ; i++ ){
    let char = str[i];
    for(let j=0 ; j<=lower.length-1 ; j++){
        if(char===lower[j]){
            New_str = New_str + upper[j];
        }
    }
}

console.log(New_str);




//convert 