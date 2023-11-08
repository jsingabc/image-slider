import { loadNext } from "./next"
import { loadPrevious } from "./previous"

//creates right and left buttons
let loadSlide = () => {
    console.log("test from slidBtn.js")
    let mainDiv = document.getElementById("content")
    let imageDiv = document.getElementById("imageDiv")
    let img1 = document.getElementById("img1")
    //mainDiv.appendChild(imageDiv)

    let nextBtn = document.createElement('button')
    nextBtn.setAttribute("id", "nextBtn")
    nextBtn.setAttribute("value", "Next")
    nextBtn.innerText = "Next"

    imageDiv.appendChild(nextBtn)

    let previousBtn = document.createElement('button')
    previousBtn.setAttribute("id", "previousBtn")
    previousBtn.setAttribute("value", "previous")
    previousBtn.innerText = "Previous"


    imageDiv.appendChild(previousBtn)
    imageDiv.insertBefore(previousBtn, img1)
    
    //functions that control buttons
    loadNext()
    loadPrevious()
}


export { loadSlide }