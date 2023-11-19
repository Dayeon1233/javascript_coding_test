function solution(s){  
  let answer="";
  let arr = Array.from({length:26},() => 0);
  for(let ch of s){
    if(arr[ch.charCodeAt()-97] === 0){
      answer+=ch;
      arr[ch.charCodeAt()-97] = 1;
    }
  }
  return answer;
}
console.log(solution("ksekkset"));
