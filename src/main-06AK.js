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
        name: "Nick",
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
        name: "ann",
        age: 20,
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


//1. Поверхностная копия student
const copyUser = {...user}
console.log(user === copyUser);
console.log(user.friends === copyUser.friends);

//2. Полная (глубокая) копия student
const deepCopyStudent = {...user, friends: {...user.friends}}
console.log(user === deepCopyStudent);
console.log(user.friends === deepCopyStudent.friends);

//3. Поверхностная копия students
const copyStudents = {...students}
console.log(students === copyStudents);
console.log(students[0] === copyStudents[0]);

//4*. Полная (глубокая) копия students
const deepCopyStudents = students.map(st => st = {...st})
console.log(students === deepCopyStudents);
console.log(students[0] === deepCopyStudents[0]);
console.log(students);
console.log(deepCopyStudents);

//Далее все преобразования выполняем не модифицируя исходный массив students

//5. Отсортируйте студентов по успеваемости (лучший идёт первым)

const sortedByScore = deepCopyStudents.sort((a, b) => a.scores > b.scores ? -1 : 1);
console.log(sortedByScore);

//5a. Отсортируйте студентов по алфавиту
// let [a, b] = [2, 1]
const Acompare = (a, b) => {
    return (a > b) ? 1 : -1
};
// console.log(Acompare(a,b));
// const sortedByName = deepCopyStudents.sort((a, b) => Acompare(a.name,b.name));
const sortedByName = deepCopyStudents.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName);

// const locTry1="asdfasdfsaf";
// const locTry2="asdfasdfsaf";
// console.log(locTry1.localeCompare(locTry2));

//6. Сформируйте массив студентов, у которых 100 и более баллов
const bestStudents = deepCopyStudents.filter(st => st.scores >= 100);

console.log(bestStudents);

//6a.Сформируйте массив из трёх лучших студентов
const topStudents = bestStudents.slice(0, 3);

console.log(topStudents);
console.log(deepCopyStudents);

console.log(students === deepCopyStudents);
console.log(students[0] === deepCopyStudents[0]);

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки
const newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
console.log(newDeepCopyStudents);

//7. Сформируйте массив холостых студентов
const notMarriedStudents = [...deepCopyStudents.filter(st => st.isMarried == false)];
console.log(notMarriedStudents);
// notMarriedStudents = deepCopyStudents.map(st=>st.isMarried=false));
// console.log(notMarriedStudents);

//8. Сформируйте массив имён студентов
const studentsNames = deepCopyStudents.map(st => st.name);
console.log(studentsNames);
//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом
const studentsNamesSpace = studentsNames.join(' ');
console.log(studentsNamesSpace);
// - запятой
const studentsNamesComma = studentsNames.join(",");
console.log(studentsNamesComma);

//9. Добавьте всем студентам свойство "isStudent" со значением true
const trueStudents = deepCopyStudents.map(st => ({...st, isStudent: "true"}));
console.log(trueStudents);

//10. Nick женился. Выполните преобразование массива students
const studentsWithMarriedNick = deepCopyStudents
    .map(st => st.name === "Nick" ? {...st, isMarried: true} : st = {...st});
console.log(studentsWithMarriedNick);

//11. Найдите Студентку по имени Ann
const ann = deepCopyStudents.find(st => st.name === "ann")
console.log(ann);
console.log(students);

//12. Найдите студента с самым высоким баллом
const bestStudent = deepCopyStudents.reduce((acc, cur) => {
    console.log(acc, cur)
    return (acc.scores > cur.scores ? (acc) : (cur))
})
console.log(bestStudent);

//12a. Найдите 2 студента с самым высоким баллом

let [best1, best2] = [students[0], students[0]]
console.log([best1, best2]);

for (let i = 0; i < students.length; i++) {
    students[i].scores > best1.scores ?
        best1 = students[i]
        : students[i].scores > best2.scores ?
            best2 = students[i] : 0
}
console.log([best1, best2]);

const AbestStudent = deepCopyStudents.findIndex(st => st.scores == 120)
console.log(AbestStudent); //лажа, как определить индекс находимого элемента массива внутри reduce?

//про итерации в методе map
// const list = [ 'h', 'e', 'l', 'l', 'o'];
// list.map((currElement, index) => {
//     console.log("The current iteration is: " + index);
//     console.log("The current element is: " + currElement);
//     return currElement; //equivalent to list[index]
// });

// const map = array.map((x, index) => {
//     console.log(index);
//     return x + index;
// });


//13. Найдите сумму баллов всех студентов
const scoresSum = deepCopyStudents.reduce((acc, cur) => acc + cur.scores, 0)
console.log(scoresSum);

// 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив, при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

const addFriends = (students) => {

    return students
        .map(s => {//текущий итерируемый студент
            const names = students.map(stMap => stMap.name); //собрали все имена
            const filterednames = names.filter(stFil => {
                // debugger
                return stFil !== s.name});//все имена кроме итерируемого
            return {...s, friends: filterednames}
        })
}
console.log(addFriends(deepCopyStudents));


const names = studs.map(st => st.name);
// const names2 = names.map(n=>n!=='Nick'?n:undefined)
const names2 = names.map(n => {
    if (n !== 'Nick') {
        return n
    }
}) //=>undefined
// как ничего не делать при else в тернарном?
console.log(names2)
