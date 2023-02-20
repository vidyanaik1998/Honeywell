// Write a program to efficiently find out if a given number is a prime number?   What is the time complexity of the same.

function isPrime(number){
    if(number<=1){
        return false
    }
    for(var  i=2;i<number;i++){
        if(number%i == 0){
            return false
        }
    }
    return true
 
}

console.log(isPrime(90))
