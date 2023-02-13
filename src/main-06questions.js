
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
        name: "Ann",
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

console.log(user === copyUser);
console.log(user.friends === copyUser.friends);

//2. Полная (глубокая) копия student

console.log(user === deepCopyStudent);
console.log(user.friends === deepCopyStudent.friends);

//3. Поверхностная копия students

console.log(students === copyStudents);
console.log(students[0] === copyStudents[0]);

//4*. Полная (глубокая) копия students

console.log(students === deepCopyStudents);
console.log(students[0] === deepCopyStudents[0]);
console.log(students);
console.log(deepCopyStudents);

//Далее все преобразования выполняем не модифицируя исходный массив students

//5. Отсортируйте студентов по успеваемости (лучший идёт первым)

console.log(sortedByScore);
//5a. Отсортируйте студентов по алфавиту

console.log(sortedByName);

//6. Сформируйте массив студентов, у которых 100 и более баллов

console.log(bestStudents);

//6a.Сформируйте массив из трёх лучших студентов

// console.log(topStudents);
// console.log(deepCopyStudents);

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки

console.log(newDeepCopyStudents);

//7. Сформируйте массив холостых студентов

console.log(notMarriedStudents);

//8. Сформируйте массив имён студентов

console.log(studentsNames);
//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом
// - запятой

console.log(nameWithSpace);

console.log(namesWithComma);

//9. Добавьте всем студентам свойство "isStudent" со значением true

console.log(trueStudents);

//10. Nick женился. Выполните преобразование массива students
// let studentsWithMarriedNick = students.map(st => st.name === "Nick" ? {...st, isMarried: true} : st);

console.log(studentsWithMarriedNick);

//11. Найдите Студентку по имени Ann

console.log(ann);
console.log(students);

//12. Найдите студента с самым высоким баллом


console.log(bestStudent);
//12a. Найдите 2 студента с самым высоким баллом


//13. Найдите сумму баллов всех студентов

console.log(scoresSum);

// 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив, при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.



console.log(addFriends(students));