//convert the Lower Case to Upper case

// let str="aman sharma";
// let New_str ="";
// let lower ="abcdefghijklmnopqrstuvwxyz";
// let upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// for(let i =0 ; i<=str.length-1 ; i++ ){
//     let char = str[i];
//     for(let j=0 ; j<=lower.length-1 ; j++){
//         if(char===lower[j]){
//             New_str = New_str + upper[j];
//         }
//     }
// }

// console.log(New_str);

//convert the upper to lower case

// let str = "AMAN SHARMA";
// let New_str = "";
// let lower = "abcdefghijklmnopqrstuvwxyz";
// let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// for (let i = 0; i <= str.length - 1; i++) {
//   let char = str[i];
//   for (let j = 0; j <= upper.length - 1; j++) {
//     if (char === upper[j]) {
//       New_str = New_str + lower[j];
//     }
//   }
// }

// console.log(New_str);


//CONVERT THE FIRST LETTER INTO UPPER CASE;


let str="aman sharma is in dubai";
let new_str ="";


for(i=0 ; i<=str.length-1 ; i++){
    // let new_Str ="";
    if(i==0 || str[i-1]===" "){
        new_str = new_str + str[i].toUpperCase() ;
    }else {
        new_str = new_str + str[i];
    }
}

console.log(new_str);
