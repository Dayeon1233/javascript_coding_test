function solution(n){
    let answer = ''
    
    dfs(n);
    return answer;
    
    function dfs(n){
        if(n === 0 ){
            return ;
        }
        dfs(Math.floor(n/2))
        return answer+=n % 2;
    }
}

console.log(solution(11));