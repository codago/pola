function pola(str) {
  var tempAngka = str.split(" ");
  var op1 = tempAngka[0];
  var op2 = tempAngka[2];
  var operand = tempAngka[1];
  var result = tempAngka[4];

  var tempOp1 = "";
  var tempResult = "";
  switch(operand){
    case "*":
    for(var i=0;i<10;i++){
        tempResult = result.replace("#",i);
        
        for(var j=0;j<10;j++){
            tempOp1 = op1.replace("#",j);
            
            if(+tempOp1*+op2 === +tempResult){
                return [j,i];
            }
        }
    }
    break;
    case "/":
    for(var i=0;i<10;i++){
        tempResult = result.replace("#",i);
        
        for(var j=0;j<10;j++){
            tempOp1 = op1.replace("#",j);
            
            if(+tempOp1/+op2 === +tempResult){
                return [j,i];
            }
        }
    }
    break;
    case "+":
    for(var i=0;i<10;i++){
        tempResult = result.replace("#",i);
        
        for(var j=0;j<10;j++){
            tempOp1 = op1.replace("#",j);
            
            if(+tempOp1 + +op2 === +tempResult){
                return [j,i];
            }
        }
    }
    break;
      case "-":
    for(var i=0;i<10;i++){
        tempResult = result.replace("#",i);
        
        for(var j=0;j<10;j++){
            tempOp1 = op1.replace("#",j);
            
            if(+tempOp1-+op2 === +tempResult){
                return [j,i];
            }
        }
    }
    break;
    
    default:
    console.log("Error");
    break;
  }
}
console.log(pola("42#3 * 188 = 80#204"));
// result: [8, 5]
console.log(pola("8#61 * 895 = 78410#5"));
// [7,9]

