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
var tempEvents = [
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

// loadEvents function - pull from array stored on local storage
var loadEvents = function(){
    storedEvents = JSON.parse(localStorage.getItem("storedEvents"));

    if(!storedEvents) {
        storedEvents = events;
    };
    events = storedEvents;
    createTimeblock(events);
};

// create timeblock elements
var createTimeblock = function(arr){
    for (var i = 0; i < 9; i++){
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

        // audit event time
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
    localStorage.setItem("storedEvents", JSON.stringify(events));
    console.log("saved to local storage")
};

// event listener for saveBtn to  to update events of array and run saveEvent
$(".time-block").on("click", ".saveBtn", function(){
    var index = $(this).attr("id").replace("btn-", "")
    events[index].description = tempEvents[index].description;
    saveEventHandler();
});

// update temp array with new event
$(".time-block").on("change", ".description", function(){
    var updatedEvent = $(this).val();
    var textAreaId = $(this).attr("id");
    var index = textAreaId.replace("description-", "");
    tempEvents[index].description = updatedEvent;
});

//call loadEvent for the first time
loadEvents();