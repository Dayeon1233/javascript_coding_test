function bottomUp(objectArr, weightLimit) {
  let endIdx = objectArr.length;
  const dp = Array.from(new Array(endIdx + 1), () =>
    new Array(weightLimit + 1).fill(-1)
  ); //행 그다음 열

  for (let rowIdx = 0; rowIdx < endIdx + 1; rowIdx++) {
    dp[rowIdx][0] = 0;
  }

  for (let colIdx = 0; colIdx < weightLimit + 1; colIdx++) {
    dp[0][colIdx] = 0;
  } //여기까지 dp 배열 초기화

  for (let rowIdx = 1; rowIdx < endIdx + 1; rowIdx++) {
    for (let colIdx = 1; colIdx < weightLimit + 1; colIdx++) {
      let prevIdx = rowIdx - 1;
      let notTakingVal = dp[prevIdx][colIdx];

      let weight = objectArr[rowIdx - 1][0];
      let value = objectArr[rowIdx - 1][1];

      let takingVal = 0;
      let prevWeightLimit = colIdx - weight;

      if (prevWeightLimit < 0) {
        takingVal = 0;
      } else {
        takingVal = dp[prevIdx][prevWeightLimit] + value;
      }
      let maxVal = Math.max(notTakingVal, takingVal);
      dp[rowIdx][colIdx] = maxVal;
    }
  }
  return dp[endIdx][weightLimit];
}
console.log(
  bottomUp(
    [
      [1, 30],
      [2, 20],
      [3, 40],
      [4, 10],
    ],
    5
  )
);
