// 1. Write a function called add7 that takes one number and returns that number + 7.
function add7(num){
    return num + 7;
}

// 2. Write a function called multiply that takes 2 numbers and returns their product.
function multiply(num1, num2){
    return num1 * num2;
}


// 3. Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(str){
    return str.slice(0,1).toUpperCase() + str.slice(1,str.length);
}

//An Alternative using CharAt() method
function capitalizeTwo(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

/* 4. Write a function called lastLetter that takes a string and returns the very last letter of that string:
   - lastLetter("abcd") should return "d" */ 
   function lastLetter(str){
    return str.charAt(str.length -1);
   }


//Tests
console.log(add7(3)); //expect 10
console.log(multiply(2,2)); //expect 4
console.log(capitalize("hello")); // expect "Hello"
console.log(capitalizeTwo("world")) //expect "World"
console.log(lastLetter("Poopy")); //expect "y"