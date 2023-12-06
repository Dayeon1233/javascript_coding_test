function solution(s){
    let answer="";
    cnt=1
    let currentChar =''
    for(let i = 0; i< s.length; i++){
         currentChar = s[i];
  
        if(i+1<s.length){
            if(currentChar === s[i+1]){
                cnt++;
            }
            else{
                if(cnt === 1){
                    answer+=currentChar
                }else{
                    answer+=currentChar+String(cnt);
                    cnt=1
                }
    
            }
        }else{
            if(cnt === 1){
                answer+=currentChar
            }else{
                answer+=currentChar+String(cnt);
            }
        }
       
    }
    
   
    return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));