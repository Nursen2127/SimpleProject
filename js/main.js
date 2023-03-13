

$(document).ready(function () {



    var w = $(window).width(), h = $(window).height();



    $(".icon-menu").click(function () {

        $(".navbar-link").toggleClass('navbar-link-active');
        $(".icon-menu").toggleClass('active');
        $("body").toggleClass('over');
        $(this).toggleClass('icon-menu-active');

    });





    var swiper1 = new Swiper('#Slider', {
        effect: "fade",
        speed:1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },


    });

    var swiper1 = new Swiper('#Slider-Client', {
        effect: "fade",
        speed:1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,


        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },


    });

    var swiper2 = new Swiper('#Slider-Partners', {
        spaceBetween:50,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            1440: {
            },
            1367: {
            },
            1281: {
            },
            991: {
            },
        }

    });

    var swiper3 = new Swiper('.swiper-container-marka', {
        //effect:'fade',
        //centeredSlides: true,
        spaceBetween:20,
        slidesPerView: 7,

        breakpoints: {

            1367: {
                slidesPerView: 6,
            },
            991: {
                slidesPerView: 2,
            },
        }

    });


    $('.navbar li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });






    if ($(document).scrollTop() > 70) {

        $(".Navtop").addClass('Navtop-active');
    } else {
        $(".Navtop").removeClass('Navtop-active');
    }


    $(window).scroll(function () {

        var w = $(window).width(), h = $(window).height();
        if ($(document).scrollTop() > 70) {

            $(".Navtop").addClass('Navtop-active');
        } else {
            $(".Navtop").removeClass('Navtop-active');
        }
    });




    $(function () {

        $('#UpTotop').click(
            function () {
                $('body,html').animate({scrollTop: 0}, 800);
            });
        var $elem = $('body');
    });

    $('.select').selectpicker();


    if (w < 991) {
        $('.selectpicker').mobileSelect({
            animation: 'scale',
            animationSpeed: 400
        });
    }


});





$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 350 ,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 100,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 2.5 ,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 60,duration: 2500});



/* AUTHOR LINK */
$('.about-me-img').hover(function(){
    $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
}, function(){
    $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
});






