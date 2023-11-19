            function solution(s){
            
                for(let i = 0 ; i< s.length; i++){
                    if(s[i] === 'A'){
                        s = s.substring(0,i)+'#'+s.substring(i+1);
                    }
                }
                return s;
            }
            
            function solution2(s){
                let answer="";
                for(let x of s){
                    if(x=='A') answer+='#';
                    else answer+=x;
                } 
                return answer;
            }

            function solution3(s){
                let answer=s;//이 경우 스트링은 얕은복사가 아니고, 값이 복사됨
                answer=answer.replace(/A/g, "#");
                return answer;
            }

            let str="BANANA";
            console.log(solution(str));