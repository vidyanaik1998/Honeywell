// Write a program to find the sum of all sub-arrays with sum equal to an input K.

function Sum(arr , k){
    var isSum=false;
    var sum=0
    for(var i=0;i<arr.length;i++){
           for(var j=i;j<arr.length;j++){                    
               if(arr[i] + arr[j] === k){
                  isSum=true;
               sum=sum+arr[i] + arr[j]
                  console.log([arr[i] , arr[j]])
               }
           } 
    }
    if(isSum == false){
        return "No subarrays found"
    }
 
 return sum
}
var arr = [ 2 , 3, 4, 5, 6 , 7, 8 , 9 ,1 ,5 ];
var k = 10;
console.log(Sum(arr , k))