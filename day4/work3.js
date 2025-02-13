/* 문제1
1부터 50까지 369결과를 프린트하자.

1
2
짝 
4
5 
짝
...생략 

28 
짝
짝 
짝
짝 
짝짝  */

for(let i=1;i<=50;i++){
    let string = i.toString()
    let result = ""
    for(let j=0;j<string.length;j++){
      if(string[j] == "3" ||string[j] == "6" ||string[j] == "9" ){
        result+="짝"
      }
    }
    console.log(result.length>0?result:i)
  }