const Background = document.querySelector(".header-background");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const menu = document.querySelector('.menu')
//Counter
const Data = [
    {
        background : "background-image/Outlast-trials.jpg",
        img: "images/the-outlast-trials.png",
        box_left: "Outlast:Whistleblower" ,
        box_right: "Outlast 2" ,
        image_left: "images/Whistleblower-230x100.jpg",
        image_right: "images/outlast2-O2-230x100.jpg"
    },
    {
        background: "background-image/chair-outlast.jpg",
        img: "images/Citation-O2.png" ,
        box_left: "The Outlast Trials" ,
        box_right: "Outlast",
        image_left: "images/trials.jpg",
        image_right: "images/Sewer.jpg"
    },
    {
        background: "background-image/Accueil-Outlast-1920x1080.jpg",
        img: "images/chris-walker.png" ,
        box_left: "Outlast 2" ,
        box_right: "Outlast:Whistleblower",
        image_left: "images/outlast2-O2-230x100.jpg",
        image_right: "images/Whistleblower-230x100.jpg"
    },
    {
        background: "background-image/Outlast_Whistleblower.jpg",
        img: "images/dark.png",
        box_left: "Outlast" ,
        box_right: "The Outlast Trials",
        image_left: "images/Sewer.jpg",
        image_right: "images/trials.jpg"
    }
];
let counter = 0;

const slider = (index) =>{
    let data = Data[index];
    const img = document.querySelector(".slider-img");
    img.src = data.img
    //Slider Box and image
    const leftbox = document.querySelector(".js-1")
    const rightbox = document.querySelector('.js-2')
    leftbox.textContent = data.box_left
    rightbox.textContent = data.box_right
    //image
    const leftimage = document.querySelector('.left-img');
    const rightimage = document.querySelector('.right-img')
    //img
    leftimage.src = data.image_left
    rightimage.src = data.image_right
    Background.style.backgroundImage = `url("${data.background}")`
}
slider(counter);
//auto
setInterval(() =>{
     if(counter == Data.length -1){
        counter = -1;
     }
     if(counter < Data.length -1){
        counter++
        slider(counter)
     }
}, 4000)
//manual
right.addEventListener('click' , () =>{
    if(counter == Data.length -1){
        counter = -1
    }
    if(counter <  Data.length -1){
        counter++
        slider(counter);
    } 
})
left.addEventListener('click' , () => {
    if(counter == 0){
        counter = Data.length;
    }
    if(counter !== 0){
        counter--;
        slider(counter)
    }
})
//Menu
menu.addEventListener('click' , ()=>{
    menu.classList.toggle('active-menu')
})