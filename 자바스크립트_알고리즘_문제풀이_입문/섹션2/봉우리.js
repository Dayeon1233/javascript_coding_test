function solution(arr){  
    let answer=0;
    //오 아 왼 위
    let dr = [0,1,0,-1];
    let dc = [1,0,-1,0];
    for(let i = 0; i<arr.length ; i++){
        for(let j = 0 ; j <arr.length ; j++){
            let d = 0
            for(let k = 0 ;k<4 ; k++){
                let nr = i + dr[k];
                let nc = j + dc[k];
                if(nr >= 0 && nr<arr.length && nc >=0 && nc<arr.length ){
                    if(arr[i][j] > arr[nr][nc]){
                        d++;
                    }else break;
                }else{
                    d++;
                }
              
            }
            if(d === 4 ) answer++;
        }
    }
    return answer;
}

let arr=[[5, 3, 7, 2, 3], 
         [3, 7, 1, 6, 1],
         [7, 2, 5, 3, 4],
         [4, 3, 6, 4, 1],
         [8, 7, 3, 5, 2]];
console.log(solution(arr));