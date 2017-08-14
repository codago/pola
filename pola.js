function pola(str){

  //buat array dari string
  var strArray  = str.split(" ");


  console.log(strArray);
  for(var i = 0; i < 10; i++){
    for( var j = 0; j < 10 ; j++){

      //replace() untuk mengganti string
      if (Number(strArray[0].replace("#" , j)) * Number(strArray[2]) ===  Number(strArray[4].replace("#", i))) {
        return [j, i];
      }

       if (Number(strArray[0].replace("#" , j)) * Number(strArray[2]) ===  Number(strArray[4].replace("#", i))) {
        return [j, i];
      }
    }
  }

}

console.log(pola("42#3 * 188 = 80#204"));
//[8,5]

console.log(pola("8#61 * 895 = 78410#5"));
//[7,9]
