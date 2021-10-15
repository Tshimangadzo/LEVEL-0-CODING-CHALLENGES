function getMaximum(number1, number2, number3, ...otherNumbers) {
    
   if( number1[0] !== undefined || number2[0] !== undefined || number3[0] !== undefined || otherNumbers[0][0] !== undefined){
       return 'function expect a bunch of numbers, not an array or list.';
   }

  var maximumValue = "";
  if (number1 > number2 && number1 > number3) {
    maximumValue = number1;
  } else if (number2 > number3) {
    maximumValue = number2;
  } else {
    maximumValue = number3;
  }

  for (let i = 0; i < otherNumbers.length; i++) {
    if (maximumValue < otherNumbers[i]) {
        maximumValue = otherNumbers[i];
    }
  }

  return maximumValue;
}


