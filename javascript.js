/*Etch-A-Sketch*/

const container1 = document.querySelector('.container1');
const button = document.querySelector('.button');

let gridSize = 0;

for (let i = 1; i < 257; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.style.cssText = "border: 1px solid black; height: 2fr; width: 2fr; background-color: white";  
  container1.appendChild(square);
}

function clearGrid(parent){
  while (parent.firstChild){
    parent.removeChild(parent.firstChild);
  }


}

/*Code to create grid based on User Input*/
button.addEventListener('click', function() {
  const userInput = prompt('Please select the number of squares per side (Between 2 and 100)');
  if (userInput > 1 && userInput <= 100){
  clearGrid(container1);  
  const gridSize = userInput * userInput;
  container1.setAttribute('style', `grid-template-columns: repeat(${userInput}, 2fr); grid-template-rows: repeat(${userInput}, 2fr);`);
  
  for (let i = 0; i < gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.cssText = "border: 1px solid black; height: 2fr; width: 2fr; background-color: white";  
    container1.appendChild(square);
  }
   const squares = document.getElementsByClassName("square");

 for (let i = 0; i<squares.length; i++) {
  squares[i].addEventListener("mouseover", changeColour);
}
 function changeColour(e) {
    e.target.style.backgroundColor = "black";
  }
  }
  else { alert("Please enter a number between 2 and 100!")}
});


 const squares = document.getElementsByClassName("square");

 for (let i = 0; i<squares.length; i++) {
  squares[i].addEventListener("mouseover", changeColour);
}
 function changeColour(e) {
    e.target.style.backgroundColor = "black";
  }

  
  
  function reloadPage()
  {
  location.reload();
  }
  
  const button1 = document.querySelector('.button1');
  button1.addEventListener('click', function() {
    reloadPage();
  })