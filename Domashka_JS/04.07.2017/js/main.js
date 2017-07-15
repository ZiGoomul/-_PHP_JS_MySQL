'use strict';
var znak = prompt("Ведите знак: +, -, *, /","+");
var chislo1 = prompt("введите первое число","20");
var chislo2 = prompt("введите второе число","60");
var rezult;
if (znak === "+") {
	rezult = chislo1 + chislo2;
} else if (znak === '-') {
	rezult = chislo1 - chislo2;
} else if (znak === '*') {
	rezult = chislo1 * chislo2;
} else if (znak === '/') {
	rezult = chislo1 / chislo2;
} else {
	rezult = "Хуй пойми что"
}
alert("Результат: " + rezult);