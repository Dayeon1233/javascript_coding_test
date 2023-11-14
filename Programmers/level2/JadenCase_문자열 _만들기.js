function solution(s) {
  var words = s.split(" ");
  // var a = isNaN(1);
  // var b = isNaN("1");
  // var c = isNaN("");
  // var d = isNaN("a");
  // var e = isNaN(""); // true
  // var f = isNaN("0"); // true
  for (let i = 0; i < words.length; i++) {
    if (isNaN(words[i][0])) {
      let upper = words[i].charAt(0).toUpperCase();
      words[i] = upper + words[i].substr(1);
    }
  }
  return words.join(" ");
}

function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1))
    .join(" ");
}

//첫번째 글자이거나 공백이라면 어펄케이스 그외는 소문자로 처리
function solution(s) {
  var answer = '';
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i-1] === " ") {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}

function solution(s) {
  var answer = s.split(" ");

  for(var i=0; i<answer.length; i++){
      answer[i] = answer[i].substring(0,1).toUpperCase() + answer[i].substring(1).toLowerCase();
  }

  return answer.join(" ");
}
// 문자열 접근 charat, [] 비교
// https://thisthat.dev/string-char-at-vs-string-bracket-notation/

console.log(solution("3people unFollowed me"));
