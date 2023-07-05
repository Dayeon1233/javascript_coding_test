function solution() {
  const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
  const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
  return px0_100;
}
console.log(solution());
