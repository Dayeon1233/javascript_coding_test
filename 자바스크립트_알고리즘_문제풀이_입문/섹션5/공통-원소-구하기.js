function solution(arr1, arr2){
    let answer=[];
    arr1.sort();
    arr2.sort();
    for(let e of arr1){
        if(arr2.indexOf(e)!== -1){
            answer.push(e);
        }
    }
    return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));