function solution(arr){  
    let answer=Number.MIN_SAFE_INTEGER;
    let temp = 0;
    for(let i = 0 ; i<arr.length ; i++){
        for(let j = 0 ; j<arr.length ; j++){
            temp += arr[i][j];

        }
        answer = Math.max(answer,temp);
        temp = 0;
    }

    for(let j = 0 ; j<arr.length ; j++){
        for(let i = 0 ;i <arr.length ; i++){
            temp += arr[i][j];
        }
        answer = Math.max(answer,temp);
        temp = 0;
    }

    for(let i = 0 ; i<arr.length ; i++){
        temp += arr[i][i];
    }
    answer = Math.max(answer,temp);
    temp = 0;

    for(let i = 0,j=arr.length ; i<arr.length ; i++,j--){
        temp += arr[i][j];
    }
    answer = Math.max(answer,temp);
    temp = 0;
    
    return answer;
}

let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];
console.log(solution(arr));