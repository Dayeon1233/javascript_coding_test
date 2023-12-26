function solution(s, t){
    let answer=[];
    let idxArr=[];
    let i = s.indexOf(t);
    idxArr.push(i);
    while(i !== -1){
        i = s.indexOf(t,i+1);
        if(i !== -1){
            idxArr.push(i);
        }
    }

    let j = 0;
    for(let i = 0 ; i< s.length ; i++){
        if(j+1<=idxArr.length-1){
            let tmp = Math.min(Math.abs(idxArr[j]-i), idxArr[j+1]-i);
           
            answer.push(tmp);
        }
        else{
            answer.push(i-idxArr[j])
        }
        if(i === idxArr[j+1]){
            j++;
        }
    }

    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));