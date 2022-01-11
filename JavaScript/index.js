const pageSection1 = document.querySelector(".page-container");
const pageSection2 = document.querySelector(".main-page2");
const pageSection3 = document.querySelector(".main-page3");
const pageSection4 = document.querySelector(".main-page4");
const pageSection5 = document.querySelector(".main-page5");
const mobile_home = document.getElementById("mob-home");
const mobile_games = document.getElementById("mob-games")
const mobile_comics = document.getElementById("mob-comics")
const navigation = document.getElementById('nav-menu');
const mob_box = document.getElementById("mob-game-outlast");



const menu = document.getElementById("menu");

const page = document.getElementById("outlast");
const page2 = document.getElementById("outlast-2");
const page3 = document.getElementById("outlast-trials");
const page4 = document.getElementById("home");
const page5 = document.getElementById("comics");



//mobile menu

const mobileBar = document.querySelector(".back")
const delta = document.querySelector(".delta");

const mob_outlast = document.getElementById("mob-outlast-1")
const mob_outlast2 = document.getElementById("mob-outlast-two")
const mob_ot = document.getElementById("mob-outlast-t")



const variability = () =>{
    const whiteNav = document.getElementById("games");

    whiteNav.addEventListener("click" , () =>{
        const whiteblock = document.getElementById("white-box");
        whiteblock.classList.toggle("none");
        document.querySelector("header").classList.toggle("header-on-click")
        setTimeout(() => {
            whiteblock.classList.toggle("transform-85")
        }, 10);
})

}
variability();

const classListDOM = () =>{
    pageSection5.classList.add('none')
}
const classListDOM2 = () =>{
    pageSection4.classList.add("none");
}

const dom1 = () =>{
    pageSection1.classList.add("none");
    pageSection3.classList.add("none");
    classListDOM2();
    classListDOM()
    pageSection2.classList.remove("none")
    window.scrollTo(0 , 0)
}
const dom2 = () =>{
    pageSection1.classList.add("none");
        pageSection3.classList.remove("none");
        classListDOM2();
        pageSection2.classList.add("none")
        classListDOM()
        window.scrollTo(0 , 0)
}

const dom3 = () =>{
    pageSection1.classList.add("none");
    pageSection3.classList.add("none");
    classListDOM()
    pageSection4.classList.remove("none")
    pageSection2.classList.add("none")
    window.scrollTo(0 , 0)
}
const dom4 = () =>{
    pageSection1.classList.remove("none");
        pageSection3.classList.add("none");
        classListDOM2();
        pageSection2.classList.add("none")
        classListDOM();
        window.scrollTo(0 , 0)
}

const dom5 = () =>{
    pageSection1.classList.add("none");
    pageSection3.classList.add("none");
    pageSection4.classList.add("none")
    pageSection2.classList.add("none")
    pageSection5.classList.remove('none')
    window.scrollTo(0 , 0)
}

page.addEventListener('click', dom1);
page2.addEventListener('click' , dom2);
page3.addEventListener("click" , dom3);
page4.addEventListener('click' , dom4);
page5.addEventListener("click" , dom5)

function mobile () {
    navigation.classList.toggle("none")
    menu.classList.toggle("active-menu")
}
menu.addEventListener('click' , () =>{
    mobile()
})

mobile_home.addEventListener('click' , () =>{
    mobile()
    dom4()
})
mobile_games.addEventListener("click" , () =>{
    mob_box.classList.add("d-blk")
    delta.classList.add("none")
})
mobileBar.addEventListener("click" , () =>{
    mob_box.classList.remove("d-blk")
    delta.classList.remove("none")
})

mob_outlast.addEventListener('click' , () =>{
    mobile()
    delta.classList.remove('none')
    mob_box.classList.remove("d-blk")
    dom1()
})
mob_outlast2.addEventListener("click" , () =>{
    mobile()
    delta.classList.remove('none')
    mob_box.classList.remove("d-blk")
    dom2()
})
mob_ot.addEventListener('click' , () =>{
    mobile()
    delta.classList.remove('none')
    mob_box.classList.remove("d-blk")
    dom3()
})
mobile_comics.addEventListener('click' , () =>{
    mobile()
    dom5()
})