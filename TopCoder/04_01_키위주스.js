function solution(capicities, bottles, fromId, toId) {
  // var answer = [];

  for (let i = 0; i < fromId.length; i++) {
    if (capicities[toId[i]] > bottles[toId[i]]) {
      let fromIdLitter = bottles[fromId[i]];
      let toIdLitter = bottles[toId[i]];

      if (toIdLitter + fromIdLitter <= capicities[toId[i]]) {
        bottles[toId[i]] = toIdLitter + fromIdLitter;
        bottles[fromId[i]] = 0;
      } else {
        bottles[fromId[i]] -= capicities[toId[i]] - bottles[toId[i]];
        bottles[toId[i]] = capicities[toId[i]];
      }
    }
  }
  return bottles;
  // return answer;
}

// console.log(solution([20, 20], [5, 8], [0], [1]));
// console.log(solution([30, 20, 10], [10, 5, 5], [0, 1, 2], [1, 2, 0]));
// console.log(solution([10, 10], [5, 8], [0], [1]));
