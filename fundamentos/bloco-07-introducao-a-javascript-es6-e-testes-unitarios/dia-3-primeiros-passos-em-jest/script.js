function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }

  function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }

  function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }

  function encode(string) {
    string = string.replaceAll('a', '1');
    string = string.replaceAll('e', '2');
    string = string.replaceAll('i', '3');
    string = string.replaceAll('o', '4');
    string = string.replaceAll('u', '5');
    return string;
  }

  function decode(stringCode) {
    stringCode = stringCode.replaceAll('1', 'a');
    stringCode = stringCode.replaceAll('2', 'e');
    stringCode = stringCode.replaceAll('3', 'i');
    stringCode = stringCode.replaceAll('4', 'o');
    stringCode = stringCode.replaceAll('5', 'u');
    return stringCode;
  }

  module.exports = {
    sum, 
    myRemove,
    myFizzBuzz,
    encode,
    decode,
};