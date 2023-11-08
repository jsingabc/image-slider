import img2 from "./image2.jpg"
import { loadSlide } from "./slideBtn"
import "./style.css"
import { loadHome } from "./home"

//btn event listener
let loadPrevious = () => {
    console.log("This is from load Previous")
    let preBtn = document.getElementById("previousBtn")
    preBtn.addEventListener("click", previous)
}

//function that loads divs and img to page
let previous = () => {
    console.log(" previous btn this works now")
    let imageDiv = document.getElementById("imageDiv")
    let nextBtn = document.getElementById("nextBtn")
    let preBtn = document.getElementById("previousBtn")
    imageDiv.innerText = "";
    
    //add img to var and add to imgDiv
    let imgSrc = document.createElement('img');
    imgSrc.setAttribute("id", "img2")
    imgSrc.style.width = '200px'
    imgSrc.style.height = '200px'
    imgSrc.src = img2;
    
    //imageDiv.appendChild(preBtn)
    imageDiv.appendChild(imgSrc)
    imageDiv.appendChild(nextBtn)

    //controls radio and sets to previous on this page
    let previousRadio = document.getElementById('previous')
    let homeRadio = document.getElementById('home')
    if (previousRadio.value === "Previous"){
        homeRadio.checked = false;
        previousRadio.checked = true;
    }

    //sets a 5sec timer to go back to home page
    setTimeout(function() {
        let mainDiv = document.getElementById("content")
    mainDiv.innerText = ""

    let preRadio = document.getElementById('previous')
    preRadio.checked = false

    loadHome()
    loadSlide()
      }, 5000);

    nextBtn.addEventListener("click", next)

}

//funct controls a click event
let next = () => {
    console.log("I am the prvevious page next btn")
    let mainDiv = document.getElementById("content")
    mainDiv.innerText = ""

    let previousRadio = document.getElementById('previous')
    previousRadio.checked = false

    loadHome()
    loadSlide()
}

export { loadPrevious }

