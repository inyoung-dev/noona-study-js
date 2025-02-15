function meetAt(year, month, date) {

    if (date) {
      return `${year}/${month}/${date}`;
    }
    if (month) {
      return `${year}년 ${month}월`;
    }
    if (year) {
      return `${year}년`;
    }
  
  }
  
  console.log(meetAt(1987,10,28))