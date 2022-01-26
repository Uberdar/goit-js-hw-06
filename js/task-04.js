let counterValue = 0;
const incBtn = document.querySelector("button[data-action=increment]");
const decBtn = document.querySelector("button[data-action=decrement]");
const number = document.querySelector("#value");

function onIncrementBtnPush(){
    counterValue +=1;
    number.textContent = counterValue;
}
function onDecrementBtnPush(){
    counterValue -=1;
    number.textContent = counterValue;
}
incBtn.addEventListener("click", onIncrementBtnPush);
decBtn.addEventListener("click",onDecrementBtnPush);