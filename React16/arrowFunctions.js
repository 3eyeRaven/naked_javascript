// A normal function looks like
/*function myName() {
	...
}
myName();

// An Arrow Funtion looks loke below:
const myFunc = () => {
	...
}
*/
// Another example of a normal function, see below
function printmyName(name) {
	console.log(name)
}
printmyName("Tank");

// Another example of Arrow Functions, see below
const printherName = (name) => {
	console.log(name);
}
printherName("Destiny");

const printreligionName = () => {
	console.log("Buddha");
}
printreligionName();

const myName = (name, age) => {
	console.log(name, age);
}
myName("Keanu Reeves", 44);

// Using arrow Funciton to return multiplication, see below
const multiply = (number) => {
	return number * 2;
}
console.log(multiply(3));

const division = number => number / 3;
console.log(division(3));
