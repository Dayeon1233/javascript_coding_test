function solution(str){
    let num='';
    for(let x of str){
        if(!isNaN(x)) num +=x;
    }
    // str.replace(/[^0-9]/g,'');
    // console.log(str)
    return Number(num);
}

let str="g0en2T0s8eSoft";
console.log(solution(str));