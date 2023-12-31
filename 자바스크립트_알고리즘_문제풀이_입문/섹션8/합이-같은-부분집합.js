function solution(arr){
    let answer="NO";
    let currentSum = 0;
    let sum = 0;
    for(let i = 0; i<arr.length ; i++){
        sum+=arr[i];
    }
    dfs(0);

    function dfs(i){
        if(i === arr.length) return;
        if(currentSum === sum / 2){
            answer = "YES";
        }else{
            currentSum+=arr[i];
            dfs(i+1);
            currentSum-=arr[i];
            dfs(i+1);

        }
    }

    return answer;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));