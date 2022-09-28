stopPhoneSlide();


function stopPhoneSlide() { 
    const slideBlock = document.querySelector(`.screen-block`);
    const screenWholeWrapper = document.querySelector(`.iphone-screen-whole-wrapper`);
    
    slideBlock.addEventListener('mouseover',() => {
        screenWholeWrapper.classList.add(`pause`)
    })

    slideBlock.addEventListener('mouseleave',() => {
       screenWholeWrapper.classList.remove(`pause`)
    })
}