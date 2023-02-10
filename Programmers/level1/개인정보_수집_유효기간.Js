function solution(today, terms, privacies) {
  var answer = [];
  var termsMap = new Map();
  for (let i = 0; i < terms.length; i++) {
    const [termKind, expireMonth] = terms[i].split(" ");
    termsMap.set(termKind, expireMonth);
  }

  for (let i = 0; i < privacies.length; i++) {
    // const list = privacies[i].split(" ");
    // const collectDate = list[0];
    // const termKind = list[1];
    var expireData = "";
    const [collectDate, termKind] = privacies[i].split(" ");
    // const collectDateDetail = collectDate.split(".");
    const [year, month, date] = collectDate.split(".");
    const expireMonth = termsMap.get(termKind);
    const numYear = Number(year);
    const numMonth = Number(month);
    const numDate = Number(date);
    const numExpireMonth = Number(expireMonth);

    if (numMonth + numExpireMonth <= 12) {
      if (0 < numDate - 1) {
        expireData = [numYear, numMonth + numExpireMonth, numDate - 1].join(
          "."
        );
      } else if (numMonth + numExpireMonth - 1 <= 12) {
        expireData = [numYear, numMonth + numExpireMonth - 1, 1].join(".");
      } else {
        expireData = [numYear + 1, numMonth + numExpireMonth - 1 - 12, 1].join(
          "."
        );
      }
    } else {
      if (0 < numDate - 1) {
        expireData = [
          numYear + 1,
          numMonth + numExpireMonth - 12,
          numDate - 1,
        ].join(".");
      } else if (numMonth + numExpireMonth - 1 <= 12) {
        expireData = [numYear + 1, numMonth + numExpireMonth - 1, 1].join(".");
      } else {
        expireData = [numYear + 2, numMonth + numExpireMonth - 1 - 12, 1].join(
          "."
        );
      }
    }
    if (expireData < today) {
      answer.push(i + 1);
    }
  }

  return answer;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);
