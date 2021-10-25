console.log(`\nsemastep 25_10_2021 г. ex. 11\n\ngreat frontend marathon`)
let a1 = 5 > 4; // true
let a2 = "ананас" > "яблоко"; // false я больше а потому что unicode
let a3 = "2" > "12"; // true тоже самое сравниваются строки: 2 позже 1 значит строка больше
let a4 = undefined == null; // true при не строгом сравнении равны себе друг другу и больше никому
let a5 = undefined === null; // false разные типы сравнение строгое
let a6 = null == "\n0\n"; // false нулл равно только себе и undefined
let a7 = null === +"\n0\n"; // false тут еще и сравнение строгое

console.log(`проверка дз:\n
5 > 4 //${a1}\n
"ананас" > "яблоко" //${a2}\n
"2" > "12" //${a3}\n
undefined == null //${a4}\n
undefined === null //${a5}\n
null == "\\n0\\n" //${a6}\n
null === +"\\n0\\n" //${a7}\n
`);
// проверил дз, все верно :)
