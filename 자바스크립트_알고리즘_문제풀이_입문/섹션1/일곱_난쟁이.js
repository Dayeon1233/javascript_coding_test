function solution(arr){
    let sum = arr.reduce((a,b)=>a+b,0);
    for(let i = 0; i< arr.length ; i++){
        for(let j = 1; j< arr.length - 1; j++){
            if(sum - arr[i] - arr[j]===100){
                arr.splice(j,1);
                arr.splice(i,1);
                return arr;
            }
        }
    }
    return -1;
}

// let arr=[22, 7, 21, 19, 10, 15, 25, 8, 13];
let arr=[22, 7, 21, 19, 10, 15, 25, 8,13];
console.log(solution(arr));