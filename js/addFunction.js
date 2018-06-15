const addFunction = (buttonValue) => {
    let ul = document.getElementById("overview");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${buttonValue}`));
    ul.appendChild(li);
};

