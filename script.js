$(document).ready(function() {
    $('html').css('top', ($(window).height() - 500) / 3 - 35);
    $('#Content').css("width", window.innerWidth - 34);
    load(document.URL);
});

function load(url) {
    loadPictures(url);

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
    navigationOverride()
}

function navigationOverride() {
    $('#beginning').click(function() {
        event.preventDefault();        
        $('#Content').animate({
            scrollLeft: 0                        
        }, 1000);   
    });
    $('a.hijackLink').click(function(event) {
        if (window.location.hash == this.hash) {
            $('#Content').animate({
                scrollLeft: 0                        
            }, 1000);                         
        } else {
            load(window.location.origin + "/" + this.hash);
        }
    });  
}

window.onresize = function(event) {
    $('#Content').css("width", window.innerWidth - 34);
    $('html').css('top', ($(window).height() - 500) / 3 - 35);
}

$(window).mousewheel(function(event, delta) {
    event.preventDefault();
    var scroll = $('#Content').scrollLeft();
    $('#Content').scrollLeft(scroll - (delta * 80));
});
