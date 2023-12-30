function solution(n){
    let answer=[]
    let tmp=[];
    
    dfs(1,n)
    function dfs (m,n)  {
        if(n === 0){
            return; //공집합은 출력 제외이므로 바로 리턴한다.
        }
        if(tmp.length === n){
            answer.push(tmp.join(" "));// tmp= [1, 2, 3]이라면 tmp를  '1 2 3'으로 바꿔준다.
            return;
        }
        tmp.push(m); //m을 선택한다.
        dfs(m+1,n);
        tmp.pop(); //m을 선택하지 않고,
        dfs(m+1,n-1) //출력할 부분집합 원소 수를 줄여준다.
 
    }
    return answer;
}

console.log(solution(3));
