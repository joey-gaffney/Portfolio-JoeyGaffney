// const navbar = document.getElementById('navbar');
// let scrolled = false;

// window.onscroll = function() {
//     if(window.pageYOffset > 100) {
//         navbar.classList.remove('top');
//         if(!scrolled) {
//             navbar.style.transform = 'translateY(-100px)';
//         }
//         setTimeout(function() {
//             navbar.style.transform = 'translateY(0)';
//             scrolled = true;
//         }, 200)
//     } else {
//         navbar.classList.add('top');
//         scrolled = false;
//     }
// }

// $('#navbar a, .btn').on('click', function (e) {
//     if (this.hash !== '') {
//         e.preventDefault();

//         const hash = this.hash;

//         $('html, body').animate(
//             {
//                 scrollTop: $(hash).offset().top - 100,
//             },
//             800
//         );
//     }
// });

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// window.addEventListener('scroll', reveal);

// function reveal() {
//     let reveals = document.querySelectorAll('.reveal');

//     for(let i = 0; i < reveals.length; i++){
//         let windowHeight = window.innerHeight;
//         let revealTop = reveals[i].getBoundingClientRect().top;
//         let revealPoint = 150;

//         if(revealTop < windowHeight - revealPoint){
//             reveals[i].classList.add('active');
//         }
//         else{
//             reveals[i].classList.remove('active');
//         }
//     }
// }
