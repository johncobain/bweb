// type conversion
let y = Number('123');
console.log(y, typeof y);
y = Boolean(y);
console.log(y, typeof y);

// type coercion
let x;
console.log(x, typeof x);
x = 8;
console.log(x, typeof x);
x = x + '';
console.log(x, typeof x);
x = x - 2;
console.log(x, typeof x);
x = !!x;
console.log(x, typeof x);
x = '22';
console.log(x, typeof x);

x = +x +2; // unary operator
console.log(x, typeof x);

x =  String(x) + ' Johnny'; // type conversion
console.log(x, typeof x);

x = parseInt(x); // type conversion
console.log(x, typeof x);

console.log('-=-=-=-=-=-=-=-=-=-=-=-');
// unary operators

let z = 5;

z++;
console.log(z);
z--;
console.log(z);