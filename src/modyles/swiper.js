import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination])
let swiper;
function initSwiper() {
    let pag = document.querySelector('.swiper-pagination-1');
        if (window.innerWidth <= 767 && !swiper) {

            pag.style.display = 'block';
             swiper = new Swiper('.swiper-1', {
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 0,
        
                pagination: {
                el: '.swiper-pagination-1',
                autoHeight: true,
                clickable: true,
                },
            });

        } else if (window.innerWidth > 767 && swiper) {
           
                    swiper.destroy();
                    swiper = null;
                    pag.style.display = 'none';
                }
            }
window. addEventListener('resize', initSwiper);
initSwiper();

let swiper2;
function initSwiper2() {
    let pag = document.querySelector('.swiper-pagination-2');
        if (window.innerWidth <= 767 && !swiper2) {

            pag.style.display = 'block';
             swiper2 = new Swiper('.swiper-2', {
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 0,
        
                pagination: {
                el: '.swiper-pagination-2',
                autoHeight: true,
                clickable: true,
                },
            });

        } else if (window.innerWidth > 767 && swiper2) {
           
                    swiper2.destroy();
                    swiper2 = null;
                    pag.style.display = 'none';
                }
            }
window. addEventListener('resize', initSwiper2);
initSwiper2();

let swiper3;
function initSwiper3() {
    let pag = document.querySelector('.swiper-pagination-3');
        if (window.innerWidth <= 767 && !swiper3) {

            pag.style.display = 'block';
             swiper3 = new Swiper('.swiper-3', {
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 0,
        
                pagination: {
                el: '.swiper-pagination-3',
                autoHeight: true,
                clickable: true,
                },
            });

        } else if (window.innerWidth > 767 && swiper3) {
           
                    swiper3.destroy();
                    swiper3 = null;
                    pag.style.display = 'none';
                }
            }
window. addEventListener('resize', initSwiper3);
initSwiper3();