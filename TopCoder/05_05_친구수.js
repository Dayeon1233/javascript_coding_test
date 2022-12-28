function solution(friends) {
  var answer = Array.from({ length: friends.length }, () => 0);

  for (i = 0; i < friends.length; i++) {
    let friend = friends[i];
    for (j = 0; j < friend.length; j++) {
      if (friend[j] == "Y") {
        answer[i]++;
        answer = count(friends[j], answer, i);
      }
    }
  }
  return Math.max(...answer);
}

function count(friend, answer, i) {
  for (k = 0; k < friend.length; k++) {
    if (friend[k] == "Y" && k != i) {
      answer[i]++;
    }
  }
  return answer;
}

console.log(solution(["NYNNN", "YNYNN", "NYNYN", "NNYNY", "NNNYN"]));
