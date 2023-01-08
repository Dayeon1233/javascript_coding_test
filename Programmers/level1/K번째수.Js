// function solution(array, commands) {
//   var answer = [];
//   for (let i = 0; i < commands.length; i++) {
//     let command = commands[i];

//     const arr = array.slice(command[0] - 1, command[1]);
//     arr.sort(function (a, b) {
//       return a - b;
//     });
//     answer.push(arr[command[2] - 1]);
//   }

//   return answer;
// }

// function solution(array, commands) {
//   return commands.map((command) => {
//     const [sPosition, ePosition, position] = command;
//     const newArray = array
//       .filter(
//         (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
//       )
//       .sort((a, b) => a - b);

//     return newArray[position - 1];
//   });
// }

// function solution(array, commands) {
//   return commands.map(
//     ([from, to, k]) => array.slice(from - 1, to).sort((x, y) => x - y)[k - 1]
//   );
// }
function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let eachCommand = commands[i];
    let slice = array.slice(eachCommand[0] - 1, eachCommand[1]);
    answer.push(slice.sort((a, b) => a - b)[eachCommand[2] - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
