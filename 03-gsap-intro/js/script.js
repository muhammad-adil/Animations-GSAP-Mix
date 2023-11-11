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
})
