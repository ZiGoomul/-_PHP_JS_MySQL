/*function sum(a, b, c){
	var sum = a + b + c;
	return sum;
}console.log(sum(5, 10, 25));*/

var obj = {};
// var obj = new Object();

obj.height = 300;
obj.widht = "auto";
obj.margin = false;
obj.padding = undefined;

console.log(obj);

if ("height" in obj) {
	console.log(obj.widht)
}