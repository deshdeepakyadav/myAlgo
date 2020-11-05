/**
 * Problem : Write a program which accept any number as input and in output return list of series till number 
 * and print "Fizz" for each number if divided by 3 and print "Buzz" if number divided by 5 and print
 * "FizzBuzz" if number divided by 3 and 5 both else return number.
 * Solution:
 *  Function(number):
 *      Check if Not a number
 *          return
 *      if number then Iterate till number
 *          check condition if number is divisable by 3 and 5 then print "FizzBuzz"
 *          else if check if number is divisable by 3 then print "Fizz"
 *          else if check if number is divisable by 5 then print "Buzz"
 *          else print number
 * Time Complexity (T) = 1 + 1+ 1+ n + m + m + m = 3 + n + 3m = 3 + 1* n + 3* m
 * Removing coffecicent ( T ) = n + m = n
 * Big O (n) 
 *  */
const fizzBuzz = function(num){
    if(isNaN(num)){ // excuted 1 time
      console.log('Please EnterNumber Only'); // excuted 1 time
      return;
    }
    for(let i=1; i<=num; i++){ // excuted 1 time
      if(i%3 === 0 && i%5 === 0){ // excuted n time
        console.log('FizzBuzz'); 
      }else if(i%3 === 0){ // excuted m time
        console.log('Fizz');
      }else if(i%5 === 0){ // excuted m time
        console.log('Buzz');
      }else{ // excuted m time
        console.log(i); 
      }
    }
  }
  fizzBuzz(10);
  