const luxy = require('./luxy.js')
const circleType = require('./circletype.min.js')

var cursor = $('.cursor'),
    follower = $('.cursorFollower'),
    positionX = 0,
    positionY = 0,
    mouseX = -40,
    mouseY = -40;

$(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
});

var tl_menu = gsap.timeline();
var tl_header = gsap.timeline();
window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded") 
    tl_menu.from('.logo', { y: 100, duration: .7, opacity: 0, delay: 1 }).from('.social-media a', { x: -100, duration: .8, opacity: 0 })
    tl_header.from('.head img', { y: 50, duration: .5, opacity: 0, delay: .5 }).from('.head h1', { y: 60, duration: .7, opacity: 0 }).from('.head h2', { y: 70, duration: .9, opacity: 0 })
});
var tl_about_me = gsap.timeline({
    scrollTrigger: {
        trigger: '#about-me',
        start: 'top center',
        end: 'bottom center',
        // markers: true
    }
});
var tl_portfolio = gsap.timeline({
    scrollTrigger: {
        trigger: '#portfolio',
        start: 'top center',
        end: 'bottom center',
        // markers: true
    }
});
var tl_contact_us = gsap.timeline({
    scrollTrigger: {
        trigger: '#contact-us',
        start: '-200px center',
        end: 'bottom center',
        // markers: true
    }
});

tl_about_me.from('.img-about-me', { y: 150, duration: .7, opacity: 0 }).from('.title-about-me', { y: 125, duration: .9, opacity: 0 }).from('.context-about-me p', { y: 100, duration: 1.1, opacity: 0 })
tl_portfolio
.from('.col-first', { y: 125, duration: 1.1, opacity: 0, delay: .5 }).from('.col-second', { y: 125,  duration: 1.3,  opacity: 0 }).from('.col-third', { y: 125, duration: 1.5, opacity: 0 })
tl_contact_us.from('#circle-text', { y: 100, duration: 1.3, opacity: 0 }).from('.text-contact-us h4', { y: 50, duration: .5, opacity: 0 }).from('.text-contact-us h5', { y: 75, duration: .7, opacity: 0 })

TweenMax.to({}, 0.016, {
repeat: -1,
onRepeat: function(){
    positionX += (mouseX - positionX) / 9;
    positionY += (mouseY - positionY) / 9;

    TweenMax.set(cursor, {
        css: {
            left: mouseX,
            top: mouseY
        }
    });

    TweenMax.set(follower, {
        css: {
            left: positionX - 11,
            top: positionY - 11
        }
    })
}
});

$('.hover').on('mouseenter', function(){
    cursor.addClass('active')
    follower.addClass('active')
})

$('.hover').on('mouseleave', function(){
    cursor.removeClass('active')
    follower.removeClass('active')
})

$('.hover-img').on('mouseenter', function(){
    cursor.addClass('active-img')
    follower.addClass('active-img')
})

$('.hover-img').on('mouseleave', function(){
    cursor.removeClass('active-img')
    follower.removeClass('active-img')
})


// $('.circle-text').circleType({radius: 800})
new circleType(document.getElementById('circle-text'));
// luxy.init();

const body = document.body,
scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
height = scrollWrap.getBoundingClientRect().height - 1,
speed = 0.04;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = scroll;

    callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();