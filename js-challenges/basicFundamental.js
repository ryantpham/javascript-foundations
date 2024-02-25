//1. Fizzbuzz
function fizzBuzz(num){
    let arr = [];
    for (let i = 1; i <= num;i++){
        if(i%3==0 && i%5==0){
            arr.push("fizzbuzz")
        } else if (i%5==0){
            arr.push("buzz")
        } else if (i%3==0){
            arr.push("fizz")
        } else{
            
        }
    }
    return arr;
}

//test
console.log("Fizz Buzz");
console.log(fizzBuzz(5)); //expect fizz, buzz
console.log(fizzBuzz(15));//expect fizz, buzz , fizz, buzz, fizz , fizzbuzz

//2. Reverse String
function reverseString(str){
    let reverse = "";
    for (let i = str.length - 1; i >=0; i--){
        reverse += str[i];
    }
    return reverse;
}

//tests
console.log("Reverse String")
console.log(reverseString("Hello")); //expect olleH
console.log(reverseString("Theresa")) //expect aserehT

//3. Palinedrome Checker
function palinedrome(str){
    for (let i = 1; i < str.length; i++){
        if(str[i] === str[str.length -1 -i]){
            return true;
        } else {
            return false;
        }
    }
}

//test
console.log("Palinedrome");
console.log(palinedrome("Hello")); //return false
console.log(palinedrome("ABCDCBA")); //return true

//5. Array Sum
function sumArr(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

//test
console.log("Array Sum");
const arr1 = [1,1,1,1,1];
const arr2 = [1,2,3,4,5];
console.log(sumArr(arr1)); //expect 5
console.log(sumArr(arr2)); //expect 15

//6. Maximum number in array
function maxNum(arr){
    return Math.max(...arr)
}

//tests
console.log("Maximum Num");
const maxArr = [1,2,3,4,5];
const maxArr2 = [2,4,6,8,10];
console.log(maxNum(maxArr)); //expect 5
console.log(maxNum(maxArr2)); //expect 10

//7. Even or Odd counter
function evenOdd(arr){
    let even = 0;
    let odd = 0;
    for (let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            even ++;
        } else {
            odd ++;
        }
    }
    return `There are ${even} even numbers and ${odd} odd numbers.`
}

//tests
console.log("Even or Odd");
const evenArr = [2,4,6,8,10];
const oddArr = [1,3,5,7,9];
const mixArr = [1,2,3,4,5];

console.log(evenOdd(evenArr)); //expect 5 even 
console.log(evenOdd(oddArr)); //expect 5 odd 
console.log(evenOdd(mixArr)); //expect 2 even, 3 odd

//8. Vowel Counter
function countsVowel(str){
    let vowelCount = 0;
    for(let i=0;i<str.length;i++){
        if (str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
            vowelCount ++;
        }
    }
    return vowelCount
}

//test
console.log("Vowel Counter");
console.log(countsVowel("Theresa")); //expect 3
console.log(countsVowel("Ryan")); //expect 1

//9. Calculate Factorial
function calculateFactorial(num){
    let factorial = 1;
    for(i=1;i<=num;i++){
        factorial *= i;
    }
    return factorial;
}
//tests
console.log("Calculate Factorial")
console.log(calculateFactorial(5)); //expect 120
console.log(calculateFactorial(10)); //expect 3628800

//10. Reverse Number
function reverseNumber(num){
    let toStr = num.toString();
    let reverse = toStr.split("").reverse();
    let numArr = [];
    for (i=0;i<reverse.length;i++){
        numArr.push(parseInt(reverse[i]));
    }
    
    return parseInt(numArr.join(""));
}

//tests
console.log("Reverse Number")
console.log(reverseNumber(12345))//expect 54321
console.log(reverseNumber(54321))//expect 12345
console.log(typeof reverseNumber(54321))//expect number

