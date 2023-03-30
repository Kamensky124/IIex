export const sum = (salary: number, n: number) => salary + n

//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()
export const saytest = (YoStroke: string, repeatNumber: number, separator: string) => {
    const result = [];
    for (let i = 0; i < repeatNumber; i++) {
        result.push(YoStroke);
        console.log(result);
    }
    return result.join(separator)
}

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF
export const checkStroke = (stroke1: string, stroke2: string) => {
    return stroke2.toLowerCase() == stroke1.slice(0, 3).toLowerCase()
}

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
export const truncateString = (StrokeForTruncate: string, TruncateValue: number) => {
    return StrokeForTruncate.slice(0, TruncateValue) + "..."
}


//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()
export const getMinLengthWord = (Stroke: string) => {
    if (Stroke !== null) {
        const devideToArray = Stroke.split(" ");
        const getShort = devideToArray.reduce((acc, word) => acc.length < word.length ? acc : word);
        return getShort
    } else return null
}

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
export const setUpperCase = (value: string) => {

    const lowerString = value.toLowerCase();
    const strToArray = lowerString.split(" ");
    // debugger;
    const normArray = strToArray.map(w => w.charAt(0).toUpperCase() + w.slice(1));
    const finishedString = normArray.join(" ");
    return finishedString
}

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

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
export const isIncludes = (str1: string, str2: string) => {
    const charArray = str2.split("");
    const hasCharacters = charArray.every((c) =>
        str1.toLowerCase().includes(c.toLowerCase()))

    // .every(includes());
    console.log(hasCharacters);
    return hasCharacters
}




