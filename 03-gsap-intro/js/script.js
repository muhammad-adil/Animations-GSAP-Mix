gsap.to("#box1", {
    x:1000,
    y:200,
    duration:3,
    delay:1,
    backgroundColor: "blue",
    borderRadius: "50%"
})

gsap.to("#box2", {
    x:1000,
    y:-200,
    duration:3,
    delay:1
})

// gsap.from
gsap.from(".main-heading", {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: 50,
    color: "red",
    stagger: 0.5
    // stagger: -0.5, to run it backward
})

// Yoyo box
gsap.to("#yoyo-box", {
    x:1000,
    // y:-200,
    duration:3,
    delay:1,
    rotate:360,
    repeat:2, // -1 For infinite repeattition
    yoyo:true

})
// Timeline
var tl = gsap.timeline()

tl.from("h2", {
    y: -25,
    opacity: 0,
    duration: 1,
    delay: 0.5
})

tl.from("h4", {
    y: -25,
    opacity: 0,
    duration: 1,
    stagger: 0.3
})