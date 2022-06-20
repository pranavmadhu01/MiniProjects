
let calcDisplay = document.getElementById("display");
function display(val)
{
  calcDisplay.value += val;
}
function solve()
{
  calcDisplay.value = eval(calcDisplay.value)
}
function clearScreen()
{
  calcDisplay.value = "";
}
function backspace()
{
  calcDisplay.value = calcDisplay.value.slice(0, calcDisplay.value.length -1)
}