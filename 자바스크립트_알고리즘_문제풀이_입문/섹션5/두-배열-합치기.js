function solution(arr1, arr2){
    let j = 0;
    let k = arr2[j];
    let copyArr1 = arr1.slice();
    for(let i = 0 ; i<arr1.length; i++){
       if(arr1[i] >= k){
            copyArr1.splice(i,0,arr2[j]);
            j++;
       }
    }
    if(k<arr2.length){
        copyArr1.push(...arr2.slice(k))
    }
    return copyArr1;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));