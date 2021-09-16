// open/clsoe video

const startVid = document.querySelector(".fa-play-circle");
const closeVid = document.querySelector(".fa-times");
const videoWrapper = document.querySelector(".video-wrapper");

startVid.addEventListener("click",()=>{
    videoWrapper.classList.add("open");
})

closeVid.addEventListener("click",()=>{
    videoWrapper.classList.remove("open");
    console.log("close")
})

// show/hide questions

const arrows = document.querySelectorAll(".arrow");


arrows.forEach(arrow => {
    const txt = arrow.parentElement.querySelector("p");
    arrow.addEventListener("click",()=>{
        txt.classList.toggle("show");
        arrow.classList.toggle("show");
    })
})

// carousel

const nextBtn = document.querySelector(".next-slide");
const prevBtn = document.querySelector(".prev-slide");


$(document).ready(function() {
    var slider = $('#lightSlider').lightSlider({
        slideMargin:4,
        slideWidth:450,
        loop:true,
        item:2,        
        responsive : [
            {
                breakpoint:1000,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:6,
                  }
            }
        ]
    });
    $("#prev-slide").click(function(){
        slider.goToPrevSlide(); 
    });
    $("#next-slide").click(function(){
        slider.goToNextSlide(); 
    });    
  });

// Nav color
const nav = document.querySelector("nav");
const header = document.querySelector("header");

window.onscroll=() => {
    if(header.scrollHeight <= (document.documentElement.scrollTop+nav.scrollHeight)){
        nav.classList.add("dark");
    }
    else {
        nav.classList.remove("dark");
    }

}

// Navbar

const openNav = document.querySelector(".fa-bars");
const closeNav = document.querySelector(".fa-times");
const respNav = nav.querySelector("ul");

openNav.addEventListener("click",()=>{
    respNav.classList.add("open");
})

closeNav.addEventListener("click",()=>{
    respNav.classList.remove("open")
})
