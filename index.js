function test_btn () {
    document.location.assign ("https://www.apple.com/ru/")
}

function clearInput () {
    const input = document.querySelector("input");
    input.value = "";
}
let sayHi = () => alert ("Привет, Маша!");

function cangeColor() {
    let box = document.getElementById('box');
    box.style.backgroundColor = "red";
}