function solution(answer) {
  card1 = [1, 2, 3, 4, 5, 6, 7, 8];
  card2 = [1, 2, 3, 4, 9, 10, 11, 12];
  card3 = [1, 2, 5, 6, 9, 10, 13, 14];
  card4 = [1, 3, 5, 7, 9, 11, 13, 15];

  const card1Set = new Set(card1);
  const card2Set = new Set(card2);
  const card3Set = new Set(card3);
  const card4Set = new Set(card4);

  // card1 = new Set(1, 2, 3, 4, 5, 6, 7, 8);
  // card2 = new Set(1, 2, 3, 4, 9, 10, 11, 12);
  // card3 = new Set(1, 2, 5, 6, 9, 10, 13, 14);
  // card4 = new Set(1, 3, 5, 7, 9, 11, 13, 15);

  setArr = [card1Set, card2Set, card3Set, card4Set];
  init = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  let sett = new Set(init);
  let interSet = new Set();
  for (let i = 0; i < 4; i++) {
    if (answer[i] === "N") {
      // sett.difference()
      sett = difference(sett, setArr[i]);
    } else {
      if (interSet.size == 0) {
        interSet = setArr[i];
      } else {
        interSet = intersection(interSet, setArr[i]);
      }
    }
  }
  let ans;
  if (interSet.size > 0) {
    ans = intersection(interSet, sett);
  } else {
    ans = sett;
  }

  const ansarr = [...ans];
  return ansarr[0];
}

const difference = (setA, setB) => {
  return new Set([...setA].filter((x) => !setB.has(x)));
};
const intersection = (setA, setB) => {
  return new Set([...setA].filter((x) => setB.has(x)));
  // return setA.filter((it) => setB.includes(it)); // returns [1, 2]
};
console.log(solution("NYNY"));

// console.log(solution(["..X.X.X.X.X.X."], 0, 0, [2, 0, -2, 0], [0, 2, 0, -2]));
