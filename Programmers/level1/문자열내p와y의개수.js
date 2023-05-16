function solution(s) {
  console.log(s.toUpperCase().split("P"));
  map = {};
  map["y"] = 0;
  map["p"] = 0;
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "y" || s[i] === "Y") {
      map["y"] = map["y"] + 1;
    } else if (s[i] === "p" || s[i] === "P") {
      map["p"] = map["p"] + 1;
    }
  }
  const countY = map["y"];
  const countP = map["p"];

  if (countP == countY) return true;
  else return false;
}

//다른 풀이 1
function numPY(s) {
  //함수를 완성하세요
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  ); //문자열에서 separator가 등장하면 해당 부분은 삭제되고 남은 문자열이 배열로 반환됩니다.
}

//다른 풀이 2
function solution(s) {
  return s.match(/p/gi)?.length === s.match(/y/gi)?.length;
}
//p와 y가 없을 때 true가 출력되는 이유가 둘 모두 length가 없는 관계로 undefined === undefilned가 되기 때문
//i는 대소문자 상관없이 g는 전부 찾으라는 플래그

//다른풀이 3
function solution(s) {
  return [...s.toLowerCase()].reduce((acc, cur) => {
    if (cur === "p") return acc + 1;
    else if (cur === "y") return acc - 1;
    return acc;
  }, 0)
    ? false
    : true;
}

//다른 풀이 4
function numPY(s) {
  const sArr = s.split("");
  const { p, y } = sArr.reduce(
    (acc, c) => {
      if (c.toLowerCase() === "p") acc.p += 1;
      else if (c.toLowerCase() === "y") acc.y += 1;
      return acc;
    },
    { p: 0, y: 0 }
  );

  return p === y;
}

console.log(solution("pPopoyY"));
