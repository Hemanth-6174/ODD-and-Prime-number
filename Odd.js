/**
 * ODD-(OneDifferenceNumber) to check number of odd and prime numbers in given range.
 */
//declare an empty array to store the result numbers.
const OneDifferenceNumber=[];
/**
 * helper function to check whether the given number is one differ number or not.
 * @param {number} num 
 * @returns return true or false as per the logic.
 */
function OneDiffNumber(num){
    let str=num.toString();//declare a string to convert number to string formant.
        for(let j=0;j<str.length;j++){
            //run a loop to check the numbers are difference of one or not .
            if(Math.abs(parseInt(str[j+1]))-Math.abs(parseInt(str[j]))==1){ 
                return true;//if difference is one return TRUE.
            }
        }
    
    return false;//if the if statemant fails in any of its iteration it return FALSE.
}
/**
 * helper function to check whether the number is prime or not.
 * @param {number} num 
 * @returns return true or false.
 */

function isprime(num){
    for(let i=2;i<=num;i++){//iterating to check prime or not.
        if(num%i!=0){
            return true;//return TRUE if it is a prime.
        }
        else{
            return false;//return FALSE if it is a prime.
        }
    }
}
/**
 * initial values for the function is 10 to 1000000.
 * Helper function to iterate the set of number in a given range.
 * @param {number} st 
 * @param {number}end 
 */
function inrange(st,end){//st==stating number and end ==ending number.
    for(let i=0;i<=end;i++){//loop starts from st and runs upto end.
        if( OneDiffNumber(i) == true){//it check whether the number is onedifference number or not.
            if(isprime(i)==true){//this check the odd number is a prime or not.
                OneDifferenceNumber.push(i);//if the nested if statemnt are true. Push the number in the array.  
            }
        }
    }
}
inrange(10,1000000);//calling the function to check the number is prime and odd.
//print onedifferencenumber array which have only onedifference numbers and primenumbers only.
console.log(OneDifferenceNumber);
// statemnt to print number of prime numbers in 1 to 10 million.
console.log(`The count of prime numbers which are onedigitdifference numbers are ${OneDifferenceNumber.length}.`)