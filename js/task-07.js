const a = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.style.fontSize = `${a.value}px`;

a.addEventListener("input", ()=>{
    textEl.style.fontSize = `${a.value}px`;
});
