// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {

    return nums.reduce((acc, cur) => acc + cur, 0)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10" равносторонний, equalitateral
//  - "01" равнобедренный, isosceles
//  - "11" обычный, scalene
//  - "00" не треугольник, not triangle
// if (side1 is equal to side2 AND side 2 is equal to side3) {equalitateral}
// if (side1 is equal to side2 AND side 2 doesn't equal to side3) {isosceles}
// if (side1 doesn't equal to side2 AND side2 doesn't equal to side 3 AND side 3 doesn't equal side 1) {scalene}

// КРИВО
// const sideA = (a + b);
// const sideB = (a + c);
// const sideC = (b + c);
// if (sideA == sideB && sideB == sideC) {
//     return '10' //  - "10" равносторонний, equalitateral
// }
// if (sideA == sideB && sideA != sideC) {
//     return '01' //  - "01" равнобедренный, isosceles
// }
// if (sideA != sideB && sideB == sideC) {
//     return '01' //  - "01" равнобедренный, isosceles
// }
// if (sideA != sideB != sideC != sideA) {
//     return '11' //  - "11" обычный, scalene}
// } else return '11' // - "00" не треугольник, not triangle

//
export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    let isTriangle = a + b > c && a + c > b && b + c > a;
    if (a === b && b === c && a === c) {
        return '10'
    } else if (isTriangle && (a === b || a === c || b === c)) {
        return '01'
    } else if (isTriangle) {
        return '11'
    } else if (!isTriangle) {
        return '00'
    }
    return ''
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    const arrayFromNumber = number.toString().split('')
    return arrayFromNumber.reduce((a, b) => a + Number(b), 0)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let [OddIndexSum, EvenIndexSum] = [0, 0]
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            EvenIndexSum = EvenIndexSum + arr[i]
        } else {
            OddIndexSum = OddIndexSum + arr[i]
        }
    }
    // В return стоит "заглушка", чтоб typescript не ругался
    return (EvenIndexSum > OddIndexSum) ? true : false
}


// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    const ArrayOfSquarePositiveIntegers = array.filter(e => e % 2 == 0 && e > 0).map(e => Math.pow(e, 2))
    return ArrayOfSquarePositiveIntegers
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    if (N > 0) {
        let sum = 0
        let ArrForSum = []
        for (let i = 0; i < N + 1; i++) {
            ArrForSum[i] = i
            sum = sum + i
        }
        return sum
    } else {
        return 0
    }
}


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amount: number): Array<number> {
    const atmBankNotesArr = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    if (amount <= 0) {
        return "Please enter an amount greater than zero"
    }
    let cashFromAtm = []
    let i = 0;
    while (amount > 0) {
        if (amount - atmBankNotesArr[i] >=0){
            amount -= atmBankNotesArr[i] //отнимаем от необходимой суммы тек.номинал
            cashFromAtm.push(atmBankNotesArr[i])
        } else {i++}
            }
    // for (let i = 0; i < atmBankNotesArr.length; i++) {
    //     let nominal = atmBankNotesArr[i];
    //     while (atmBankNotesArr[i] >= nominal) {
    //         amount -= nominal;
    //         cashSum = amount - nominal;
    //         if (cashSum <= nominal && cashSum > 0) {
    //             cashFromAtm.push(nominal);
    //         }
    //     }
    // }

    return cashFromAtm
}


const getMoney = (n) => {
    let total = []
    for (let i = 0; i < banknotes.length; i++) {
        while (total.reduce((a, b) => a + b, 0) <= n) {
            total.push(banknotes[i])
        }
        total.pop()
    }
    return total
}

function convertToRoman(n) {
    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let total = []
    for (let i = 0; i < nums.length; i++) {
        while (total.reduce((a, b) => a + b, 0) <= n) {
            total.push(nums[i])
        }
        total.pop()
    }
    return total
}


//FULL ATM

const atmBankNotes = {100: 5, 50: 3, 20: 20, 10: 5, 5: 1};

function getMoneyFormAtm(amount, atmBankNotes) {
    // Check amount greater than zero
    if (amount <= 0) {
        return "Please enter an amount greater than zero"
    }

    // Сonverting an object to an array with sorting
    const atmBankNotesArr = Object.entries(atmBankNotes).map(([nominal, num]) => [Number(nominal), num]).sort((a, b) => b[0] - a[0]);

    const result = [];
    debugger
    // Iteration of array bankNotes
    for (let i = 0; i < atmBankNotesArr.length; i++) {
        const [nominal, num] = atmBankNotesArr[i];
        let availableAmount = nominal * num;

        // Check available Amount, reducing the amount and write banknotes to the result
        while (availableAmount && amount >= nominal) {
            amount -= nominal;
            availableAmount -= nominal;
            result.push(nominal);
        }
    }

    // Check if not full amount was searched
    if (amount > 0) {
        return `Failed to issue this amount, try another`
    }

    return result
}


