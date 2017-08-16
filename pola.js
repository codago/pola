"use strict"
function pola(str){
  
  let part1 = str.split("=")

  for(let i=0; i<10;i++){
    let part12 = part1[0].replace("#",i);
      let param1 = part12.split("*");
        for (let j=0;j<10;j++){
          let param2 = part1[1].replace("#",j);
          if(Number(param1[0])*Number(param1[1]) == Number(param2)){
            return [i,j];
          }
         }


  }

}
console.log(pola("42#3 *188 =80#204"));
console.log(pola("8#61 *895 =78410#5"));
