function isSameType(value1, value2) {
  //your js code here
	
  const val1 = isNaN(Number(value1)) ? value1 : Number(value1);
  const val2 = isNaN(Number(value2)) ? value2 : Number(value2);
  
  return typeof val1 === typeof val2;
}
// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
