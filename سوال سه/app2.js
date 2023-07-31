const form = document.querySelector('.form');
console.log(form)

eventListener();

function eventListener() {
    form.addEventListener('submit', getFrom)
}
let arrList = []

function getFrom(e) {
    e.preventDefault()

    const listData = Object.fromEntries(new FormData(form).entries())

    arrList.push(listData)

    console.log(arrList)
    form.reset()
}