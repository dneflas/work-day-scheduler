var now = moment().hour();
console.log(now);

var events = [
    {
        "time": moment().hour(9).format("hA"),
        "description":""
    },
    {
        "time": moment().hour(10).format("hA"),
        "description":""

    },
    {
        "time": moment().hour(11).format("hA"),
        "description":""

    },
    {
        "time": moment().hour(12).format("hA"),
        "description":""

    },
    {
        "time": moment().hour(13).format("hA"),
        "description":""

    },
    {
        "time": moment().hour(14).format("hA"),
        "description":""

    },
    {
        "time": moment().hour(15).format("hA"),
        "description":""

    },
    {
        "time": moment().hour(16).format("hA"),
        "description":""

    },
    {
        "time": moment().hour(17).format("hA"),
        "description":""

    },
];

// load current date at the top of the page
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

// loadEvents function - pull from array from local storage
var loadEvents = function(){
    storedEvents = JSON.parse(localStorage.getItem("events"));

    if(!storedEvents) {
        storedEvents = events;
    };

    createTimeblock(storedEvents);
}

// create timeblock elements
var createTimeblock = function(arr){
    for (var i = 0; i< arr.length; i++){
        var timeBlockEl = $("<div>")
            .addClass("row time-block");

        var hourEl = $("<div>")
            .addClass("col-1 hour")
            .text(arr[i].time);

        var descriptionEl = $("<textarea>")
            .addClass("col-10 description")
            .text(arr[i].description)

            var hour = moment(arr[i].time, "hA").hour();
            descriptionEl.removeClass("past present future");

            if (now > hour){
                descriptionEl.addClass("past");
            } else if (now === hour){
                descriptionEl.addClass("present");
            } else {
                descriptionEl.addClass("future");
            };
        
        var saveBtnEl = $("<button>")
            .addClass("col-1 saveBtn")
            .html("<i class='fas fa-save'></i>")

        timeBlockEl.append(hourEl, descriptionEl, saveBtnEl);
        $(".container").append(timeBlockEl);
    };
};

// saveEvent function - save to local storage
var saveEventHandler = function(){
    localStorage.setItem("storedEvents", JSON.stringify(storedEvents));
    console.log("saved to local storage")
}

// auditEvent function - add class to change background color (past, present, future)


// event listener for saveBtn to run saveEvent
$(".container").on("click", ".saveBtn", saveEventHandler);

// timeInterval - to auditEvent every hour (1000* 60 * 60)

//call loadEvent for the first time
loadEvents();
