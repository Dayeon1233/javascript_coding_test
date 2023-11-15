function solution(arr) {
  let answer = 1; //무조건 맨 첫번째 사람은 보임
  let nowTall = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (nowTall < arr[i]) {
      answer++;
      nowTall = arr[i];
    }
  }

  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
