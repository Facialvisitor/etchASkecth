let container = document.querySelector(".container")

newGrid(16)

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
            if (grid.style.backgroundColor === ""){
                grid.style.backgroundColor = randomRGB()
                grid.style.opacity = 0.1
            } else {
                let current = parseFloat(grid.style.opacity)
                if (current < 1){
                    grid.style.opacity = current + 0.1
                }
            }
        })
        container.appendChild(grid)
    }

}

function randomRGB(){
    let r = Math.floor(Math.random()* 256)
    let g = Math.floor(Math.random()* 256)
    let b = Math.floor(Math.random()* 256)
    return `rgb(${r}, ${g}, ${b})`
}
  


    