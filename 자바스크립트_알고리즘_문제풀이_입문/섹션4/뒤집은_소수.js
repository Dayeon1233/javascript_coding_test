function isPrime(num){
    if(num == 1){
        return false;
    }
    let i = num-1;

    while(i>1){
        if(num % i == 0){
            return false;
        }else{
            i--;
        }
    }
    return true;
}

function solution(arr){
    let answer=[];
    for(let v of arr){
        let s = String(v);
        s = s.split("").reverse().join("");//문자열 뒤집는 방법 정리할 것
        let result = isPrime(Number(s));
        if(result){
            answer.push(Number(s));
        }
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));