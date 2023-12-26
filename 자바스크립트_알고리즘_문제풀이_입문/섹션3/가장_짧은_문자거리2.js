function solution(s, t){
    let charIndex = [];
    let answer = [];
    let i = 0;
    while(true){
        i = s.indexOf(t,i);
        if(i === -1){
            break;
        }
        charIndex.push(i);
        i++;
    }
    let k = 0;
    for(let i = 0; i< s.length ; i++){
        if(s[i] !== t){
            while(1){
                if(i < charIndex[k]){
                    let distance = charIndex[k]-i;
                    answer.push(distance);
                    break;
                }
                else if(k+1 <charIndex.length && i > charIndex[k] && i <charIndex[k+1]){
                    let distance = Math.min(i-charIndex[k],charIndex[k+1]-i);
                    answer.push(distance);
                    break;

                }else if(k ===charIndex.length-1){
                    let distance = i-charIndex[k];
                    answer.push(distance);
                    break;
                }
                else{
                    k++;
                }
            }

        }else{
            answer.push(0);
        }
    }

    return answer;
}

let str="teachermodea";
console.log(solution(str, 'e'));