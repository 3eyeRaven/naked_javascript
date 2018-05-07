// Block scoping with let and const
//

/*var price = 10;

if (price) {
	price = 12;
	console.log(price); // 12
}

console.log(price);
*/

let price = 42;
{
	let price = 1000;
}

console.log(price)
