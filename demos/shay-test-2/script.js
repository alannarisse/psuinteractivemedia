gsap.registerPlugin(ScrollTrigger);
//let tl = gsap.timeline();
// layers(#): background -> bird -> text (line 1, 2, 3, 4)

//gsap.set('.bird', {right:'1%', bottom:'5%', scale:0.6});
//gsap.set('.branch', {right:'1%', scale:0.7,bottom:'5%'})
gsap.set('.text', {autoAlpha:1})
gsap.set('.note', {opacity:1, left:0,top:-900})
gsap.set('body', {'margin-bottom':300})

ScrollTrigger.defaults({
  markers: true,
  scrub: true,
  snap: {
    snapTo: 1 /10,
    duration: 0.1,
    delay: 0.1,
  },
})


gsap.from('.bird', {
  scale: 0.4,
  y:-5,
  scrollTrigger: {
    id: 'bird', 
    trigger: '.bird',
    start:"top center",
    end: '+=4000',
    pin:true,
    //onLeave: () => gsap.set('.bird', {position:'sticky', top:0}),
    animation: tl,
  }
})

gsap.to('.branch', {
  x:"-260%",

  scrollTrigger: {
    id: 'branch',
    trigger: '.bird',
    start: "top 50%",
    end: "+=300px",
  }})



gsap.from('.note', {
  x: 150,
  opacity:0,
  scrollTrigger: {
    id: 'note',
    trigger: '.branch',
    start: "bottom 150px",
    end:"+=100",
     onLeave: () => gsap.set('.note', {position:'fixed', left:0, top:'5%'}),
  }
})

gsap.to('.note', {
  scale:1.1,
  left:'20%',
  scrollTrigger:{
    id: 'note-leave',
    trigger: '.bird',
    start: "top top",
    end: '+=200',
    onEnter: () => gsap.to('.branch', {x:'300%',duration:1,ease:'none'})
  }
}
)
