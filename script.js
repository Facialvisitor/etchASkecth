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
  


    