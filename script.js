function homepage(){
    gsap.set(".mar" , {
        scale : 5
    })
    
    
    var tl = gsap.timeline({
        scrollTrigger : {
            trigger : ".home",
            start : "top top",
            end : "bottom bottom",
            scrub: 2,
        },
    });
    
    tl.to(".video" , {
        '--clip' : "0%",
        ease : Power2
    } , 'a')
    tl.to(".mar" , {
        scale : 1,
        ease : Power2
    }, 'a')
    tl.to(".left" , {
        xPercent : -10,
        stagger : 0.03,
        ease : Power2
    } , 'b')
    tl.to(".rgt" , {
        xPercent : 10,
        stagger : 0.03,
        ease : Power2
    } , 'b')
}
function realPage(){
    gsap.to(".slide",{
        scrollTrigger : {
            trigger: ".real",
            start : "top top",
            end : "bottom bottom",
            scrub: 1,
        },
        xPercent : -200,
        ease : Power4
    
    })
}

function teamAnimation(){
    document.querySelectorAll(".listelem")
.forEach(function(elem){
    elem.addEventListener("mousemove" , function(dets){
        
        gsap.to(this.querySelector(".picture") , {
            opacity : 1,
            ease : Power2,
            x : gsap.utils.mapRange(0 , window.innerWidth , -200 , 200 , dets.clientX),
            duration : 0.5
        })
    })
    elem.addEventListener("mouseleave" , function(dets){
        gsap.to(this.querySelector(".picture") , {
            opacity : 0,
            ease : Power2,
            duration : 0.5
        })
    })
})
}

function paraAnimation(){
    var clutter = "";
document.querySelector(".textpara").
textContent.split("")
.forEach(function(elem){
    if(elem === ' ') clutter += `<span>&nbsp</span>`
    clutter += `<span>${elem}</span>`
})

document.querySelector(".textpara").innerHTML = clutter;

gsap.set(".textpara span" , {
    opacity : 0.1
})
gsap.to(".textpara span" , {
    scrollTrigger : {
        trigger : ".para",
        start : "top 90%",
        end : "bottom 90%",
        scrub : 2
    },
    opacity : 1,
    stagger : 0.2
    
})
}

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

gsap.to(".capsule:nth-child(2)", {
    scrollTrigger : {
        trigger : ".capsules",
        strat : "top 70%",
        end : "bottom bottom",
        scrub : 1
    },
    y : 0,
    ease : Power4

})

document.querySelectorAll(".section").forEach(function(elem) {
    ScrollTrigger.create({
        trigger: elem,
        start: "top 50%",
        end: "bottom 50%",
        markers: true,
        onEnter: function() {
            document.body.setAttribute("theme", elem.dataset.color);
        },
        onEnterBack: function() {
            document.body.setAttribute("theme", elem.dataset.color);
        }
    });
});


loco();
homepage();
realPage();
teamAnimation();
paraAnimation();