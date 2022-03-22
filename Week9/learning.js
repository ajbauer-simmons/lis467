// Avi Bauer
// LIS467 SP2022
// Week 9

document.write("I'm loving LIS467!");
// alert("How about you?");

document.write("<br>")

// IF
var user_name = prompt("What is your name?");

if (user_name.length === 4) {
    document.write("Are you Jane?");
} else if (user_name.length === 6) {
    document.write("Are you Naresh?")
} else {
    document.write("Who are you?");
}

document.write("<br>")

// FOR LOOPS
for (let i = 1; i < 11; i++) {
    document.write(i + "<br>");
}

var callNumbers = ['PQ2246.M2 E5', 
                   'PR2759 .P3', 
                   'PR6056.A75 T76x', 
                   'PS1744.G57 Y4534'];

for (let i = 0; i < callNumbers.length; i++) {
    document.write(callNumbers[i] + "<br>");
}

// FUNCTIONS

function helloName(name) {
    document.write("Hello " + name + "<br>");
}

function displayHours(hours) {
    for (i = 0; i < hours.length; i++) {
        document.write(hours[i] + "<br>");
    }
}

function isPublic(library) {
    if (library.includes("Public") || library.includes("Free")) {
        return true;
    } else {
        return false;
    }
}

// FOREACH LOOPS

var hours = ['7:30am - 11:45pm',
         '7:30am - 11:45pm',
         '7:30am - 11:45pm',
         '7:30am - 11:45pm',
         '7:30am - 10pm',
         '9am-10pm',
         '9am-11:45pm']

function writeDaysHours(days_hours) {
    document.write(days_hours + "<br>");
}

hours.forEach(writeDaysHours);


// dailyHours FUNCTION

var hours = [
    "Monday: 9a - 9p",
    "Tuesday: 9a - 9p",
    "Wednesday: 9a - 9p",
    "Thursday: 9a - 9p",
    "Friday: 9a - 5p",
    "Saturday: 9a - 5p",
    "Sunday: closed"
];

function dailyHours(hours) {
    document.write("<br><h2>Week 9: dailyHours</h2>");
    for (let hour of hours) {
        hour_seg = hour.split(": ");
        if (hour_seg[1].includes("closed")) {
            document.write("On " + hour_seg[0] + " the Library is " + hour_seg[1] + "<br>");
        }   else {
            document.write("On " + hour_seg[0] + " the hours are " + hour_seg[1] + "<br>");
        }
    }
    hour_segments = hours.split(": ");
    
}

dailyHours(hours);