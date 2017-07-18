'use strict';
var znak = prompt("Ведите знак: +, -, *, /","+");
var chislo1 = prompt("введите первое число","20");
var chislo2 = prompt("введите второе число","60");
var rezult;
switch (znak){
	case "+":
		rezult = chislo1 + chislo2;
		break;
	case "-":
		rezult = chislo1 - chislo2;
		break;
	case "*":
		rezult = chislo1 * chislo2;
		break;
	case "/":
		rezult = chislo1 / chislo2;
		break;
	default:
		alert("Хуй пойми что");
		break;
}

/*if (znak === "+") {
	rezult = chislo1 + chislo2;
} else if (znak === '-') {
	rezult = chislo1 - chislo2;
} else if (znak === '*') {
	rezult = chislo1 * chislo2;
} else if (znak === '/') {
	rezult = chislo1 / chislo2;
} else {
	rezult = "Хуй пойми что"
}*/
alert("Результат: " + rezult);