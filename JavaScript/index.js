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
