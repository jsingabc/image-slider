import img1 from './image1.jpg';

//loads the home page and center image
let loadHome = () => {
    let main = document.getElementById('content')

    //create the div holding img and set green background
    let imageDiv = document.createElement('div')
    imageDiv.setAttribute("id", "imageDiv")
    imageDiv.style.width = '450px'
    imageDiv.style.height = '350px'
    imageDiv.style.backgroundColor = "green";
    main.appendChild(imageDiv)

    //add img to image div
    let imgSrc = document.createElement('img');
    imgSrc.setAttribute("id", "img1")
    imgSrc.style.width = '200px'
    imgSrc.style.height = '200px'
    imgSrc.src = img1;
    imageDiv.appendChild(imgSrc)

    //controls the radio button
    let homeRadio = document.getElementById('home')
    console.log(homeRadio.value)
    if (homeRadio.value === "Home"){
        homeRadio.checked = true;
    }
}

export { loadHome }