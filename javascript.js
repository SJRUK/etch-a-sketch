/*Etch-A-Sketch*/

const container1 = document.querySelector('.container1');


for (let i = 1; i < 257; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.cssText = "border: 1px solid black; height: 50px; width: 50px";  
    square.addEventListener("mouseover", changeColour);
    container1.appendChild(square);
  }
 const squares = document.getElementsByClassName("square");

  function changeColour() {
    squares.style.backgroundColor = "red";
  }

 squares.addEventListener("mouseover", changeColour);

