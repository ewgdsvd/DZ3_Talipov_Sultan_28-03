function getDataType(input) {
  const dataType = typeof input;
  console.log(dataType);
  return dataType;
}
getDataType(false); // Output: "boolean"
getDataType('hello world!'); // Output: "string"
getDataType(42); // Output: "number"
function flipString(inputString) {
  const flippedString = inputString.split('').reverse().join('');
  return flippedString;
}
console.log(flipString('Geeks')); // Output: "skeeG"
console.log(flipString('love')); // Output: "evoL"
