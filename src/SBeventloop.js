//EVENT LOOP SANDBOX
//SYNCHRONIZE CODE
const factorial = (n) => {
    if (n < 2) {
        return 1
    }
    return n * factorial(n - 1)
}
console.log(factorial(5))
// вызовет переполнение стека
// console.log (factorial(100000000))

const factorial2 = (n) => {
    let result = 1;
    for (let i = n; i > 1; i--) {
        result *= i
    }
    return result
}
console.log(factorial2(100000000))

//ASYNCHRONIZE CODE
function log(value) {
    console.log(value)
}

log('start');
setTimeout(() => {
    log('timeout')
}, 3000)
log('end')

//EVENTLOOP ORDER
log('1')
setTimeout(() => {
    log('setTimeout 1')
    Promise.resolve().then(() => {
        log('promise setTimeout')
    })
    queueMicrotask(() => {
        log('queueMicrotask setTimeout 1')
    })

    queueMicrotask(() => {
        log('queueMicrotask setTimeout 2')
    })

}, 0)

queueMicrotask(() => {
    log('queueMicrotask 1')
})

setTimeout(() => {
    log('setTimeout 2')
}, 0)

Promise.resolve().then(() => {
    log('promise 1')
})

queueMicrotask(() => {
    log('queueMicrotask 2')
})

Promise.resolve().then(() => {
    log('promise 2')
})
log('4')
