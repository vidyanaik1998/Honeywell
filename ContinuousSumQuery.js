/*Q1. Continuous Sum Query

There are A beggars sitting in a row outside a temple. Each beggar initially has an empty pot. When the devotees come to the temple, they donate some amount of coins to these beggars. Each devotee gives a fixed amount of coin(according to their faith and ability) to some K beggars sitting next to each other.
Given the amount P donated by each devotee to the beggars ranging from L to R index, where 1 <= L <= R <= A, find out the final amount of money in each beggar's pot at the end of the day, provided they don't fill their pots by any other means.
For ith devotee B[i][0] = L, B[i][1] = R, B[i][2] = P, Given by the 2D array B
Problem Constraints
1 <= A <= 2 * 105
1 <= L <= R <= A
1 <= P <= 103
0 <= len(B) <= 105
Input Format
The first argument is a single integer A.
The second argument is a 2D integer array B.
Output Format
Return an array(0 based indexing) that stores the total number of coins in each beggars pot.
Example Input

Input 1:-

A = 5
B = [[1, 2, 10], [2, 3, 20], [2, 5, 25]] */

A = 5
B = [[1, 2, 10], [2, 3, 20], [2, 5, 25]]

function devotee(arrLength , arr){
    var newarr=new Array(arrLength).fill(0);
    for(var i=0;i<arr.length;i++){
        if(arr.length === 3){
        var start = arr[i][0];
        var end=arr[i][1];
        var amount = arr[i][2];
        for(var j=0;j<A;j++){
            if(j>=start-1 && j<=end-1){
                newarr[j]=newarr[j]+amount;
            }
            else{
                newarr[j]=newarr[j]+0
            }
        }
        }
    }
   return newarr
}

console.log(devotee(A , B))
