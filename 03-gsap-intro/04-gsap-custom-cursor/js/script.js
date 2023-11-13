var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var cursorCircle = document.querySelector("#cursor-circle")
var imageDiv = document.querySelector("#image")


// important for index.html to uncomment htis code
// main.addEventListener("mousemove", function(event){ // dets
//     gsap.to(cursor, {
//         x:event.x,
//         y:event.y,
//         duration:1.1,
//         ease:"back.out"
//     })
// })

// Circle Cursor with image 
main.addEventListener("mousemove", function(event){ // dets
    gsap.to(cursorCircle, {
        x:event.x,
        y:event.y,
        duration:1.1,
        ease:"back.out"
    })
})

imageDiv.addEventListener("mouseenter", function(event){ // dets
    cursorCircle.innerHTML = "View More"
    gsap.to(cursorCircle, {
        scale:4,
        duration:1.1,
        ease:"back.out",
        backgroundColor:"#ffffff7c"
    })
})

imageDiv.addEventListener("mouseleave", function(event){ // dets
    gsap.to(cursorCircle, {
        scale:1,
        duration:1.1,
        ease: "elastic.out(1,0.2)",
        backgroundColor:"#fff"
    })
})
