![img](./special_sort.png)
## 내 코드 
```javascript
function solution(arr){
    let answer=arr;
    let targetIdx = 0;
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i] < 0){
            arr.splice(targetIdx,0,arr[i]);
            arr.splice(i+1,1);
            targetIdx++;
        }
    }
    return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
``` 

## Solution
```javascript
function solution(arr){
let answer=arr;
for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-i-1; j++){
        if(arr[j]>0 && arr[j+1]<0){
            [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
        }
    }   
} 
return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
``` 
arr[j]가 양수, arr[j+1]이 음수이면 서로 바꿔준다. (버블소트와 원리가 같음)
