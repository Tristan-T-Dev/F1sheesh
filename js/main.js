$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .nav .nav-items .nav-links a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(' header .nav .nav-items .nav-links a[href*=' + id + ']')
                .classList.add('active');
            });
        };
    });
};


ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 500
});
ScrollReveal().reveal('h1',{delay: 400, origin:'top'})
ScrollReveal().reveal('h3',{delay: 600, origin:'bottom'})
ScrollReveal().reveal('.fish-title',{delay: 300, origin:'top'})
ScrollReveal().reveal('.btn',{delay: 800, origin:'bottom'})
ScrollReveal().reveal('#one, #three',{delay: 300, origin:'bottom'})
ScrollReveal().reveal('#four, #two, #six',{delay: 300, origin:'left'})
ScrollReveal().reveal('#five, #seven',{delay: 300, origin:'top'})
ScrollReveal().reveal('#nine, #eight',{delay: 300, origin:'right'})
ScrollReveal().reveal('.contact-box',{delay: 300, origin:'bottom'})

