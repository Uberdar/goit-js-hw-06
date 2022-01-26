function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
getRandomHexColor();
const spanEL = document.querySelector(".widget > p > span");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", callback);
function callback(){
  const getFuncValue = getRandomHexColor()
  spanEL.textContent = getFuncValue;
  document.body.style.backgroundColor = getFuncValue;

};


