const keyName = document.querySelector("#key > p");
const keyCode = document.querySelector("#keyCode > p");
const code = document.querySelector("#Code > p");

window.addEventListener("keydown", (e) => {
    keyName.innerText = `${e.key === " " ? "space" : e.key}`
    keyCode.innerText = `${e.keyCode}`
    code.innerText = `${e.code}`
})