function solution(n, arr){
    let maxNum = 0;
    let answer = 0;
    for(let num of arr){
        let str = String(num);
        let sum = 0;
        for(let ch of str){
            sum += Number(ch);
        }
        if(maxNum <= sum){
            maxNum = sum;
            answer = Math.max(answer,num);
        }
    }
    return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));