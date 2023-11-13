var mainNavBody = document.querySelector("#main-navbody")
var cursor = document.querySelector("#cursor")
// var cursorCircle = document.querySelector("#cursor-circle")
// var imageDiv = document.querySelector("#image")

var menuOpen = document.querySelector("#menu-open-i")
var menuClose = document.querySelector("#menu-close-i")

mainNavBody.addEventListener("mousemove", function(event){ // dets
    gsap.to(cursor, {
        x:event.x,
        y:event.y,
        duration:1.1,
        ease:"back.out"
    })
})

// gsap timeline
var tl = gsap.timeline()
tl.to("#full-side-nav", {
    right:0,
    duration:0.8,
})

tl.from("#full-side-nav h4", {
    x:150,
    duration:0.8,
    stagger:0.3,
    opacity:0,
})

tl.pause()

menuOpen.addEventListener("click", function (){
    tl.play()
})
menuClose.addEventListener("click", function (){
    tl.reverse()
})







// Circle Cursor with image 
// main.addEventListener("mousemove", function(event){ // dets
//     gsap.to(cursorCircle, {
//         x:event.x,
//         y:event.y,
//         duration:1.1,
//         ease:"back.out"
//     })
// })

// imageDiv.addEventListener("mouseenter", function(event){ // dets
//     cursorCircle.innerHTML = "View More"
//     gsap.to(cursorCircle, {
//         scale:4,
//         duration:1.1,
//         ease:"back.out",
//         backgroundColor:"#ffffff7c"
//     })
// })

// imageDiv.addEventListener("mouseleave", function(event){ // dets
//     gsap.to(cursorCircle, {
//         scale:1,
//         duration:1.1,
//         ease: "elastic.out(1,0.2)",
//         backgroundColor:"#fff"
//     })
// })

