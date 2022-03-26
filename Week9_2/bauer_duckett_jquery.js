// Avi Bauer, LIS467, 3/26/2022

// run when document is ready 
$(function() {

    // add class "headline" to all header elements (<h1> - <h6>)
    $(':header').addClass('headline');

    // add a list item
    var $newItem = $('<li id="five"><em>gluten-free</em> soy sauce</li>');
    $('li:last').after($newItem);

    // add classes to specific elements
    $('li em').addClass('warning');
    $('li.hot').addClass('favorite');

    // add symbols for seasonal and favorite classes
    $('.favorite').append('<div class="icon">&#10084;</div>');
    $('.warning').before('&#9888; ');

    // add event listener to display below the items when something is moused over or clicked
    var listItem, itemStatus, eventType
    $('ul').on('click mouseover',':not(#four)',{status:'important'}, function(e) {
        listItem = 'Item: ' + e.target.textContent + '<br>';
        itemStatus = 'Status: ' + e.data.status + '<br>';
        eventType = 'Event: ' + e.type;
        $('#notes').html(listItem + itemStatus + eventType);
    }); 
    
    // add event listener to grey out list items upon selection
    $('li').on('click', function() {
        $(this).toggleClass('complete');
     });
     
    // progressively show each list item, then the notes section
    var $li = $('li');
    $li.hide().each(function(index) {
        $(this).delay(500*index).fadeIn(500);
    });
    $('#notes').hide().delay(($li.length)*500).fadeIn(500);
});

