import {sum, saytest, checkStroke, truncateString, getMinLengthWord, setUpperCase, isIncludes} from "./main-07Str";

//пример Виктора
test("sum", () => {
    //data
    const salary: number = 800;
    const n: number = 200;
    //execute test code
    const result = sum (salary, n);
    //check result
    expect(result).toBe(1000)
})
//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()
test ("saytest", () => {
    const YoStroke: string = 'yo';
    const repeatNumber: number = 3;
    const separator: string = ' ';
    const result = saytest (YoStroke, repeatNumber, separator);
    expect (result).toBe("yo yo yo")
})
test ("saytest", () => {
    const YoStroke: string = 'yo';
    const repeatNumber: number = 3;
    const separator: string = ',';
    const result = saytest (YoStroke, repeatNumber, separator);
    expect (result).toBe("yo,yo,yo")
})
//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF
test ("checkStrokeTest", () => {
    expect (checkStroke ('Incubator','inc')).toBe(true);
    expect (checkStroke ('Incubator', 'yo')).toBe(false);
})
//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
test ("truncateStringTest", () => {
    const StrokeForTruncate: string = "Всем студентам инкубатора желаю удачи!";
    const TruncateValue: number = 10;
    const result = truncateString (StrokeForTruncate, TruncateValue);
    expect (result).toBe("Всем студе...")
})
//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()
test ("getMinLengthWordtest", ()=>{
    expect (getMinLengthWord("Всем студентам инкубатора желаю удачи!")).toBe("Всем");
    expect (getMinLengthWord("")).toBe("")
})
//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
test ("setUpperCaseTest", () => {
    expect (setUpperCase("всем стУдентам инкуБатора Желаю удачИ!")).toBe("Всем Студентам Инкубатора Желаю Удачи!")
})
//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

test ("isIncludesTest", ()=> {
    expect (isIncludes("Incubator", "Cut")).toBe(true);
    expect (isIncludes("Incubator", "table")).toBe(false);
    expect (isIncludes("Incubator", "inbba")).toBe(true);
    expect (isIncludes("Incubator", "inba")).toBe(true);
    expect (isIncludes("Incubator", "Incubatorrr")).toBe(true);
})
