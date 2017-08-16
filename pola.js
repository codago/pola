function pola(str) {
  //debugger
  var kode = str.split("=")

  for (var i=0 ; i<10; i++){
    var part1= kode[0].replace("#",i)
    var params=part1.split("*")

    for(var j=0; j<10; j++){
      var part2= kode[1].replace("#",j)
      if(Number(params[0])* Number(params[1])==Number(part2)){

        return[i,j]
      }
    }
  }
}
console.log(pola("42#3 * 188 = 80#204"));
//result:[8,5]
console.log(pola("8#61 * 895 = 78410#5"));
//result:[7,9]
