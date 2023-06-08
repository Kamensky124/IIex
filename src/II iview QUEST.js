
// Какого falsy-значения не хватает в массиве НЕПОНЯТНО
arr = [false, null, NaN, undefined, 0])


console.log(null + undefined)
// При выполнении сложения null преобразуется в число 0, а при матматических операциях с одним из операндов undefined получится NaN (в случае со сложением undefined со строкой будет конкатенация).

//str to number
let str = '2'
str2 = '2' - '2'
console.log(typeof str2)
str3 = '2' + 2
console.log(typeof str3)
str4 = Number(str)
console.log(typeof str4)
str5 = '2' + '2'
console.log(typeof ('2' + '2'))
// why a++ not work
// Although the increment (++) operator is used, it is used as a post-increment operator, which means that the value of 'a' will be incremented after it has been logged to the console. Therefore, the initial value of 100 will be logged.
let a = 100
console.log(++a)

//array modern -1
arr = [1,2,3]
console.log(arr.at(-1))
console.log(arr[arr.length - 1])


// Динамическая область видимости (Dynamic Scope) в JavaScript - это механизм, при котором область видимости переменной определяется не местом ее объявления, а местом ее вызова.
//
//     В JavaScript, область видимости определяется лексически: если переменная объявлена внутри функции, то она видна только в этой функции и внутри ее вложенных функций. Однако, при использовании динамической области видимости, при вызове функции переменные могут быть доступны вне функции, если они были определены в родительской функции.
//
//     Например, если переменная была определена внутри функции А, а затем вызвана функция Б, которая использует эту переменную, то переменная будет доступна внутри функции Б, несмотря на то, что она не была объявлена внутри функции Б.
//
//     Пример:
//
//
// function A() {
//     var x = 1;
//     function B() {
//         console.log(x); // 1
//     }
//     B();
// }
//
// A();
//
// Copy code
//
//
// Функция B может "видеть" переменную x, объявленную в функции A, потому что функция B была вызвана из функции A, где переменная x была определена.
//
//     Динамическая область видимости в JavaScript используется очень редко и может привести к легко ошибкам в программе. Поэтому, лексическая область видимости - более безопасный и предпочтительный подход.

// Блок if создал область видимости для переменной city и она доступна только внутри этой области.
if (true) {
    let city = 'Minsk'
}
// ReferenceError: city is not defined
// console.log(city)

