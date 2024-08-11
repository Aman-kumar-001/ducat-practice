// reverse a string


function reversed(str){
    let reversed_str = ' '
    let new_str = str.split('')
    // console.log(new_str);
    
    
    for(i = new_str.length - 1 ;i>=0 ; i--){
        reversed_str = reversed_str + new_str[i];
    }
    
    return reversed_str
}



console.log(reversed("hello"));


//or this method


function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));  // Output: "olleh"
