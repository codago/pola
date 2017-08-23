function pola(str){

  //buat array dari string
  var strArray  = str.split(" ");

  for(var x = 0; x < 10; x++){ //x untuk  # yang pertama
    for( var y = 0; y < 10 ; y++){ //y untuk # yang kedua

      //replace() untuk mengganti string ("#" to x dan y) ke Number
      if (Number(strArray[0].replace("#" , x)) * Number(strArray[2]) ===  Number(strArray[4].replace("#", y))) {
        return [x, y];
      }

       if (Number(strArray[0].replace("#" ,x )) * Number(strArray[2]) ===  Number(strArray[4].replace("#", y))) {
        return [x, y];
      }
    }
  }
}

console.log(pola("42#3 * 188 = 80#204"));
//[8,5]

console.log(pola("8#61 * 895 = 78410#5"));
//[7,9]
