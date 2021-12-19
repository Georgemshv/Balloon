const game = document.querySelector(".ul-list:nth-child(2) .li-a");
const outlast = document.querySelector(".ul-list-resp:nth-child(2) .li-a-resp")
const menu = document.querySelector('.menu')
game.addEventListener('click' , ()=>{
    const game_menu = document.querySelector(".games")
    game_menu.classList.toggle('none')
    game_menu.classList.toggle('d-blk');
    setTimeout(()=>{
        game_menu.classList.toggle("transform-85")
        const pd = document.querySelector('.pd')
        if(pd){
            pd.classList.toggle("padding-120")
        }
    }, 5)
})
outlast.addEventListener('click' , ()=>{
    const resp_cont = document.querySelector(".responsive-cont")
    resp_cont.classList.toggle("game-padding")

    const delta = document.querySelector(".delta")
    delta.classList.toggle('none')

    const outlastMenu = document.querySelector('.game-outlast');
    outlastMenu.classList.toggle("d-blk")

    document.querySelector('.back').addEventListener('click' , () =>{
        outlastMenu.classList.remove('d-blk')
        delta.classList.remove('none')

        resp_cont.classList.remove("game-padding")
    })
})
menu.addEventListener('click' , ()=>{
    menu.classList.toggle('active-menu')
    const gm = document.querySelector(".nav-menu")
    gm.classList.toggle('none')
    gm.classList.toggle("bg-clr")
})

if(document.body.getAttribute("class")){
    const down = document.querySelector('.download')
    const doc = document.querySelector(".download-container")
    const elements = document.querySelectorAll('.blur')
    const download = document.querySelectorAll(".outlast-clicker");
    const input = document.querySelector(".token");
    const submit_inp = document.querySelector(".token-click");

 const downloadClick = () =>{
    doc.classList.toggle('none')
    elements.forEach(items =>{
    items.classList.toggle('onclick-blur')
    })
    down.classList.add('none')
    document.body.classList.add("over-flow-hidden")
}
down.addEventListener('click' , ()=>{
    downloadClick();
    Token();
})
function Token(){
    submit_inp.addEventListener('click', ()=>{
        if(input.value == "50www5060"){
            download.forEach(torrent =>{
                torrent.classList.add('button-active')
                torrent.removeAttribute('disabled')
            })
            input.value = ''
            input.placeholder = 'Nice'
        }
        else{
            input.value = ''
            input.placeholder = 'შეიყვანეთ სწორად'
        }
    })
    Close()
}
function Close(){
    const close = document.querySelector(".cloose")
    close.addEventListener('click', function(){
        doc.classList.add("none")
        elements.forEach(items =>{
            items.classList.remove('onclick-blur')
        })
        download.forEach(list =>{
            if(list.getAttribute("disabled")){
                list.toggleAttribute('disabled')
            }
            else{
                list.setAttribute('disabled' , '')
            }
            list.classList.remove("button-active")
        })
        document.body.classList.remove('over-flow-hidden')
        down.classList.remove('none')
        input.value = ""
    })
};

}