import img3 from "./image3.jpg"
import { loadHome } from "./home"
import { loadSlide } from "./slideBtn"

//load the nex button page listerner
let loadNext = () => {
    console.log("This is from load Next")
    let nextBtn = document.getElementById("nextBtn")
    nextBtn.addEventListener("click", next)
}

//functions loads img3, after clicked
let next = () => {
    console.log("Next Btn this works now")

    //create vars
    let imageDiv = document.getElementById("imageDiv")
    let nextBtn = document.getElementById("nextBtn")
    let preBtn = document.getElementById("previousBtn")
    imageDiv.innerText = "";

    //set img var to img3 with styling
    let imgSrc = document.createElement('img');
    imgSrc.setAttribute("id", "img3")
    imgSrc.style.width = '200px'
    imgSrc.style.height = '200px'
    imgSrc.src = img3;

    //add buttons and image to div holder
    imageDiv.appendChild(preBtn)
    imageDiv.appendChild(imgSrc)
    //imageDiv.appendChild(nextBtn)

    //get variables
    let nextRadio = document.getElementById('next')
    let homeRadio = document.getElementById('home')

    //control radio and selects next on this page uncheck home
    if (nextRadio.value === "Next"){
        homeRadio.checked = false;
        nextRadio.checked = true;
    }

    //setTimeout to 5sec ten back to homepage
    setTimeout(function() {
        let mainDiv = document.getElementById("content")
    mainDiv.innerText = ""

    let nextRadio = document.getElementById('next')
    nextRadio.checked = false

    loadHome()
    loadSlide()
      }, 5000);

      //controls a click event
    preBtn.addEventListener("click", previous)

}
//click function get back home page
let previous = () => {
    console.log(" This take me from previous to home ")

    let mainDiv = document.getElementById("content")
    mainDiv.innerText = ""

    let nextRadio = document.getElementById('next')
    nextRadio.checked = false

    loadHome()
    loadSlide()
}

export { loadNext }