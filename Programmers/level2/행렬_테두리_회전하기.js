function solution(rows, columns, queries) { 
  const pan = Array.from(new Array(columns), () => new Array(rows).fill(0));
};

console.log(
  solution(6,6,[
    [2,2,5,4],
    [3,3,6,6],
    [5,1,6,3],
  ])
);
