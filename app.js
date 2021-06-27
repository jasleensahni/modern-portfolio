const themeBtn1 = document.querySelector('#themeBtn1')
const themeBtn2 = document.querySelector('#themeBtn2')

// themeBtn1.addEventListener('click', () => {
//     document.body.classList.toggle('dark')
// })
// themeBtn2.addEventListener('click', () => {
//     document.body.classList.toggle('dark')
// })

const tl = gsap.timeline({defaults:{ease:'back'}})

tl.from('.illus', {
    opacity:0,
    duration:3
}).to('#y-1',{
    x:'200px',
    repeat: -1,
    yoyo:true,
    duration:.8
}).to('#y-2',{
    x:'200px',
    repeat: -1,
    yoyo:true,
    duration:.8
}).to('#y-3',{
    x:'100px',
    repeat: -1,
    yoyo:true,
    duration:.8
}).to('#r-1',{
    x:'150px',
    repeat: -1,
    yoyo:true,
    duration:.8
})

const tl2 = gsap.timeline({
    defaults:{ease:'power4'}
}

)
tl2.from('.hero img', {
    opacity:0,
    y: '-20%',
    duration:2,
    delay:1

}  ).from('.hero .herotitle', {
    opacity:0,
    y:'100%',
    duration:1
},'-=2'

).from('.hero .herobtns', {
    opacity:0,
    y:'100%',
    duration:1,
stagger:.3
},'-=1'

).from('.navbar',{
    opacity:0,
    duration:2,
    delay:1
},'-=2')

const scrollabt = gsap.timeline({
    scrolltrigger:{
        trigger:'about',
        markers:true,
        start :'top bottom',
        end: 'bottom top'
    }
})