function Solve(val) {
    const v = document.getElementById('result');
    v.value += val;
 }
 function Result() {
    const num1 = document.getElementById('result').value;
    const num2 = eval(num1);
    document.getElementById('result').value = num2;
 }
 function Clear() {
    const input = document.getElementById('result');
    input.value = '';
 }
 function Back() {
    const ev = document.getElementById('result');
    ev.value = ev.value.slice(0,-1);
 }