var initialPath = `M 10 100 Q 550 100 1180 100`;
var finalPath = `M 10 100 Q 550 100 1180 100`;

var string = document.querySelector("#string")

string.addEventListener("mousemove", function(dets){ // dets
    initialPath = `M 10 100 Q ${dets.x} ${dets.y} 1180 100`
    // console.log("Moved", dets);
    gsap.to("svg path",{
        attr: {d:initialPath},
        duration:0.3,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
        attr: {d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})
