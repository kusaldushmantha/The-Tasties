$(document).ready(function () {

    /* Sticky navigation*/
    if( $('nav').hasClass('sticky-nav') ){
        $('nav').removeClass('sticky-nav');
    }

    $(".js-section-features").waypoint(function (direction) {
        if(direction == "down"){
            $('nav').addClass('sticky-nav');
        }else{
            $('nav').removeClass('sticky-nav');
        }
    }, {offset: '60px'});

    /* Scroll on button clicks */
    $('.js-scroll-to-plan').click(function () {
        $('html,body').animate({
            scrollTop: $('.js-section-plans').offset().top-20}, 2000);
    });

    $('.js-scroll-to-start').click(function () {
        $('html,body').animate({
            scrollTop: $('.js-section-features').offset().top-20}, 2000);
    });

    /* Navigation scroll */
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top-17
                    }, 2000);
                }
            }
        });

    /* Animations on scroll */

    $('.js-animation-one').waypoint(function (direction) {
       $('.js-animation-one').addClass('animated fadeIn');
    }, {offset: '50%'});

    $('.js-animation-two').waypoint(function (direction) {
        $('.js-animation-two').addClass('animated fadeInUp');
    }, {offset: '50%'});

    $('.js-animation-three').waypoint(function (direction) {
        $('.js-animation-three').addClass('animated fadeIn');
    }, {offset: '50%'});

    $('.js-animation-four').waypoint(function (direction) {
        $('.js-animation-four').addClass('animated pulse');
    }, {offset: '50%'});

    /* Mobile navigation */
    $('.js-nav-icon').click(function () {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');

        nav.slideToggle(200);

        if(icon.hasClass('ion-navicon-round')){
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
        }else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });

    /* Maps */
    var map = new GMaps({
     div: '.map',
     lat: 38.7436266,
     lng: -9.157,
     zoom: 17
    });

    map.addMarker({
        lat: 38.7436266,
        lng: -9.1602037,
        title: 'Lisbon',
        infoWindow:{
            content: '<p>The Tastie&apos;s Lisbon HeadQuaters</p>'
        }
    });



});