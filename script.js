let container = document.getElementById("container");
let changeColorButton = document.getElementById("changeColor");
let addChildButton = document.getElementById("addChild");
let removeChildButton = document.getElementById("removeChild");


changeColorButton.addEventListener("click", function () {
  container.style.backgroundColor = getRandomColor();
});


addChildButton.addEventListener("click", function () {

  let child = document.createElement("div");
  child.classList.add("child");
  container.appendChild(child);
});


removeChildButton.addEventListener("click", function () {

  let children = container.getElementsByClassName("child");
  if (children.length > 0) {
    let lastChild = children[children.length - 1];

   
    container.removeChild(lastChild);
  }
});


function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 10)];
  }
  return color;
}
