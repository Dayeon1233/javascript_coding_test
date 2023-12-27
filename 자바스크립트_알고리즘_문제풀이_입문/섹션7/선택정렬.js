function solution(arr){
    let i = 0;

    let k = 0;
    for(; i< arr.length ; i++){
        k = i;
        for(j = i+1; j<arr.length;j++){
            if(arr[k] > arr[j]){
                k = j;//j인덱스 값을 저장한다.
            }
        }
        // let tmp = arr[i];
        // arr[i] = arr[k];
        // arr[k] = tmp;

        [arr[i],arr[k]]=[arr[k],arr[i]];
    } 
    return arr;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));

