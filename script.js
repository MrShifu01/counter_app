// Not so good way
/*
const count = document.querySelector(".count")
const add = document.querySelector(".add")
const resetCount = document.querySelector(".reset")
const sub = document.querySelector(".subtract")
//const name = document.querySelector(".count")

add.addEventListener("click", () => {
    count.innerHTML++
})

sub.addEventListener("click", () => {
    count.innerHTML--
})

resetCount.addEventListener("click", () => {
    count.innerHTML = 0
})
*/

// Better Way

const count = document.querySelector(".count")
const buttons = document.querySelector(".buttons")

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        count.innerHTML++
        setColor()
    }
    if (e.target.classList.contains("reset")) {
        count.innerHTML = 0
        setColor()
    }
    if (e.target.classList.contains("subtract")) {
        count.innerHTML--
        setColor()
    }
})

function setColor() {
    if (count.innerHTML > 0) {
        count.style.color ="red"
    } else if (count.innerHTML < 0) {
        count.style.color ="black"
    } else {
        count.style.color ="white"
    }
}