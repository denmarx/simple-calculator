function add (a, b) {
	let sum = a + b ;
	return sum;
}

function subtract (a, b) {
	let diff = a - b;
	return diff;a
}

function sum (arr) {
	const add = (init, curr) => init + curr;
	return arr.reduce(add, 0);
}

function multiply (arr) {
	const add = (init, curr) => init * curr;
	return arr.reduce(add);
}

function power(a, b) {
	let result = a;
	for (let i = 1; i < b; i++) {
		result = result * a;
	}
	return result;t
}

function factorial(a) {
	let result = a;
	if (a === 0) {
		return 1;
	} else {
		for (i = (a-1); i > 0; i--) {
			result = result * i;
		}
		return result;
	} 
} 

function operate (a, b) {
  add(a, b);
}