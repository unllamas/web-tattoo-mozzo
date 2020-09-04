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
tl_menu.from('.logo', {
    y: 100,
    duration: .7,
    opacity: 0
}).from('.social-media a', {
    x: -100,
    duration: .8,
    opacity: 0
})

tl_header.from('.head img', {
    y: 50,
    duration: .5,
    opacity: 0,
    delay: .5
}).from('.head h1', {
    y: 60,
    duration: .7,
    opacity: 0
}).from('.head h2', {
    y: 70,
    duration: .9,
    opacity: 0
})



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

// $('.circle-text').circleType({radius: 800})
new CircleType(document.getElementById('circle-text'));