//closure

const print = (name) => {
    console.log('hello ' + name)
}

const createPrint = (name) => {
    return () => print(name)
}

setTimeout(createPrint('max'), 2000)
setTimeout(createPrint('lisa'), 1000)

const sum = (a) => (b) => (c) => (d) => (e) => console.log(a + b + c + d + e)
sum(1)(2)(3)(4)(5)

function outFunc(x) {
    return function innerFunc(y) {
        return x+y
    }
}
const add5=outFunc(5)
console.log(add5(3))

// counter with closure
let i=0
const increment2 = () => {
    i++
}
const getValue = () => {
    return i
}
// counter with closure
let a=0
const createCounter = () => {
    const counter = {
        increment() {a++},
        getCounter() {return a}
    }
    return counter
}
const counter1 = createCounter()
const counter2 = createCounter()
counter1.increment()
counter1.increment()
counter2.increment()
console.log(counter2.getCounter())