function matching(constantValue, inputValue) {
  if (inputValue.toUpperCase() !== inputValue) {
    return false;
  }
  constantValue = constantValue.toLowerCase();
  inputValue = inputValue.toLowerCase();
  for (var i = 0; i < inputValue.length; i++) {
    if (constantValue.indexOf(inputValue[i]) === -1) {
      return false;
    }
  }
  return true;
}

var result = matching("BCD", "BcD");
console.log(result);
