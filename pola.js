"use strict"
function pola(string){
  let split   = string.split(" "),
      part1   = split[0],part2 =split[2],operator=split[1],result=split[4];
     if (operator = "*"){
        for(let i=0; i<=9; i++){
            let resultTemp = result.replace("#", i);
            for (let j=0; j<=9; j++){
                let part1Temp = part1.replace("#", j);
                if (part1Temp*part2 == resultTemp){
                    return[j,i];
          }
        }
      }
    }
}
console.log(pola("42#3 * 188 = 80#204"));// result: [8,5]
console.log(pola("8#61 * 895 = 78410#5"));// result: [7,9]
