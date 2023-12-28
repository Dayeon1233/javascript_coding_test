function solution(s){
    let answer="YES";
    let arr = Array.from(s);
    let closeCnt = 0;

    while(arr.length > 0){
        let top = arr[arr.length - 1];
        if(top === '(' ){
            if(closeCnt > 0){
                closeCnt--;
                arr.pop();
            }else{
                return "NO";
            }
        }else{
            closeCnt++;
            arr.pop();
        }
    }
    return answer;
}

let a="(()(()))(()";
let b="(())(((())))"
let c="(()(()))(()"
console.log(solution(c));