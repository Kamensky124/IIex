// mutation observer
const button = document.getElementById('mut_button')
const header = document.getElementById('mut_header')
let counter = 0
button.addEventListener('click', () => {
    counter += 1
    header.innerText = counter.toString()
})
const mutationObserver = new MutationObserver((mutations) => {
    console.log(mutations)
})
mutationObserver.observe(header, {
    subtree: true,
    attributeOldValue: true,
    childList: true
})