$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

const videos = document.querySelectorAll('video');

videos.forEach((video, inx) => {
    const playBtn = document.getElementById(`${ inx + 1 }`)
    video.addEventListener('mouseover', (e) => {
        video.play();
        playBtn.classList.add('hidden')
    })
    video.addEventListener('mouseout', (e) => {
        video.currentTime = 0;
        video.pause();
        playBtn.classList.remove('hidden')
    })
})