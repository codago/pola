"use strict"
var pola = str => {
  let tempNumber = str.split (" ");
  let option1 = tempNumber[0];
  let option2 = tempNumber[2];
  let operator = tempNumber[1];
  let result = tempNumber[4];

  let tempOption1 = "";
  let tempResult = "";

    for (let x=0;x<10;x++){
      tempResult = result.replace("#",x);

      for (let y=0;y<10;y++){
        tempOption1= option1.replace("#",y);

        if(+tempOption1*+option2 === +tempResult){
          return [y,x];
        }

      }

    }

}

console.log(pola("42#3 * 188 = 80#204"));

// result: [8, 5]

console.log(pola("8#61 * 895 = 78410#5"));

// [7,9]
