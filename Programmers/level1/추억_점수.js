function solution(name, yearning, photo) {
  var answer = [];
  const countMap = new Map();
  for (let i = 0; i < name.length; i++) {
    countMap.set(name[i], yearning[i]);
  }
  for (let i = 0; i < photo.length; i++) {
    let count = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (countMap.get(photo[i][j]) != undefined) {
        count += countMap.get(photo[i][j]);
      }
    }
    answer.push(count);
  }
  return answer;
}

//다른 풀이 1
function solution(name, yearning, photo) {
  let obj = {};
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }
  return photo.map((value) =>
    value.map((v) => (obj[v] ? obj[v] : 0)).reduce((acc, cur) => acc + cur, 0)
  );
}

//다른 풀이 2
function solution(name, yearning, photo) {
  return photo.map((v) =>
    v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
  );
}

//다른 풀이 3
function solution(name, yearning, photo) {
  const score = new Map();
  name.forEach((n, idx) => {
    score.set(n, yearning[idx]);
  });

  return photo.map((names) =>
    names.reduce((a, n) => a + (score.get(n) || 0), 0)
  );
}

//다른 풀이 4

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
