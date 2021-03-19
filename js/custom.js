/*global $, alert, console*/

$(function(){
    'use strict';

    // trigger nice scroll plugin

    $('html').niceScroll({
        cursorcolor:'#f7600e',
        cursorborder: 'none',
        cursorwidth:10,
        cursorborderradius:0,
    });

    // change header height
    $('.header').height($(window).height());


    // scroll to features 

    $('.header .arrow i').click(function(){
        $('html, body').animate({

            scrollTop: $('.features').offset().top

        }, 1000)
    });

    // scroll to hire us
    $('.hire-us').click(function(){
        $('html, body').animate({

            scrollTop: $('.our-team').offset().top

        }, 1000)
    });

    // scroll to our works

    $('.our-works').click(function(){
        $('html, body').animate({

            scrollTop: $('.our-work').offset().top

        }, 1000)
    });


    // Show Hidden items from works

    $('.show-more').click(function(){

        $('.our-work .hidden').slideToggle(1000);
        $(this).text($(this).text() == 'Show More' ? 'Hide' : 'Show More');
        
    });


    // Check testimonails

    var leftArrow = $('.testim .fa-chevron-left'),

        rightArrow = $('.testim .fa-chevron-right');

    function checkClients() {


        // hya hya >>


        // if ($('.client:first').hasClass('active')) {

        //     leftArrow.fadeOut();

        // } else {
        //     leftArrow.fadeIn();
        // }

        // hya hya >>


        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();

        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
    }
    checkClients();

    $('.testim i').click(function(){
        if ($(this).hasClass('fa-chevron-right')) {

            $('.testim .active').fadeOut(100, function(){   

                $(this).removeClass('active').next('.client').addClass('active').fadeIn();

                checkClients();
            });
        } else {

            $('.testim .active').fadeOut(100, function(){   

                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

                checkClients();
            });
        }
    });

document.getElementById("year").innerHTML = new Date().getFullYear();

let iguser = "@longliveteefa";

document.getElementById("iguser").innerHTML = iguser;

});

