var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")

// Mouse Move effect
main.addEventListener("mousemove", function(event){ // dets
    gsap.to(cursor, {
        x:event.x,
        y:event.y,
        duration:1.1,
        ease:"back.out"
    })
})

// 
// 
// 
// 
// var tl = gsap.timeline();

// tl.from("nav h1, nav h4, nav button", {
//     opacity:0,
//     y:-30,
//     duration:1,
//     delay:0.3,
//     stagger:0.2
// });
// tl.from(".intro-left h1, .intro-left p",{
//     opacity:0,
//     x:-200,
//     duration:0.4
// },"-=0.3");
// tl.from(".intro-left button",{
//     opacity:0
// });
// tl.from(".intro-right img",{
//     opacity:0,
//     duration:0.5
// },"-=0.3")

// var tl2 = gsap.timeline({
//     scrollTrigger:{
//         trigger:".page2",
//         scroller:"body",
//         start:"top 40%",
//         end:"top -50%",
//         scrub:1
//     }
// });
// tl2.from(".services",{
//     opacity:0,
//     y:30,
//     duration:1,
// });
// tl2.from(".elem.white.left",{
//     opacity:0,
//     x:-300,
//     duration:2,
//     overflowX:"hidden"
// },"anim")
// tl2.from(".elem.black.right",{
//     opacity:0,
//     x:300,
//     duration:2,
//     overflowX:"hidden"
// },"anim")
// tl2.from(".elem.black.left",{
//     opacity:0,
//     x:-300,
//     duration:2,
//     overflowX:"hidden"
// },"anim2")
// tl2.from(".elem.white.right",{
//     opacity:0,
//     x:300,
//     duration:2,
//     overflowX:"hidden"
// },"anim2")

// var hover = document.querySelector("nav button");
// var zoom = document.querySelector(".intro-left button");
// var main = document.querySelector(".main");
// main.addEventListener("mousemove",(dets)=>{
//     gsap.to(".cursor",{
//         x:dets.x,
//         y:dets.y,
//         duration:0.3,
//         ease:"back.out"
//     })
// })
// hover.addEventListener("mouseenter",()=>{
//     gsap.to("nav button",{
//         backgroundColor:"black",
//         color:"white"
//     })
// })
// hover.addEventListener("mouseleave",()=>{
//     gsap.to("nav button",{
//         backgroundColor:"white",
//         color:"black"
//     })
// })
// zoom.addEventListener("mouseenter",()=>{
//     gsap.to(".intro-left button",{
//         scale:1.1
//     })
// })
// zoom.addEventListener("mouseleave",()=>{
//     gsap.to(".intro-left button",{
//         scale:1
//     })
// })