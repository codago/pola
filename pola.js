function pola (str) {

  var number = str.split(" ");
  var op_one =  number[0];
  var op_two =  number[2];
  var operator = number[1];
  var result = number[4];
  var temp_op_one = '';
  var temp_result = '';

    for(var i=0;i<10;i++){
      temp_op_one = op_one.replace('#', i);

      for(var n=0; n<10; n++) {
        temp_result = result.replace('#', n);

        if (+temp_op_one*+op_two === +temp_result) {
          return [i, n];
        }

      }

}
}
console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));
