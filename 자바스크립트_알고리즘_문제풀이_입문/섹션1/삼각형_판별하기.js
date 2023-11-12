function solution(a, b, c){
  let array = []
  array.push(a);
  array.push(b);
  array.push(c);
  array.sort();
  if(array[0] + array[1] > array[2]){
    return "YES";
  }else return "NO"
}

console.log(solution(13, 33, 17));
console.log(solution(11, 6, 7));