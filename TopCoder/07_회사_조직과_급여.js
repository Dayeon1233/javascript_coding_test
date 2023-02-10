function solution(relations) {
  const length = relations.length;
  let salary = [];
  let q = [];
  for (let i = 0; i < length; i++) {
    let yCount = 0;
    for (let j = 0; j < length; j++) {
      if (relations[i][j] === "Y") {
        yCount++;
      }
    }
    if (yCount === 0) {
      salary.push({ salary: 1, yCount: yCount });
      q.push({ num: i, salary: 1 }); //i는 몇번째 직원인지, 1은 샐러리
    } else salary.push({ salary: 0, yCount: yCount }); //0은 샐러리, ycount는 y갯수
  }
  while (q.length > 0) {
    let idx = q.shift();
    for (let i = 0; i < relations.length; i++) {
      if (i !== idx.num && relations[i][idx.num] === "Y") {
        let obj = salary[i];
        obj.salary += idx.salary;
        obj.yCount -= 1;
        salary[i] = obj;

        if (obj.yCount === 0) {
          q.push({ num: i, salary: obj.salary });
        }
      }
    }
  }

  const result = salary.reduce(
    (accumulator, currentValue) => accumulator + currentValue.salary,
    0
  );

  return result;
}

console.log(
  solution(["NNNNNN", "YNYNNY", "YNNNNY", "NNNNNN", "YNYNNN", "YNNYNN"])
);

console.log(solution(["NNYN", "NNYN", "NNNN", "NNNNNN", "NYYN"]));

console.log(solution(["N"]));
console.log(
  solution(["NYNNYN", "NNNNNN", "NNNNNN", "NNYNNN", "NNNNNN", "NNNYYN"])
);
console.log(solution(["NNNN", "NNNN", "NNNN", "NNNN"]));
