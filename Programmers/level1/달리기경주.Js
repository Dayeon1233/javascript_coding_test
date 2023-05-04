//무식하게 푼 방법
// function solution(players, callings) {
//   for (let i = 0; i < callings.length; i++) {
//     let calledPlayerIdx = -1;
//     let speedPlayer = "";
//     for (let j = 0; j < players.length; j++) {
//       if (players[j] === callings[i]) {
//         calledPlayerIdx = j;
//         speedPlayer = players[j];
//         break;
//       }
//     }
//     let tmpPlayer = players[calledPlayerIdx - 1];
//     players[calledPlayerIdx - 1] = speedPlayer;
//     players[calledPlayerIdx] = tmpPlayer;
//   }

//   return players;
// }

//1. callings를 순회하면서 이름을 players 배열에서 뺌 players[인덱스-1] 위치에 집에 넣음
function solution(players, callings) {
  const idxMap = new Map();
  for (let i = 0; i < players.length; i++) {
    idxMap.set(players[i], i);
  }
  for (let i = 0; i < callings.length; i++) {
    const idx = idxMap.get(callings[i]); //추월전의 추월하는 주체 선수의 인덱스
    const back = players[idx - 1]; //추월당할 선수
    idxMap.set(callings[i], idx - 1); //추월 후 인덱스가 -1 해줌
    idxMap.set(back, idx); //추월 당한 후 당한 선수는 인덱스가 높아짐
    players[idx - 1] = callings[i];
    players[idx] = back;
    // players.splice(idx, 1);
    // players.splice(idx - 1, 0, callings[i]);
  }

  return players;
}
//9~13 시간초과, 10~13시간초과

// 알고리즘문제는 통상적으로 1초안에 해결해야합니다.

// 언어에 따라 연산속도가 다르지만 대부분 기준을 1초에 10억번 연산으로 잡습니다.
// players의 최대길이 50000,
// callings의 최대길이 100000
// indexOf 메소드 => 사용시 5만 사용 // O(N)
// splice 메소드 => 사용시 5만 사용 // O(N)
// 해당 코드는 calings의 요소 한번마다 150000번에 연산을 사용함.
// 따라서 100000 * 150000 => 15000000000번에 연산 .
// 10억이 넘어가므로 시간초과.
// 시간복잡도에대해 공부해보시는걸 추천합니당.
//["mumu", "kai", "mine", "soe", "poe"]
console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
