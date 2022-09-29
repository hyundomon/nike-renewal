stopPhoneSlide();
newSlide ();
// eventSlide();

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

function newSlide() {
    const newSlideWrapper = document.querySelector(`.new-slide-wrapper`);
    const newSlideInnerContainer = document.querySelector(`.new-slide-inner-container`);
    const prevButton = document.querySelector(`.new-left-arrow`);
    const nextButton = document.querySelector(`.new-right-arrow`);

    let 이동거리 = 0;

    nextButton.addEventListener('click',() => {
        
        if(이동거리 === 200) {
            이동거리 = 0;
        } else {
            이동거리 = 이동거리 + 100;
        }
        newSlideInnerContainer.style.transform = `translateX(-${이동거리}vw)`
    });

    prevButton.addEventListener('click',() => {
        
        if(이동거리 === 0) {
            이동거리 = 200;
        } else {
            이동거리 = 이동거리 - 100;
        }
        newSlideInnerContainer.style.transform = `translateX(-${이동거리}vw)`
    });
}




























// function newSlide () {
//     const newSlideInnerContainer = document.querySelector(`.new-slide-inner-container`);

//     const prevButton = document.querySelector(`.new-left-arrow`);
//     const nextButton = document.querySelector(`new-right-arrow`);

//     let index = 0;

//     nextButton.addEventListener('click', () => {
//         if(index === 300) {
//             index = 0;
//         } else {
//             index = index + 100;
//         }
//         newSlideInnerContainer.style.transform = `translateX(-${index}vw)`
//     });

//     prevButton.addEventListener('click', () => {
//         if(index === 0) {
//             index = 300;
//         } else {
//             index = index - 100;
//         }
//         newSlideInnerContainer.style.transform = `translateX(-${index}vw)`
//     });
// }



// function eventSlide() {}
//     const eventSlideInnerContainer = document.querySelector(`event-slide-inner-container`);
//     const radioContainer = document.querySelector('.radio-container');
    
//     const cloneFirst = eventSlideInnerContainer.firstElementChild.cloneNode(true);
//     const cloneLast = eventSlideInnerContainer.lastElementChild.cloneNode(true);
//     const 슬라이드너비 = document.querySelector(`.event-slide-wrapper`).clientWidth;

//     for(let i = 0; eventSlideInnerContainer.childElementCount; i++) {
//         const radioButton = document.createElement('div');
//         radioButton.classList('radio');
//         radioContainer.appendChild(radioButton);

//         radioButton.addEventListener('click', ()=>{
//             index = i + 1;
//             moveSlide(true);
//             drowRadio();
//           });
    


//     radioContainer.firstElementChild.classList.add("selected");

//     eventSlideInnerContainer.insertBefore(cloneLast,eventSlideInnerContainer.firstChild);
//     eventSlideInnerContainer.appendChild(cloneFirst);

//     const slideContents = document.getElementsByClassName("slide-content");

//     let moveChecker = true;

//     let index = 1;
//       moveSlide(false);

//       nextButton.addEventListener("click", () => {
//         if (moveChecker) {
//           moveChecker = false;
//           index++;
//           moveSlide(true);

//           drowRadio();
//           setTimeout(() => {
//             moveChecker = true;
//             if (index === eventSlideInnerContainer.childElementCount - 1) {
//             //childElmentCount 프로퍼티에는 자식요소의 갯수 값이 들어있다
//               index = 1;
//               moveSlide(false);
//               } 
//             }, 1000);
//           }
//         });

// function moveSlide(transition) {
//         if(transition) {
//             eventSlideInnerContainer.style.transition = "1s";
//         } else{
//             eventSlideInnerContainer.style.transition = "0s";
//         }
    
//         eventSlideInnerContainer.style.transform = `translateY(-${index * 슬라이드너비}px)`;
// }
    
// function drowRadio() {
//             // 라디오버튼 색 초기화 하는것 밑에
//     for (let i = 0; i < radioContainer.childElementCount; i++) {
//         radioContainer.children[i].classList.remove("selected"); 
//     }
        
//     // index에 따라서 어떤 버튼에 빨간색상을 부여할지 정해주는 부분 밑에
//     if (index === eventSlideInnerContainer.childElementCount - 1) {
//         radioContainer.children[0].classList.add("selected");
//     }else if (index === 0) {
//         radioContainer.children[
//         eventSlideInnerContainer.childElementCount - 3
//         // 양쪽에 두개 합쳐서 5개라서 -3해줌
//         ].classList.add("selected");
//     } else {
//         radioContainer.children[index - 1].classList.add("selected");
//     }
// }
// }