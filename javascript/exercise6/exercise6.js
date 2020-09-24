function romanNumerals (toConvert) {
  const romanNumbers = new Map();
  romanNumbers.set('M', 1000);
  romanNumbers.set('CM', 900);
  romanNumbers.set('D', 500);
  romanNumbers.set('CD', 400);
  romanNumbers.set('C', 100);
  romanNumbers.set('XC', 90);
  romanNumbers.set('L', 50);
  romanNumbers.set('XL', 40);
  romanNumbers.set('X', 10);
  romanNumbers.set('IX', 9);
  romanNumbers.set('V', 5);
  romanNumbers.set('IV', 4);
  romanNumbers.set('I', 1);

  let result = '';

  for (let romanNumber of romanNumbers) {
    while (toConvert >= romanNumber[1]) {
      result += romanNumber[0]
      toConvert -= romanNumber[1]
    }
  }
  return result;
}

console.log(romanNumerals(6)) // VI
console.log(romanNumerals(76)) // LXXVI
console.log(romanNumerals(13)) // XIII
console.log(romanNumerals(44)) // XLIV
console.log(romanNumerals(3999)) // MMMCMXCIX