$(document).ready(function(){
    $('.hero__product-slider').slick({
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:1,
                    
                }
            }
        ]
    });
    $('.about-slider__slider').slick({
        slidesToShow:3,
        ifinite:true,
        slidesToScroll:1,
        centerMode:true,
        initialSlide:1,
        responsive:[
            {
                breakpoint: 800,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
    });
    $('.similar-slider__slider').slick({
        slidesToShow:2,
        responsive:[
            {
                breakpoint: 1040,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
    });
    $('.header__burger').click(function(event){
        $('.header__burger, .header__burger-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});