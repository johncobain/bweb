let d;

d = new Date();
// d = new Date(2020, 0,1, 12, 30, 12);
// d = new Date('2020-01-01 15:42:17');
// d = new Date(2022, 2);
// d = new Date(-9090909090909);
// console.log(d);
// console.log(d.toDateString());
// console.log(d.toUTCString());
// console.log(d.toString());

let res;

// res = d.getFullYear();
// res = d.getMonth();
// res = d.getDay();// dia da semana
// res = d.getDate();
// res = d.getHours();
// res = d.getMinutes();
// res = d.getSeconds();
// res = d.getMilliseconds();
// res = d.getTime();
// res = Date.now();
d.setFullYear(1452);
d.setMonth(11);
d.setDate(d.getDate() + 9);
d.setHours(d.getHours() + 23);

res = d;

console.log(res);