var events = [
    {
        "id":"9",
        "time": moment().set("hour", 9).set("minute", 0).set("second", 0).format("hA"),
        "description":""
    },
    {
        "id":"10",
        "time": moment().set("hour", 10).set("minute", 0).set("second", 0).format("hA"),
        "description":""

    },
    {
        "id":"11",
        "time": moment().set("hour", 11).set("minute", 0).set("second", 0).format("hA"),
        "description":""

    },
    {
        "id":"12",
        "time": moment().set("hour", 12).set("minute", 0).set("second", 0).format("hA"),
        "description":""

    },
    {
        "id":"1",
        "time": moment().set("hour", 13).set("minute", 0).set("second", 0).format("hA"),
        "description":""

    },
    {
        "id":"2",
        "time": moment().set("hour", 14).set("minute", 0).set("second", 0).format("hA"),
        "description":""

    },
    {
        "id":"3",
        "time": moment().set("hour", 15).set("minute", 0).set("second", 0).format("hA"),
        "description":""

    },
    {
        "id":"4",
        "time": moment().set("hour", 16).set("minute", 0).set("second", 0).format("hA"),
        "description":""

    },
    {
        "id":"5",
        "time": moment().set("hour", 17).set("minute", 0).set("second", 0).format("hA"),
        "description":""

    },
];


events.forEach(function(hour){
    var timeBlockEl = $("<div>")
        .addClass("row time-block");

    var hourEl = $("<div>")
        .addClass("col-1 hour")
        .text(hour.time);

    var descriptionEl = $("<textarea>")
        .addClass("col-10 description")
        .text(hour.description)

    var saveBtnEl = $("<button>")
        .addClass("col-1 saveBtn")
        .html("<i class='fas fa-save'></i>")

    timeBlockEl.append(hourEl, descriptionEl, saveBtnEl);
    $(".container").append(timeBlockEl);
});

// load current date at the top of the page
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

// loadEvents function - pull from array from local storage

// saveEvent function - save to local storage

// auditEvent function - add class to change background color (past, present, future)

// event listener for saveBtn to run saveEvent

// timeInterval - to auditEvent every hour (1000* 60 * 60)

//call loadEvent for the first time
