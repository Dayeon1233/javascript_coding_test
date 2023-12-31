function solution(arr){
    let answer=arr;
    let targetIdx = 0;
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i] < 0){
            arr.splice(targetIdx,0,arr[i]);
            arr.splice(i+1,1);
            targetIdx++;
        }
    }

    return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));