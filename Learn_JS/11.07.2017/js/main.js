'use strict';
// var i = 10;
/*while (i >= -5) {
	alert("i = " + i);
	i--
}*/
/*do {
	alert("i = " + i);
	i--;
} while (i >= -5);*/
/*for (var i = 10; i >= -5; i--) {
	alert("i = " + i)
	if (i <= 0) {
	alert("А вот и минусяки! " + i)	
		continue;
	}
}*/
var a = 10;
var b = 5;
function summ(c, d ) {
	var r; 
	r = c + d;
	r = d - c;
	return r;
}
var result = summ(a, b);
alert(result);
