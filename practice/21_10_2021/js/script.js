let str = '01';
str += 4;

let num = str / 7;

let age = '25';

let userName = 'Семен';

alert(`Добрый день, ${userName}. Ваш возраст - ${age},\n
Следующий день рождения юбилей?:) - ${!Boolean((Number(age) + 1) % 5)},\n 
Пол вашей жизни это - ${age / num} лет,\n
Через 5 лет вам будет ${+age + 5},\n
Четное ли вам число лет? - ${!Boolean(age % num)}`);