function solution(m, product){
    let answer=0;
    let sum = Array.from({ length: product.length }, ()=>0);//0으로 초기화

    //sum 배열에 일단 상품과 배송비 합을 다 구해놓는다.
    for(let i = 0; i<product.length ; i++){
        sum[i] += product[i][0] + product[i][1];
    }
   

    //상품 1/2 가격을 차례로 i 포문을 돌며 빼고 정렬 후 가장 많이 사줄 수 있는 맥스값을 구한다.
    for(let i = 0; i<product.length ; i++){
        let copySum = sum.slice();
        copySum[i] -= product[i][0]/2
        copySum.sort((a,b)=>a-b);
        let tmpM = m;
        for(let j = 0; j<product.length ; j++){
            tmpM -= copySum[j];
            if(tmpM<= 0){
                answer = Math.max(answer,j+1)
                break;
            }
        }
        
    }
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));