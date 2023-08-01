function Calculator()
{
const operator = document.getElementById("operation");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
let result;
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else if (operator == '/'){
    result = number1 / number2;
}
else {
    alert("Invalid Operator");
    result = NaN;
}
alert(`Result:${result}`);
}