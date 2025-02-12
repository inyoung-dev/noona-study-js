/* 문제3
한 지원자가 우리 회사에 지원을 했다. 지원자가 사용 가능한 스킬은 배열에 제공이 된다.
let skills = ["HTML","CSS","Javascript","React"] 
Javascript와 React 둘 다 할 줄 안다면 “합격!” Javascript와 React 둘 중 하나만 할 줄 안다면 “예비”, 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오.
input : let skills = ["HTML","CSS","Javascript","React"]
output: 합격 

input:let skills = ["HTML","CSS","Javascript"] 
output: 예비 

input:let skills = ["HTML","CSS"] 
output: 탈락 */

let skills = ["HTML","CSS","Javascript","React"]

if(skills.includes("Javascript") && skills.includes("React")){
    console.log("합격")
  }else if(skills.includes("Javascript") || skills.includes("React")){
    console.log("예비")
  }else {
    console.log("탈락")
  }
  