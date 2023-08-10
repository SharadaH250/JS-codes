// Assignment 1:
// Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.

function find(num){
     if(num>0){
        console.log(num+ " is a positive number");
     }
     else if(num<0)
     {
        console.log((num+ " is a negative number"));
     }
     else{
        console.log(num+ " is zero");
     }
}

find(3);
find(-2);
find(0);


// Assignment 2:
// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.
function factorial(num){
   let fact=1;
   if(num<0){
      return "negative number";
   }else if(num==0) {
      return 1;
   }
   else{
      for(let i=2;i<=num;i++)
      {
         fact=fact*i;
      }
      return fact;
      
   }
 
}
let result=factorial(5);
console.log(result);

// Assignment 3:
// Write a JavaScript function that takes two numbers as parameters and returns the larger one.

function larger(num1,num2){
   if(num1>num2){
      console.log(num1+ " is  the larger number");
   }
   else
   {
      console.log(num2+ " is the larger number");
   }
}
larger(3,9);


//Assignment 4:
//Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

function isPalindrome(string){
   let len=string.length;

   for(let i=0;i < len/2 ; i++){
      if(string[i]!= string[len-1-i]){
         return string +" is not a palindrome";
      }
   }
   return string + " is a palindrome";
}

let string=prompt("Enter a string: ");
let val= isPalindrome(string);
console.log(val);

//Assignment 5:
//Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

function isPrime(n){
   if(n<=1)
   return false;

   for(let i=2;i<n;i++)
   if(n%i == 0)
   return false;

 return true;  
}

function printPrime(n){
   for(let i=2;i<=n;i++){
      if(isPrime(i))
      console.log( i+"");
  
   }
}

printPrime(7);

//Assignment 6:
//Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.

var operator=prompt("Enter operator(+,-,*,/: )");
var number1=parseInt(prompt('Enter your first number'));
var number2=parseInt(prompt("Enter your second number"));


add=(number1,number2)=> (number1+number2);
subtract=(number1,number2)=>(number1-number2);
multiply=(number1,number2)=>(number1*number2);
divide=(number1,number2)=>(number1/number2);

if(operator=="+"){
   console.log(add(number1,number2));
}

else if(operator=="-"){
   console.log(subtract(number1,number2));
}
else if(operator=="*"){
   console.log(multiply(number1,number2));
}
else if (operator=="/"){
   console.log(divide(number1,number2));
}


//Assignment 7:
//Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.
function getVowels(string) {
   let Vowels = 'aAeEiIoOuU';
   let vowelsCount = 0;
   for (let i = 0; i < string.length; i++) {
       if (Vowels.indexOf(string[i]) !== -1) {
           vowelsCount += 1;
       }
   }
   return vowelsCount;
}
console.log("The Number of vowels in "
   + getVowels("Codekaro platform"));



   //Assignment 8:
//Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.
function isPerfect(n){
   sum=1;//To store all divisors-add

   for(let i=2;i*i<=n;i++){
      if(n%i==0){
         if(i*i!=n)
         sum=sum+i+n/i;
      else sum=sum+i;
      }
   }
   
   if(sum==n && n!=1)
   return "Perfect number";
else return "Not a perfect number";
}

let res=isPerfect(28);
console.log(res);


//Assignment 9:
//Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.

function Fibonacci(n){
   let a =0,b=1,c;
   console.log(a);
   console.log(b);
   for(let i=2;i<n;i++){
      c=a+b;
      console.log(c);
      a=b;
      b=c
   }
}
Fibonacci(7);

//Assignment 10:
//Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.

function multiplication(n)
{
   
   for(let i=1;i<=10;i++)
   {
      console.log(n+" * "+ i +" = "+n*i);
   }
}

multiplication(9);




