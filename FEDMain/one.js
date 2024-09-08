let t1 = gsap.timeline()

t1.to(".text-loader",{
    opacity:1,
    duration:0.07,
    stagger:{
        each:0.14,
        repeat:1,
        yoyo:true
    }
})
.to(".loader",{
    display:"n"
})
.to(".cntr-p",{
    onStart:function(){
        $(".cntr-p").scramble(2000, 50, "alphabet", true)
    }
},'scr')
.to(".cntr-p2",{
    onStart:function(){
        $(".cntr-p2").scramble(2000, 50, "alphabet", true)
    }
},'scr')
.to(".info",{
    onStart:function(){
        $(".info").scramble(2000, 50, "alphabet", true)
    }
},'scr')
.to(".contact",{
    onStart:function(){
        $(".contact").scramble(2000, 50, "alphabet", true)
    }
},'scr')
let t12 = gsap.timeline({
    scrollTrigger:{
        trigger:"#one",
        pin:true,
        start:"50% 50%",
        end:"150% 150%",
        scrub:true
    }
})

t12.to(".flex-p-content",{
    scale:"0.8"
})
.to("#one-text",{
    top:"50%"
})

gsap.timeline({
    scrollTrigger:{
        trigger:"#img-one",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true
    }
})
.to("#img-one",{
    backgroundSize:"50%"
})

gsap.timeline({
    scrollTrigger:{
        trigger:"#img-two",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true
    }
})
.to("#img-two",{
    backgroundSize:"50%"
})

gsap.timeline({
    scrollTrigger:{
        trigger:"#img-three",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true
    }
})
.to("#img-three",{
    backgroundSize:"50%"
})

gsap.timeline({
    scrollTrigger:{
        trigger:"#img-four",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true
    }
})
.to("#img-four",{
    backgroundSize:"50%"
})

gsap.timeline({
    scrollTrigger:{
        trigger:"#img-five",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true
    }
})
.to("#img-five",{
    backgroundSize:"50%"
})

gsap.timeline({
    scrollTrigger:{
        trigger:"#img-six",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true
    }
})
.to("#img-six",{
    backgroundSize:"50%"
})

gsap.timeline({
    scrollTrigger:{
        trigger:"#img-seven",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true
    }
})
.to("#img-seven",{
    backgroundSize:"50%"
})

gsap.timeline({
    scrollTrigger:{
        trigger:"#last",
        start:"0% 90%",
        end:"200% 90%",
        scrub:true
    }
})
.to(".flex-p-content",{
    scale:"1.2"
})

document.querySelector("#img-one").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#dfd2be"
})
document.querySelector("#img-one").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000"
})

document.querySelector("#img-two").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#1a354e"
})
document.querySelector("#img-two").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000"
})

document.querySelector("#img-three").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#b11215"
})
document.querySelector("#img-three").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000"
})

document.querySelector("#img-four").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#061529"
})
document.querySelector("#img-four").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000"
})

document.querySelector("#img-five").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#b05d22"
})
document.querySelector("#img-five").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000"
})

document.querySelector("#img-six").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#281069"
})
document.querySelector("#img-six").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000"
})

document.querySelector("#img-seven").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor="#333"
})
document.querySelector("#img-seven").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor="#000"
})