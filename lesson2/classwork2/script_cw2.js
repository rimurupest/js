// - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let numA = 157;
let numB = 55;
if (numA >= numB) {
    console.log(numA);
} else if (numB >= numB) {
    console.log(numB);
}

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
let apartNumb = 20;
if (apartNumb > 0 && apartNumb <= 20) {
    console.log("Перший під'їзд");
} else if (apartNumb > 20 && apartNumb <= 48) {
    console.log("Другий під'їзд");
} else if (apartNumb > 48 && apartNumb <= 90) {
    console.log("Третій під'їзд");
} else {
    console.log('error');
}

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО
let number = 12;
if (number === 10) {
    console.log('ВІРНО');
} else {
    console.log('НЕВІРНО');
}

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
let x = {};
if (typeof x === 'number') {
    console.log(1);
} else if (typeof x === 'string') {
    console.log(2);
} else if (typeof x === 'boolean' || 'object') {
    console.log(3);
} else {
    console.log('error');
}

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//  Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//  Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temperature = 9;
if (temperature >= 10 && temperature <= 22) {
    console.log('йдемо ВЧИТИСЯ');
} else {
    console.log('сидимо вдома і вчимося ОНЛАЙН');
}

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
let game = 6;
switch (game) {
    case 1:
        console.log('Авто');
        break;
    case 2:
        console.log('Мото');
        break;
    case 3:
        console.log('Квартира');
        break;
    case 4:
        console.log('Телефон');
        break;
    case 5:
        console.log('Телевізор');
        break;
    default:
        console.log('Число не вірне');
        break;
}
