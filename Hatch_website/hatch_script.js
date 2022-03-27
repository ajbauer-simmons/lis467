// Avi Bauer
// baueraj@simmons.edu
// last modified: March 13 2022

// add dropdown functionality to menu
function menu_collapse() {

    var $subMenu = $('.sub-menu>a,.sub-sub-menu>a');
    var $container = $('.sub-list,.sub-sub-list');
    var $menu = $('.sub-menu,.sub-sub-menu');

    // collapse lists
    $('.sub-list,.sub-sub-list').css({'display':'none'});

    // toggle visibility on click
    $subMenu.click(function() {
        if ($(this).next().css('display') == 'none') {
            //console.log('show');
            $(this).next().css({'display':'block'});
            $(this).css({'color':'black'});
        } else {
            //console.log('hide');
            $(this).next().css({'display':'none'});
            $(this).css({'color':'white'});
        }
        
    });

    // when focused, dropdowns open on Enter key press
    $subMenu.keypress(function(event){
        if(event.keyCode == 13){
          $(this).click();
        }
    });

    // close menus if click anywhere else
    $(document).click(function(event) {
        if ((!$container.is(event.target) && !$container.has(event.target).length) && (!$menu.is(event.target) && !$menu.has(event.target).length)) {
            //console.log("doc hide");
            $container.css({'display':'none'});
            $subMenu.css({'color':'white'});
        }
    });

    // fix sticky font colors
    $subMenu.hover(function(){
        $(this).css({'color':'black'});
        $(this).parent().css({'background-color':'#ffd4bd'});
    }, function() {
        $(this).css({'color':'white'});
        $(this).parent().css({'background-color':'#ec743c'});
    });
    $subMenu.focusin(function(){
        $(this).css({'color':'black'});
        $(this).parent().css({'background-color':'#ffd4bd'});
    }).focusout( function() {
        $(this).css({'color':'white'});
        $(this).parent().css({'background-color':'#ec743c'});
    });
}

// change direction of caret  
function caret_switch() {

    //perform a media query
    var window_collapse = window.matchMedia('(max-width: 680px)');

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

// make slideshow
var slideIndex = 0;
function img_carousel() {

    // hide slides
    var $slides = $(".img_slide");
    $slides.css({"display":"none"});

    if ($slides.length > 0) {
        // update slide index
        slideIndex++;
        if (slideIndex > $slides.length) {
            slideIndex = 1;
        }
        // console.log(slideIndex);

        // make single slide visible
        $(".img_slide:nth-of-type(" + slideIndex + ")").css({"display":"block"});

        setTimeout(img_carousel, 5000); // Change image every 5 seconds
    }
}

// make events filters
function events_cal() {

    // check today's date
    var today = Date.now();
    var day = Math.floor(today / (1000 * 60 * 60 * 24));
    //console.log(today);

    // add upcoming and past tags
    $(".cal_items figure").each(function() {
        var event_date = new Date($(this).attr("class"));
        var event_day = event_date / (1000 * 60 * 60 * 24);
        if (event_day < day) {
            $(this).addClass("past");
        } else {
            $(this).addClass("upcoming");
        }
    })
    
    // check if controls exist
    if ($(".cal_controls").length > 0) {
        //console.log("controls found")

        $(".cal_controls .all").click(function() {
            // show all
            $(".cal_items figure.past, .cal_items figure.upcoming").css({"display":"block"});
            $(".cal_controls .past, .cal_controls .upcoming").parent().removeClass("active");
            $(this).parent().addClass("active");
        });
        $(".cal_controls .past").click(function(){
            // show past, hide upcoming
            $(".cal_items figure.past").css({"display":"block"});
            $(".cal_items figure.upcoming").css({"display":"none"});
            $(".cal_controls .upcoming, .cal_controls .all").parent().removeClass("active");
            $(this).parent().addClass("active");
        });
        $(".cal_controls .upcoming").click(function(){
            // show upcoming, hide past
            $(".cal_items figure.upcoming").css({"display":"block"});
            $(".cal_items figure.past").css({"display":"none"});
            $(".cal_controls .past, .cal_controls .all").parent().removeClass("active");
            $(this).parent().addClass("active");
        });
    }
}

// trigger appropriate functions when window loads or resizes
$(document).ready(menu_collapse);
$(document).ready(caret_switch);
$(document).ready(img_carousel);
$(document).ready(events_cal);
$(window).resize(caret_switch);

