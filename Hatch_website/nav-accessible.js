// Avi Bauer
// baueraj@simmons.edu
// last modified: March 8 2022

function menu_collapse() {

    // collapse lists
    $('.sub-list,.sub-sub-list').css({'display':'none'});

    // toggle visibility on click
    $('.sub-menu>a,.sub-sub-menu>a').click(function() {
        if ($(this).next().css('display') == 'none') {
            //console.log('show');
            $(this).next().css({'display':'block'});
        } else {
            //console.log('hide');
            $(this).next().css({'display':'none'});
        }
        
    });

    // close menus if click anywhere else
    $(document).click(function(event) {
        var container = $('.sub-list,.sub-sub-list');
        var menu = $('.sub-menu,.sub-sub-menu');
        if ((!container.is(event.target) && !container.has(event.target).length) && (!menu.is(event.target) && !menu.has(event.target).length)) {
            //console.log("doc hide");
            container.css({'display':'none'});
        }
    });
}

function carrot_switch() {

    //perform a media query
    var window_collapse = window.matchMedia('(max-width: 640px)');

    if (window_collapse.matches) {
        // hide side arrow, show down arrow
        $('#side-arrow').css({'display':'none'});
        $('#down-arrow').css({'display':'inherit'});
    } else { 
        //flipped
        $('#down-arrow').css({'display':'none'});
        $('#side-arrow').css({'display':'inherit'});
    }
}

// trigger when window loads or resizes
$(document).ready(menu_collapse);
$(document).ready(carrot_switch);
$(window).resize(carrot_switch);

