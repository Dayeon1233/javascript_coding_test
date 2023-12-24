function combi(n,r,cnt,result){
    if(cnt === r){
        return result.reduce((a,b)=>a+b,0);
    }

    combi(n,r,cnt+1,result);
    combi(n,r,cnt,result);

}
function solution(n, k, card){
    let answer;
    combi(n,3);

    return answer;
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));