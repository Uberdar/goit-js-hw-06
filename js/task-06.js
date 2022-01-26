const inputRef = document.querySelector("#validation-input");
const givenLength = +inputRef.dataset.length;
inputRef.addEventListener("blur", ()=> {
    const currentLength = inputRef.value.length;
    if (currentLength === givenLength) {
        updateClass("valid","invalid");
    } else {
        updateClass("invalid","valid");
        }
});
function updateClass(argtoadd,argtodel){
    inputRef.classList.remove(argtodel);
    inputRef.classList.add(argtoadd);
}

// константа givenLength возвращает символ,
// а currentLength возвращает число 
// поэтому не строгое сравнение

// + всеравно что функция Number();