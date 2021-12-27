const keyboard = document.querySelector('.keyboard');
const btns = document.querySelectorAll('.keyboard-btn');
const homeBtn = document.querySelector('.home');
const skillBtn = document.querySelector('.skill');
const projectBtn = document.querySelector('.project');
const eduBtn = document.querySelector('.edu');
const contactBtn = document.querySelector('.contact');
const powerBtn = document.querySelector('.power-btn');

btns.forEach((btn) =>{
    btn.addEventListener('click', () =>{
        if(btn == homeBtn){
            console.log('home btn');
        } else if(btn == skillBtn){
            console.log('skill btn');
        } else if(btn == projectBtn){
            console.log('project btn');
        } else if(btn == eduBtn){
            console.log('edu btn');
        } else if(btn == contactBtn){
            console.log('contact btn');
        }

    });
});

function displayTxt(e) {
   
}
// if leave -> hide txt
function removeTxt(evt) {
    evt.currentTarget.querySelector( '.innerText' ).classList.add( '.hide' );
}

homeBtn.addEventListener('mouseover', (e) => {
    e.currentTarget.parentNode.querySelector( '.innerText' ).classList.remove( '.hide' );
});


powerBtn.addEventListener('click', (e) =>{
    console.log('Power on');
});


