gsap.to(".nav",{
    backgroundColor:"black",
   duration:1,
    height:"130px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        start:"top -20%",
        scrub:2,
    }
})
gsap.to(".main",{
    duration:1,
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        scrub:2,
        start:"top -30%",
     end:"top -100%",
        
    }
})
let cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",function(e){

cursor.style.left=`${e.x-8}px`;
cursor.style.top=`${e.y-7}px`;
})
document.addEventListener("mousemove",function(e){
    document.querySelector(".cursor-blr").style.transform=`translate(${e.x-200}px,${e.y-180}px)`;
    
})

document.querySelectorAll(".nav h4").forEach(function(e){
    e.addEventListener("mouseenter",function(){
        cursor.style.scale=3;
        cursor.style.border="1px solid gray";
        cursor.style.backgroundColor="transparent";
    })
})
document.querySelectorAll(".nav h4").forEach(function(e){
    e.addEventListener("mouseleave",function(){
        cursor.style.scale=1;
        cursor.style.border="0px  rgb(149, 255, 0);";
        cursor.style.backgroundColor="#95c11e";
    })
})
gsap.from(".about",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:".about",
        scroller:"body",
        scrub:2,
        start:"top 60%",
        end:"top 58%"
    }
})
gsap.from(".cards",{
    scale:0.8,
    y:50,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:".about",
        scroller:"body",
        scrub:2,
        start:"top 60%",
        end:"top 58%"
    }
})
gsap.from(".colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:".colon1",scroller:"body",
        start:"top 45%",
        end:"start 35%",
        scrub:4,
    }
})
gsap.from(".colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:".colon1",scroller:"body",
        start:"top 45%",
        end:"start 35%",
        scrub:4,
    }
})
gsap.to(".what",{
    y:-100,
    scrollTrigger:{
        trigger:".what",
        scroller:"body",
        start:"top 74%",
        end:"top 70%",
        scrub:3,
    }
})