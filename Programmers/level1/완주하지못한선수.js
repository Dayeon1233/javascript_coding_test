function solution(participant, completion) {
  const completionSet = new Set(completion);
  const participantSet = new Set(participant);
  //   var difference = participant.find((x) => !completion.includes(x));
  var difference = new Set(participant.find((x) => !completionSet.has(x)));
  return difference.values();
}

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
