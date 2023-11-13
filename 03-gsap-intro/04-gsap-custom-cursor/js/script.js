var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", function(event){ // dets
    gsap.to(cursor, {
        x:event.x,
        y:event.y,
        duration:1.1,
        ease:"back.out"
    })
})
