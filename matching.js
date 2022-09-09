function matching(inputValue, constantValue) {
  inputValue = inputValue.toUpperCase();
  for (var i = 0; i < constantValue.length; i++) {
    if (inputValue.indexOf(constantValue[i]) === -1) {
      return false;
    }
  }
  return true;
}
var result = matching("ebCde", "BCD");

console.log(matching("ebCde", "BCD"));
console.log(matching("eCB", "ECB"));
console.log(matching("BcdEF", "BCEF"));
console.log(matching("BCD", "BcD"));
