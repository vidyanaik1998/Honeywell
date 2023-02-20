// Sort the given array with integer numbers. For example : Given input [0,-1,10,5] and the expected output is [-1,0,5,10].

function sort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<(arr.length-i-1);j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp
            }
       }
    }
      return arr
    }
    var arr = [ 10, 2, -2, -20, 10 ];
    console.log(sort(arr))