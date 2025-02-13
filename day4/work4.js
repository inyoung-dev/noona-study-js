/* 문제1
주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오. */

let i =11
let prime = true

if (i ===1){
    prime = false
}else{
    for(let j=2;j<i;j++){
      if(i % j == 0){
        prime =  false 
      }
    }
}
console.log(prime)