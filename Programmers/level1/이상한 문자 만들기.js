//1. 공백기준으로 s를 잘라서 배열에 집어넣기
//2. 1번에서 만든 배열 원소를 순회하면서 문자를 돌면서 idx 가 짝/홀에 따라 대소문자 처리하기
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

console.log(solution("try hello world"));
