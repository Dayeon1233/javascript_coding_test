//순열 구하기
const permutation = (permu, rests, output) => {
  if (rests.length == 0) {
    return output.push(permu);
  }
  rests.forEach((v, idx) => {
    const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
    permutation([...permu, v], rest, output);
  });
};

const output = [];
permutation([], ["a", "b", "c", "d"], output);
console.log(output);
