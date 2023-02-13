
//для учебы deepcopy
let a = {
    name: 'andrey',
    students: ['asya', 'vanya'],
    classroom: {
        teacher: {
            name: 'kolya',
            age: 15
        }
    }
};
console.log(a);

// let b = a;
// b.name = "leha";//присваивание меняет и a
// console.log(a);
// console.log(a);

// копирование ВСЕГО РУЧКАМИ
let c = {
    ...a,
    students: [...a.students],
    classroom: {
        ...a.classroom,
        teacher: {...a.classroom.teacher}
    }
};

//поверхностная shallow copy всех примитивных значений без вложенных подобъектов
c.students.push('nathan');
c.name = "boris";
c.classroom.teacher.age = 25;

let e = [{name: 'D'},
    {name: 'M'}];
// без подобъектов
// let j = [...e];

//копирование ВСЕГО через map
// debugger;
let j = e.map((el) => {
    return {
        ...el,
        e: {...el.e}
    }
});
j[0].name = 'A'
console.log(e);
console.log(j);


// деструктурирующее присваивание
let arr = ["Ilya", "Kantor"];
// записывает firstName = arr[0]
// и surname = arr[1]
let [firstName, surname] = arr;
console.log([firstName, surname]);
// с методом split
let [firstName2, surname2] = "andrey kamen".split(" ");
console.log([firstName2, surname2]);

//Object.entries(obj) и map


// цикл по ключам и значениям
let user2 = {
    name: "John",
    age: 30
};
for (let [key, value] of Object.entries(user2)) {
    console.log(`${key}:${value}`); // name:John, затем age:30
};

// Map перебирает как пары [ключ, значение], что очень удобно для деструктурирования
let user = new Map();
user.set("name", "John");
user.set("age", "30");
for (let [key, value] of user) {
    console.log(`${key}:${value}`);// name:John, затем age:30
};

// c.students = [...a.students]; //копируем дополнительно один из подобъектов
// console.log(c.students === a.students);
// ; // меняет и в "a", так как это поверхностная
// console.log(c.students === a.students); //теперь неравны, то так придется для каждого подобъекта и подобъекта подобъекта...
//


const numbers = [1000, "+20", -50, 77, 9];

//по unicode таблице преобразуя в строки
console.log(numbers.sort());

//сравниваем входящие числа попарно
const compareFn = (a, b) => {
    return a > b ? 5 : -22
}
console.log(numbers.sort(compareFn));
// напрямую вставляем a-b (альтернатива)
console.log(numbers.sort((a, b) => a-b));
//по убыванию
console.log(numbers.sort((a, b) => b-a));
console.log(numbers.reverse())






const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "anyha",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: "Ann",
        age: 30,
        isMarried: false,
        scores: 105,
    },
];

const user = {
    name: "Bob",
    age: 23,
    isMarried: false,
    friends: ["Alex", "Nick", "John"],
};

//sort objects by string props case-sensitive
const compareObjByName = (a, b) => {
    // if (a.name > b.name) {
    //     return 1
    // } else {
    //     return -1
    // }
    return a.name > b.name ? 1 : -1
}
// console.log(students.sort(compareObjByName))

//case-insensitive
// console.log(students.sort((a, b) => a.name.localeCompare(b.name)));

//sort objects by numerical props
// debugger;
console.log(students.sort((a, b) => a.scores - b.scores));

//bubble sort
const numbers = [1000, 12, -50, 77, 9, 2];
// const numbers = [1, 2, 3, 0.5, 5, 6];

//sort check a-b is bigger or less than zero
let iterationCount = 0;
for (let j = 0; j < numbers.length - 1; j++) {
    let isSorted = true; //add conditional sort cycle
    for (let i = 0; i < numbers.length - 1 - j; i++) {
        if (numbers[i] > numbers[i + 1]) {
            isSorted = false;
            iterationCount = iterationCount + 1;
            // let temporary = numbers[i];
            // numbers[i] = numbers[i + 1];
            // numbers[i + 1] = temporary;

            //more modern
            [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]]
        }
    }
    if (isSorted) break
}
let a1, a2;
[a1, a2] = numbers;
console.log(a1, a2)

console.log(numbers)
console.log(iterationCount)

numbers.reduce