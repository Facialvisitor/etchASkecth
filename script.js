let container = document.querySelector(".container")

function createGrid() {
    for (let i = 0; i < 256; i++){
        let square = document.createElement("div")
        square.classList.add("square")

    square.addEventListener("mouseover", () =>{
    square.style.backgroundColor = "black"
})
    container.appendChild(square)
}
}

createGrid()

let buttonContainer = document.createElement("div")
container.before(buttonContainer)
buttonContainer.classList.add("button")

let button = document.createElement("button")
button.textContent = "NEW GRID"
buttonContainer.appendChild(button)

button.addEventListener("click", () => {
    let input = prompt("Enter new grid:", "")

    if (Number.isNaN(Number(input))) {
        alert("ERROR: input a number from 0 - 100")
    }  else if (input > 100){
        alert("ERROR: input a value less than 100")
    }  else{
    newGrid(input)
 }
})

function newGrid(input){
    container.innerHTML = ""

    let n = input;
    let squareSize = container.offsetWidth / n
   
    for (let i = 0; i < input * input; i++){
        let grid = document.createElement("div")
        grid.classList.add("grid")
        grid.style.width = `${squareSize}px`
        grid.style.height = `${squareSize}px`
    

        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "pink"
        })
        container.appendChild(grid)
    }

}
  


    