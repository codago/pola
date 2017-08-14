'use strict'
function pola(str)
{
  let pecah   = str.split(" "),
      oper1   = pecah[0],
      oper2   = pecah[2],
      operator= pecah[1],
      hasil   = pecah[4];

      if (operator === "*")
      {
        //return("Ini adalah perkalian");
        for(let i=0; i<10; i++)
        {
          let hasilTemp = hasil.replace("#", i);

          for (let j=0; j<10; j++)
          {
              let oper1Temp = oper1.replace("#", j);

              if (+oper1Temp*+oper2 == +hasilTemp)
              {
                  return[j,i];
              }
          }
        }
      }
      else if (operator==="/")
      {
        for(let i=0; i<10; i++)
        {
          let hasilTemp = hasil.replace("#", i);

          for (let j=0; j<10; j++)
          {
              let oper1Temp = oper1.replace("#", j);

              if (+oper1Temp/+oper2 == +hasilTemp)
              {
                  return[j,i];
              }
          }
        }
      }
}

console.log(pola("80#204 / 188 = 42#3")); // [8,5];
console.log(pola("8#61 * 895 = 78410#5")); //[7,9];
