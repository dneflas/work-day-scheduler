var now = moment().hour();

var events = [
    {   
        "description":""
    },
    {
        "description":""
    },
    {
        "description":""
    },
    {
        "description":""
    },
    {
        "description":""
    },
    {
        "description":""
    },
    {
        "description":""
    },
    {
        "description":""
    },
    {
        "description":""
    },
];

// load current date at the top of the page
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

// loadEvents function - pull from array from local storage
var loadEvents = function(){
    storedEvents = JSON.parse(localStorage.getItem("storedEvents"));

    if(!storedEvents) {
        storedEvents = events;
    } else {
        events = storedEvents;
    }

    createTimeblock(events);
}

// create timeblock elements
var createTimeblock = function(arr){
    for (var i = 0; i < 9; i++){
        // var timeBlockEl = $("<div>")
        //     .addClass("row time-block")

        var hourEl = $("<div>")
            .addClass("col-1 hour")
            .text(moment().hour(i+9).format("hA"));

        var descriptionEl = $("<textarea>")
            .addClass("col-10 description")
            .attr("id", "description-" + (i))
            .text(arr[i].description);

        var saveBtnEl = $("<button>")
            .addClass("col-1 saveBtn")
            .attr("id", "btn-" + (i))
            .html("<i class='fas fa-save'></i>")

        $("#time-block-" + i).append(hourEl, descriptionEl, saveBtnEl);
        // $(".container").append(timeBlockEl);

        $(".time-block").removeClass("past present future");
        var hour = moment(hourEl.text(), "hA").hour();

        if (now > hour){
            descriptionEl.addClass("past");
        } else if (now === hour){
            descriptionEl.addClass("present");
        } else {
            descriptionEl.addClass("future");
        };  
    };
};

// saveEvent function - save to local storage
var saveEventHandler = function(){
    //update descriptions
    var updatedEvent = 


    localStorage.setItem("storedEvents", JSON.stringify(events));
    console.log("saved to local storage")
}


// auditEvent function - add class to change background color (past, present, future)


// event listener for saveBtn to  to update text and run saveEvent
$(".time-block").on("click", ".saveBtn", saveEventHandler);
    // var buttonId = $(this).attr("id");
    // var index = buttonId.replace("btn-", "");
    // console.log(index);
// });

// update array with new event
$(".time-block").on("change", ".description", function(){
    var updatedEvent = $(this).val();
    var textAreaId = $(this).attr("id");
    var index = textAreaId.replace("description-", "");

    events[index].description = updatedEvent;


    // $(".time-block").on("click", ".saveBtn", function(){
    //     var index = $(this).attr("id").replace
    //     events[index].description = updatedEvent;
    //     saveEventHandler();
    // });

    // update array with new event
})

// timeInterval - to auditEvent every hour (1000* 60 * 60)

//call loadEvent for the first time
loadEvents();
