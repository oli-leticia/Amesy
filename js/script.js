/*var swiper = new Swiper(".slide-content", {

    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dymanicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
 
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    }
});*/

const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");


function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}

function closeImg(){
    fulImgBox.style.display = "none";
}

