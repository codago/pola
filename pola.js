let pola = str => {
  let strArray = str.split(" ")
  for (let i = 0; i<10; i++){//untuk melooping yang pertama
    for(let j = 0; j<10; j++){//untuk melooping yang kedua
      if(Number(strArray[0].replace("#", i)) * Number(strArray[2]) === Number(strArray[4].replace("#", j))){
        return [i, j] //mencari untuk variable pertama
      }
      if(Number(strArray[0].replace("#", i)) * Number(strArray[2]) === Number(strArray[4].replace("#", j))){
        return [i, j] //mencari untuk variable kedua
      }
    }
  }
}

console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));
