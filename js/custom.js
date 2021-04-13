$(function () {

    //navbar activation;
    $('.navbar .nav-item').on('mouseover', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


    //fixed-nav;
    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > 300) {
            $('.navbar').addClass('fixed-nav');
        } else {
            $('.navbar').removeClass('fixed-nav');
        }

        //back-to-top;
        if (scrolling > 600) {
            $('.back_to_top').fadeIn();
        } else {
            $('.back_to_top').fadeOut();
        }

        $('.back_to_top').click(function () {
            $('html,body').animate({
                scrollTop: 0,
            }, 2500);

        });

    });

    // Banner Slider;
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
    });



    //about-video popup;
    $('.venobox').venobox({
        spinner: 'wave',
        spinColor: '#e23e38',
        overlayColor: 'rgba(93, 93, 93, 0.6)',
    });

    //testimonial-slider;
    $('.testi-slider').slick({
        arrows: false,
        slidesToShow: 2,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
        ],
    });

    //funfact counter;
    $('.counter').counterUp({
        time: 1500,
    });

    //brand slider;
    $('.brand-slider').slick({
        slidesToShow: 5,
        prevArrow: '<i class="slick-prev prev-arrow fas fa-chevron-left"></i>',
        nextArrow: '<i class="slick-next next-arrow fas fa-chevron-right"></i>',
        centerMode: true,
        centerPadding: '0',
        autoplay: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    prevArrow: false,
                    nextArrow: false,
                }
            },
        ],
    });


    //animation scroll js
    var html_body = $('html, body');
    $('.navbar .navbar-nav .nav-item a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 2000);
                return false;
            }
        }
    });

});