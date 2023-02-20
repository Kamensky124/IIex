let age: number = 10;
let firstName: string = 'Dimych';
let isMentor: boolean = true;

let ages: Array<number> = [18, 12, 19, 22, 45];
let ages2: number[] = [18, 12, 19, 22, 45,];

let array: Array<string | number | boolean> = ['ivan', 123, true, 4242,]
let ages3: (number | string)[] = ['ivan', 123, true, 4242,]

type manType = { name: string, height: number }

interface IMan {
    name: string,
    height: number
    surname?: string
}

let man1: { name: string, height: number } = {name: 'Dima', height: 1.78}
let man3: IMan = {name: 'Dima', height: 1.78, surname: 'Ivanov'}
let man2: manType = {name: 'Sasha', height: 1.8}
let car: ICar = {model: 'Reno Stepway', year: 2016}

// Создайте массив в котором будут сидеть 2 элемента man1 и man2 и явно типизируйте его.
// (man1 и man2 - объекты из 5 задания)
// <> - generic

let arrayMan: Array<manType> = [man2, man1]
debugger
console.log(arrayMan)

//if no return
function returnVoid(a: number, b: number): void {
    let c = a + b
    // return c
}

const sum = (a: number, b: number): void => {
    let c = a + b
    return c
}

function toUpperCase(strings: Array<string>): Array<string> {
    let result = strings.map(s => s.toUpperCase());
    return result;
}

let createMan = (name: string, height: number): manType => {
    return {
        name,
        height
    }
}

let createManByObj = (obj: manType): manType => {
    return obj
}

interface ICar {
    model: string,
    year: number
    on: boolean
    turnOn(): void
    rename: (model: string) => void
}

let car8: ICar = {
    model: 'Reno Stepway',
    year: 2016,
    on: false,
    turnOn() {
        this.on = true;
    },
    rename(model) {
        this.model = model;
    }
}

interface IGarage {
    addCar: (car: ICar) => void,
    logAllCarsNames: () => void,
    getAllCars: () => Array<ICar>
}

let createGarage = ():IGarage => {
    let _cars: Array<ICar> = [];

    return {
        addCar(car) {
            _cars.push(car);
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach(c => console.log(c.model));
        },
        getAllCars() {
            return _cars;
        }
    }
}