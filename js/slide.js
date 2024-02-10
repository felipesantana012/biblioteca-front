const swiper = new Swiper('.swiper', {
    //speed: 400,
    spaceBetween: 10,
    slidesPerView: 3,

    pagination:{
        el: '.swiper-pagination',
        type: 'bullets',
    },

  });


const modoDark = document.getElementById('modoDark');
const body = document.body;

modoDark.addEventListener('click' ,()=> {
    body.classList.toggle('modo-dark');
});

