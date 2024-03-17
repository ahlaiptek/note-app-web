const notesCointainer = document.querySelector(".notes-container");
const createButton = document.getElementById("create-button");

let notes = document.querySelectorAll(".input-box");

createButton.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "assets/delete.png";
    notesCointainer.appendChild(inputBox).appendChild(img);
});

notesCointainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
});