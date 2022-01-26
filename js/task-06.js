const a = document.querySelector("#validation-input");
const givenLength = a.dataset.length;

a.addEventListener("blur", ()=> {
    const currentLength = document.querySelector('#validation-input').value.length;
    if (currentLength != givenLength) {
        a.classList.remove("valid")
        a.classList.add("invalid");
    } else {
            a.classList.remove("invalid");
            a.classList.add("valid");
        }
});

// константа givenLength возвращает символ,
// а currentLength возвращает число 
// поэтому не строгое сравнение