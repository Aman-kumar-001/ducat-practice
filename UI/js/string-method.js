let str="aman sharma is in dubai";
let new_str ="";


for(i=0 ; i<=str.length-1 ; i++){
    
    if(i==0 || str[i-1]===" "){
        new_str = new_str + str[i].toUpperCase() ;
    }else {
        new_str = new_str + str[i];
    }
}

console.log(new_str);