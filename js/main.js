/*
document.write('js say hi');
//ставит текст после script
*/
/*
//ставит информацию в консоль в console разработчик
console.log('js cay hi in console');
console.info('js cay hi in console');
console.error('js cay error in console');
console.warn('js cay warning in console');
*/
/*
var let const #%T%^.... не использовать, 1234..... не начинать переменную так, можно $ _ заглавные буквы
var устарел и его можно изменить где угодно
let современный можно поменять
const не меняется
*/
/*
//переменные не устанавливают строгую типизацию это на автомате
let num;
let words;
let bool;
num =  10;
words = "words";
bool = true;
console.log("Переменная num: " + num  + ".\n" + "Переменная words: " + words + ".\n" + "Переменная bool: " + bool + ".");
//строки можно свободно менять с 1-го типа данных на другой
let change = true;
console.log("change = " + change);
change = 20;
console.log("change = " + change);
//console.log("math = " + (num + - * / %  change));
console.log("math = " + (num +  change));
//даже текст можно в числе если нет букв + Math.max() есть и другие, это математические функции Math.PI Math.Const() и тд https://mathjs.org/
let numb = Number("12");
console.log("numb = " + Math.max(numb));
*/
/*
//при проверке есть разница сравнений
// ===
// 5 === 5             true (число === число)
// 5 === "5"           false (число !== строка)
// true === 1          false (boolean !== number)
// null === undefined  false
// ==
// 5 == "5"            true (строка "5" стала числом 5)
// true == 1           true (true стал 1)
// false == 0          true (false стал 0)
// null == undefined   true
// "" == false         true (пустая строка стала 0, false тоже 0)
// проверка || "ИЛИ", && "И" просто название переменной проверка на true на false можно !test2
let test = Number(60);
let test2 = true;
if (test === 60 && test2) {
    console.log('yep if = 60');
} else if (test < 60) {
    console.log('no if < 60');
} else if (test > 60) {
    console.log('hm if > 60')
} else {
    console.log('error')
}
*/
/*
//case также без изменений
let test = 5;

switch (test) {
    case 1:
        console.log("test = 1");
        break;
    case 2:
        console.log("test = 2");
        break;
    case 3:
        console.log("test = 3");
        break;
    case 4:
        console.log("test = 4");
        break;
    case 5:
        console.log("test = 5");
        break;
    default:
        console.log("default")
}
*/
/*
// var старая сейчас const добавлять можно перезаписывать нет let изменяемый, любые данные, arr.length длинна,
let arr = [5, true, "apple", 0.4, 0, -100];
arr[2] = "not-apple";
console.log(arr);
console.log(arr.length);
let matrix = [
    [1, 2, 3], ["a", "b", "c"], [true, false, false]
];
console.log(matrix);
*/
/*
// циклы простой бесконечный и 1-н раз сделает и потом проверит значения
for(let i = 0; i < 10; i += 1) {
    console.log(i);
}
let j = 100;
while (j > 0) {
    console.log(j);
    j -= 1;
}
// let onlyTrue = true;
// while (onlyTrue) {}
do {
    console.log(j)
    j++
} while (j <= 50)
let test3 = [["name1", true], ["name2", true], ["name3", false], ["name4", true], ["name5", false]]
for (let k = 0; k < test3.length; k++) {
    console.log("k=" + k);
    if (test3[k][0] === "name4") {
        console.log("test3[" + k + "][0] = name4")
        break;
    }
    if (test3[k][1] === true) {
        console.log(test3[k][0]);
    } else {
        console.log(test3[k][0] + " its false")
    }
}
*/
/*
// alert росто инфа с кнопкой ок, if просто показал что работает, prompt может быть любым типом данных, а также при отмене будет NULL, при нажатии ок с пустой строкой будет пустота(узнать ' ' или что там)
// isNaN() ф-я проверяет на Не число false ->[5, "5", true, false, null] true ->["word", undefined, NAN, "123asd"]
alert("это сработал alert();");

let got_confirm = confirm("это вопрос из confirm");
if (got_confirm === true) {
    console.log("получили из вопроса: " + got_confirm);
} else console.log("получили из вопроса: " + got_confirm);
// переменную got_prompt можем создавать прямо внутри если не используем глобально потом
let got_prompt;
while (true) {
    got_prompt = prompt("Вопрос prompt: ", "5");
    if (got_prompt === null) {
        console.log("Пользователь отменил ввод");
        break; // Выход
    } else if (got_prompt === "") {
        console.log("Пользователь ничего не ввёл, попробуйте снова");
    } else {
        let number = Number(got_prompt);
        if (!isNaN(number)) {
            console.log("Вы ввели число:", number);
            break;
        } else {
            console.log("Вы ввели текст:", got_prompt);
        }
    }
}

let person_name = null;
if(confirm("Начнем?")) {
    person_name = prompt("Введите ваше имя");
    alert("Привет " + person_name);
} else {
    alert("Вы нажали на отмену");
}
*/
/*
// function __() {} все также как и всегда
function get_info(name, age) {
    console.log("Сработала get_info\nЗдравствуйте " + name + "\nВы родились " + (2026-age) + " году");
}

while (true) {
    let name = prompt("Твое имя: ");

    if (name === null) {
        console.log("Вы отменили ввод");
        break;
    } else if (name.trim() === "") {
        console.log("Имя не может быть пустым");
        continue;
    }

    let ageInput = prompt("Сколько тебе лет: ");

    if (ageInput === null) {
        console.log("Вы отменили ввод");
        break;
    }

    let age = Number(ageInput);

    if (isNaN(age) || ageInput.trim() === "") {
        console.log("Вы ввели не число");
        continue;
    }

    get_info(name, age)
    break;
}
*/


