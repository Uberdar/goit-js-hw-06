const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
    
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    if (mail === "") {
       return alert("Enter an email!");
    }
    const password = formElements.password.value;
    
    if (password === "") {
       return alert("Enter a password!");
    }
    const groupedDataObject = {
        mail,
        password,
    }
    
    console.log('groupedDataObject: ', groupedDataObject);
    formEl.reset();

}
