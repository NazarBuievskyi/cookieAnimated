// gsap.fromTo('.text', {opacity: 0, y: -20}, {opacity: 1, y: 0, duration: 1});

const tl = gsap.timeline({defaults: {duration: 1, ease: 'power1.out'}});
const btn = document.querySelector('button');

tl.fromTo('.cookie-container', {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5});
tl.fromTo('.cookie', {opacity: 0, x: -50, rotation: '-45deg'}, {opacity: 1, x: 0, rotation: '0'}, '<50%');
tl.fromTo('.text', {x: 30, opacity: 0}, {x: 0, opacity: 1}, '<');

//Cookie jump

tl.fromTo('.cookie', {y: 0, rotation: '0deg'}, {y: -20, yoyo: true, repeat: -1, rotation: '-20deg', duration: 1.5});
tl.fromTo('#crumbs', {y: 0}, {y: -10, yoyo: true, repeat: -1, duration: 1.5}, '<');

//Fade cookie out
btn.addEventListener('click', ()  => {
    // cookieContainer.classList.add('close-btn');
    gsap.to('.cookie-container', {opacity: 0, y: 100, duration: 1, ease: 'power1.out'});
});