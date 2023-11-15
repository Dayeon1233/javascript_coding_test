function solution(s) {
  let set = new Set();
  for (let str of s) {
    set.add(str);
  }
  //   return [...set];
  return Array.from(set);
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
