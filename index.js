const burger = document.querySelector('.burger')
const navmenu = document.querySelector('.nav_list')
const navbar = document.querySelector('#navbar')
const anchor = document.querySelectorAll('a')


burger.addEventListener('click', open);
function open(){
    navmenu.classList.toggle('show')
}
window.addEventListener('scroll',change);

function change(){
    let scrollvalue = window.scrollY
    if(scrollvalue > 600){
        navbar.classList.add('bgcolour')
        anchor.forEach(function(e){
            e.classList.add('fontchange')
        })
        burger.classList.add('colourchange')
    }else{
        navbar.classList.remove('bgcolour')
        anchor.forEach(function(e){
            e.classList.remove('fontchange')
        })
        burger.classList.remove('colourchange')
    }
}
// ------------------ Moving Circle ------------------------
const dot = document.querySelector('.circle')
document.addEventListener("mousemove",(e)=>{
    let x = e.pageX;
    let y =e.pageY;
    
    dot.style.top = y + "px";
    dot.style.left = x + "px";
    dot.style.display = "block";
})
document.addEventListener("mouseout",()=>{
    dot.style.display = "none";
})
// ----------------- Moving Circle End ---------------