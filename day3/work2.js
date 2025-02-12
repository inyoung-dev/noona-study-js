/* 문제2
나는 대학교 교수다 레포트 점수에 따라 매기는 프로그램을 만드시오.
90~100 : A
80~89 : B
70~79 : C
60~69 : D
less than 59 : F */

let score = 98
if(score >= 90 && score <=100){
    console.log("A등급")
}else if(score >= 80 && score <= 89){
    console.log("B등급")
}else if(score >= 70 && score <= 79){
    console.log("C등급")
}else if(score >= 60 && score <= 69){
    console.log("D등급")
}else if(score >= 0 && score <= 59){
    console.log("F등급")
}else {
    console.log("점수가 이상합니다.")
}