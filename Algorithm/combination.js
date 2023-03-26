const combination = (comb, rests, output) => {
  if (comb.length == 3) {
    return output.push(comb);
  }
  rests.forEach((v, idx) => {
    // const rest = [...rests.slice(0,idx), ...rests.slice(idx+1)]
    const rest = rests.slice(idx + 1);
    combination([...comb, v], rest, output);
  });
};

const output = [];
combination([], ["a", "b", "c", "d"], output);
console.log(output);
