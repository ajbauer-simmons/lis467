// Avi Bauer
// LIS467 SP2022
// Week 9

function myAnimate() {
    
    // define our moving element
    const elem = document.getElementById("animate");

    // reset everything
    let id = null;
    elem.style.left = '0px';
    elem.style.top = '0px';
    elem.style.width = '50px';
    elem.style.width = '50px';
    let pos = 50;
    clearInterval(id);

    // set the interval function & time
    id = setInterval(frame, 5);

    // assign the stop function to the stop button
    const stopper = document.getElementById("deactivator");
    stopper.addEventListener("click", function() {
        clearInterval(id);
    });

    // callback #1
    function frame() {

        if (pos == 400) { // if we've reached the max width
            
            // clear the interval & trigger our second callback function
            clearInterval(id);
            id = setInterval(frame2, 5);

        } else { // if we haven't reached it yet

            // increment the width and height
            pos++;
            elem.style.width = pos + 'px';
            elem.style.height = pos + 'px';
        }
    }

    // callback #2
    function frame2() {
        if (pos == 50) { // if we're back to our original size

            // clear the intervak and bump to the next callback
            clearInterval(id);
            id = setInterval(frame3, 5);

        } else { // if we're still moving

            // deincrement, ajdust width and height, adjust position
            pos--;
            elem.style.width = pos + 'px';
            elem.style.height = pos + 'px';
            elem.style.left = 400 - pos + 'px';
            elem.style.top = 400 - pos + 'px';
        }
    }

    // callback #3
    function frame3() {
        if (pos == 400) { // if we're back to full size

            // clear the interval and bump to callback #4
            clearInterval(id);
            id = setInterval(frame4, 5);

        } else { // otherwise

            // increment, ajust size and position
            pos++;
            elem.style.width = pos + 'px';
            elem.style.height = pos + 'px';
            elem.style.left = 400 - pos + 'px';
            elem.style.top = 400 - pos + 'px';
        }
    }

    // callback #4
    function frame4() {
        if (pos == 50) { // if we're back to the original size & place

            // clear the interval and return to callback #1
            clearInterval(id);
            id = setInterval(frame, 5);
        } else {

            // decrement, adjust size and position
            pos--;
            elem.style.width = pos + 'px';
            elem.style.height = pos + 'px';
        }
    }
}