function solution(park, routes) {
  const blocker = [];
  let startX;
  let startY;

  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === "S") {
        startX = i;
        startY = j;
      } else if (park[i][j] === "X") {
        blocker.push((i, j));
      }
    }
  }
  let r = startX;
  let c = startY;
  for (let i = 0; i < routes.length; i++) {
    const move = routes[i].split(" ");
    switch (move[0]) {
      case "E":
        if (c + move[1] >= 0 && c + move[1] < park[0].length){
            for(let tempC = c; tempC <= c+move[1];tempC++){
                if(){
                    c += move[1];
                }
            }
           
        }
      case "W":
        c -= move[1];
      case "N":
        r -= move[1];
      case "S":
        r += move[1];
    }
  }
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]));
