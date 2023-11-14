function solution() {
  const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i/16}rem`) };
  const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };

  const test = {
    ...Array.from(Array(201)).reduce((acc, px) => {
      acc[`${px}pxr`] = pxToRem(px);
      return acc;
    }, {}),
  };
  return px0_10;
}
function pxToRem() {
  (px, base = 16) => `${px / base}rem`;
}
console.log(solution());
