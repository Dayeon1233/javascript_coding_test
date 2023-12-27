function solution(n){
    let answer = dfs(n,1,[]);
    return answer;
}

function dfs(n,i,arr){
    if(i > n){
        return;
    }
    while(i<=n){
        arr.push(i);
        i++;
        dfs(n,i,arr);
        return arr;
    }
}

console.log(solution(3));