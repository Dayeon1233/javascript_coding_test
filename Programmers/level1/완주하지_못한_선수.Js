function solution(participant, completion) {
  // var answer = "";
  for (let i = 0; i < completion.length; i++) {
    if (participant.includes(completion[i])) {
      let targetIdx = participant.indexOf(completion[i]);
      delete participant[targetIdx];
    }
    // participant = participant.filter((elem) => elem !== completion[i]);
  }
  participant = participant.filter((elem) => elem !== undefined);
  return participant[0];
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
