// popup form
document.getElementById("open-popup").addEventListener("click", () => {
    document.body.classList.add("active-popup")
})

document.querySelector(".close-btn").addEventListener("click", () => {
    document.body.classList.remove("active-popup")
})

// image changer function
function changeImage(image){
    let img = document.getElementById("bannerImage");
    img.setAttribute("src", image);
}

// boxes color changer function
let content = document.querySelector(".content");
let contentBoxes = document.querySelector(".content").querySelectorAll('*');
contentBoxes.forEach(contentBox => {
    contentBox.addEventListener('click' , () => {
        content.querySelector('.active').classList.remove('active');

        contentBox.classList.add('active');
    })
})

// owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dotsEach:1,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

