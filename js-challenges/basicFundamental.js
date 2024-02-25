

//6. Maximum number in array
function maxNum(arr){
    return Math.max(...arr)
}

//tests
const maxArr = [1,2,3,4,5];
const maxArr2 = [2,4,6,8,10];
console.log(maxNum(maxArr)); //expect 5
console.log(maxNum(maxArr2)); //expect 10

//7. Even or Odd counter
function evenOdd(arr){
    let even = 0;
    let odd = 0;
    for (i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            even ++;
        } else {
            odd ++;
        }
    }
    return `There are ${even} even numbers and ${odd} odd numbers.`
}

//tests
const evenArr = [2,4,6,8,10];
const oddArr = [1,3,5,7,9];
const mixArr = [1,2,3,4,5];

console.log(evenOdd(evenArr)); //expect 5 even 
console.log(evenOdd(oddArr)); //expect 5 odd 
console.log(evenOdd(mixArr)); //expect 2 even, 3 odd

//8. Vowel Counter
function countsVowel(str){
    let vowelCount = 0;
    for(i=0;i<str.length;i++){
        if (str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
            vowelCount ++;
        }
    }
    return vowelCount
}

//test
console.log(countsVowel("Theresa")); //expect 3
console.log(countsVowel("Ryan")); //expect 1

//5. Array Sum

function sumArr(arr){
    let sum = 0;
    for(i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

//test
const arr1 = [1,1,1,1,1];
const arr2 = [1,2,3,4,5];
console.log(sumArr(arr1)); //expect 5
console.log(sumArr(arr2)); //expect 15
