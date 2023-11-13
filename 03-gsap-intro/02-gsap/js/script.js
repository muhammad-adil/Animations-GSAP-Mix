gsap.from("#sec-1 #box", {
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#sec-1 #box",
        acroller:"body",
        start:"top 70%"
    }
})

gsap.from("#sec-2 #box", {
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    x:-500,
    scrollTrigger:{
        trigger:"#sec-2 #box",
        acroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub: 2 // for smoothness // boolean "true" or "false" or 1 or 0 
    }
})


gsap.to("#sec-2-e h2", {
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#sec-2-e",
        scroller:"body",
        start:"top 0%",
        end:"top -175%",
        scrub: 2,
        pin:true,
        markers:true
    }
})

gsap.from("#sec-3 #box", {
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#sec-3 #box",
        acroller:"body",
        start:"top 20%",
        pin:"true"
    }
})
