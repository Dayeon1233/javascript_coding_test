function solution(test){
    let answer=0;
    let i = 0; j = i+1;
    let checkM = 0
    
    while(i<test[0].length-1){
        checkM = 0;
        for(let a = 1 ; a<test.length ; a++){
            if(test[a].indexOf(test[0][i]) > test[a].indexOf(test[0][j])){//학생 등수가 0번과 다른 것
                if(j == test[0].length - 1){
                    i++;
                    j = i+1;
                }
                else{
                    j++;
                }
                break;
            }else{
                checkM++;
            }

        }
        if(checkM == test.length - 1){
            answer++;
            if(j == test[0].length - 1){
                i++;
                j = i+1;
            }
            else{
                j++;
            }
        }
    }
  
    return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));