$(document).ready(function() {
    $('html').css('top', ($(window).height() - 500) / 3 - 35);
    $('#Content').css("width", window.innerWidth - 34);

    loadPictures(document.URL);

    $(".titlePage").mouseenter(function() {
        $('.titlePageBg').animate({
            'opacity': 0
        }, 500);
        $('.titlePageText').animate({
            'opacity': 1
        }, 800);
    });

    $(".clientCard").mouseenter(function() {
        $(".clientBanner, .clientName", this).animate({
            'opacity': 0
        }, 150);
    });
    $(".clientCard").mouseout(function() {
        $(".clientBanner, .clientName", this).animate({
            'opacity': 1
        }, 150);
    });

    $('#Content').scroll(function(e) {
        if ($('.titlePageBg').css('opacity') != 0) {
            $('.titlePageBg').animate({
                'opacity': 0
            }, 500);
            $('.titlePageText').animate({
                'opacity': 1
            }, 800);
        }
    });
});

window.onresize = function(event) {
    $('#Content').css("width", window.innerWidth - 34);
    $('html').css('top', ($(window).height() - 500) / 3 - 35);
}

$(window).mousewheel(function(event, delta) {
    event.preventDefault();
    var scroll = $('#Content').scrollLeft();
    $('#Content').scrollLeft(scroll - (delta * 80));
});

// I think this is to hijack the url path?
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('#Content').animate({
                    scrollLeft: 0 //target.offset().left                         
                }, 1000);                         
                return false;                       
            }                     
        }                   
    });                 
});