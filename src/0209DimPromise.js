// состояния
// promise._status='pending'|'resolved'|'rejected';
// методы
// promise.then(()=>{})
// promise.catch(()=>{})
// promise.finally()
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 2000);
}).then((result) => {
    alert(result);
    return result + 2;
}).then((result) => {
    throw new Error('FAILED HERE');
    alert(result);
    return result + 2;
}).then((result) => {
    alert(result);
    return result + 2;
}).catch((e) => {
    console.log('error: ', e)
});

