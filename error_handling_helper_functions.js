
// TODO: Create a function that validates user input
 function validateInput(input) {
  try {
    if (typeof input !== 'string') {
      throw new Error("Invalid input: must be a string");
    }
    if (input === 'string') {
      console.log("Valid input : Thank you");
    }
    console.log(" Valid input:", input);
  } catch (error) {
    console.error('error');
    }}


    validateInput('hi')

// TODO: Create a function that demonstrates multiple error types 
function test(str){
try{
     if ('string' === 'string') {
      console.log("Valid input : Thank you");
    }
    console.log(" Valid input:", input);

    if(typeof x != String){
      throw new Error('The string entered is not a string')
    }
}catch(error){
    console.log(error);
    
}finally{
    console.log('This is at the end');

}}
test('wow')
// TODO: Create a collection of helper functions for string manipulation
 toUpperCase=(str) => {
    return str.toUpperCase();
}

let stringExample = "hello world";
console.log(toUpperCase(stringExample));

function toLowerCase(str) {
    return str.toLowerCase();
}

let stringExample2 = "HELLO WORLD";
console.log(toLowerCase(stringExample2));


function reverseString(string){
    return string.split('').reverse().join('')
}

let stringExample3 = "Hello world";
console.log(reverseString(stringExample3));

function spaceString(string){
    return string.toUpperCase().split('')
}

let stringExample4= 'Halo'
console.log(spaceString(stringExample4));

// TODO: Create helper functions for array operations
function filterOddNumbers(arr){
    return arr.filter( num => num % 2 !== 0
);
    }

const newArrays =[1,2,3,4,5,6,7,8,9,10];
let oddNumbers = filterOddNumbers(newArrays);
console.log(oddNumbers);
