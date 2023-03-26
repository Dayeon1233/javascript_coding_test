function solution(line) {
  //var answer = [];
  let combi = combination([], line, []);
  let minX = 1001;
  let minY = 1001;
  let maxY = -1001;
  let maxX = -1001;
  var intArray = [];
  for (let i = 0; i < combi.length; i++) {
    let line1 = combi[i][0];
    let line2 = combi[i][1];
    let x =
      (line1[1] * line2[2] - line1[2] * line2[1]) /
      (line1[0] * line2[1] - line1[1] * line2[0]);
    let y =
      (line1[2] * line2[0] - line1[0] * line2[2]) /
      (line1[0] * line2[1] - line1[1] * line2[0]);
    if (Number.isInteger(x) && Number.isInteger(y)) {
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
      intArray.push([x, y]);
    }
  }
  let i = maxY + -1 * minY + 1;
  let j = maxX + -1 * minX + 1;
  //   let strJ = "." * j;
  //   let strDot = ".".repeat(j);
  //   let answer = Array.from(new Array(i).fill(strDot));
  let answer = Array.from(new Array(i), () => new Array(j).fill("."));
  for (let k = 0; k < intArray.length; k++) {
    let tmpC = intArray[k][0] + maxX;
    let tmpR = intArray[k][1] * -1 + maxY;
    answer[tmpR][tmpC] = "*";
  }
  for (let k = 0; k < i; k++) {
    answer[k] = answer[k].join("");
  }

  return answer;
}

const combination = (comb, rests, output) => {
  if (comb.length == 2) {
    return output.push(comb);
  }
  rests.forEach((v, idx) => {
    // const rest = [...rests.slice(0,idx), ...rests.slice(idx+1)]
    const rest = rests.slice(idx + 1);
    combination([...comb, v], rest, output);
  });
  return output;
};

console.log(
  solution([
    [2, -1, 4],
    [-2, -1, 4],
    [0, -1, 1],
    [5, -8, -12],
    [5, 8, 12],
  ])
);
