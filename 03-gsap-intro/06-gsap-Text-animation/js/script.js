var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
// breakTheText function
function breakTheText(){
    var mainHeading = document.querySelector("#main h1")
    var mainHeadingText = mainHeading.textContent
    var splittedText = mainHeadingText.split("")
    var clutter = ""
    // 
    var halfText = Math.floor(splittedText.length/2)
    splittedText.forEach(function(e, i) {
        if (i < halfText) {        
            clutter += `<span class="first-name">${e}</span>`
        }
        else {        
            clutter += `<span class="last-name">${e}</span>`
        }        
    })

    mainHeading.innerHTML = clutter}

// breakTheText() function call
breakTheText()

// aniamtion of the text
gsap.from("#main h1 .first-name",{
    y:80,
    opacity:0,
    duration:0.8,
    delay:0.8,
    stagger:0.3
})
gsap.from("#main h1 .last-name",{
    y:80,
    opacity:0,
    duration:0.8,
    delay:0.7,
    stagger:-0.3
})

// 
main.addEventListener("mousemove", function(event){ // dets
    gsap.to(cursor, {
        x:event.x,
        y:event.y,
        duration:1.1,
        ease:"back.out"
    })
})
