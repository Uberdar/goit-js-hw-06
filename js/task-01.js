(function task1() {
    const categoryNumber = document.querySelectorAll("li.item");
    console.log("Number of categories:",categoryNumber.length);
    categoryNumber.forEach(element => {
    console.log("Category:",element.firstElementChild.textContent)
    console.log("Elements",element.querySelectorAll("li").length)
    });
})();
