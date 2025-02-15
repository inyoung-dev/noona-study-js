let val = [50000,10000,5000,1000,500,100]
function change(money) {
  for(let i=0;i<val.length;i++){
    
      let num = Math.floor(money / val[i])
      console.log(val[i]+"X"+num)
      money = money - (val[i]*num)
    
  }
}

change(12300)