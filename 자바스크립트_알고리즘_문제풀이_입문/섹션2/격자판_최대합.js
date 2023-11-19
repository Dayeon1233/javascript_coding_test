function solution(arr){  
    let answer=Number.MIN_SAFE_INTEGER;
    for(let i = 0 ; i< arr.length ;i++){
        let tmp = 0, tmp2 = 0;
        for(let j = 0 ; j< arr.length ; j++){
            tmp += arr[i][j];
            tmp2 += arr[j][i];

        }
        answer = Math.max(answer,tmp,tmp2);
    }

    let tmp = 0 , tmp2 = 0;
    for(let i = 0; i < arr.length ; i++){
        tmp += arr[i][i];
        tmp2 += arr[i][arr.length -i -1];
    }
    answer = Math.max(answer,tmp,tmp2);
    return answer;
}

let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];
console.log(solution(arr));