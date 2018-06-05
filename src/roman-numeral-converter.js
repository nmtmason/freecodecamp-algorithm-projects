module.exports = function(num) {
  var numerals = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ];
  var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var str = '';
  for (var i = 0; i < numerals.length; i++) {
    var numeral = numerals[i];
    var decimal = decimals[i];
    var amount = Math.floor(num / decimal);
    console.log(amount);
    for (var j = 0; j < amount; j++) {
      str += numeral;
    }
    num -= amount * decimal;
  }
  return str;
};
