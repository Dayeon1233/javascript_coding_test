function solution(s){
   s=s.toLowerCase();
   for(let i = 0;i<s.length ; i++){
    if(!(97 <= s[i].charCodeAt() && s[i].charCodeAt() <= 122)){
        // s.replace(s[i],'');
        s = s.substring(0,i) + s.substring(i+1);
        i--;//연속된 제거해야할 문자가 있을 때 제거되면서 i값은 커지는데 제거해야할 인덱스 값을 커버하지 못하므로 낮춰줌
    }
   }
   if(s === s.split('').reverse().join('')){
    return "YES";
   }
    return "NO";
}

let str="found7, time: study; Yduts; emit, 7Dnuoff";
console.log(solution(str));