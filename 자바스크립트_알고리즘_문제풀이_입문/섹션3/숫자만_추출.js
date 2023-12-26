function solution(str){
    let num='';
    for(let x of str){
        if(!isNaN(x)) num +=x;
    }
    //num = str.replace(/[^0-9]/g,""); 
    return Number(num);
}

let str="g0en2T0s8eSoft";
console.log(solution(str));