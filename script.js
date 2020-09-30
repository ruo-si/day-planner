// docuement ready, clear all element values
$(document).ready(function () {

    console.log("being script.js");

    // define all targeted reference with var elements
    var currentDate = moment().format("MMMM Do YYYY, h:mm a");
    var todayIs = moment().format("[Today is] dddd [!]")
    var currentDayObj = new Date()

    // toRead function
    function toRead() {

        console.log("in toRead")

        // get time values from storage
        
        // loop and assign time property as text to appropriate time

        // display today is weekday on title
        $("#today-is").text(todayIs);

        // display present date on page
        $("#currentDay").text(currentDate);
    };


    function setUp() {

        console.log("in setUp")

        // set up array to loop 
        hourDisplayArr = [9, 10, 11, 12, 1, 2, 3, 4, 5]
        hourIdsArr = [9,10,11,12,13,14,15,16,17]

        // loop to create and format framework
        for (var i = 0; i < hourDisplayArr.length; i++) {

            // create row container, add id and classes to all 
            var rowEl = $("<div>").addClass("row time-block");

            // add hour block, add id and classes to all 
            var hourEl = $("<div>").addClass("hour col-md-2 hour-text").text(hourDisplayArr[i]).attr("id", hourIdsArr[i]);

            // add text area, add id and classes to all 
            var textAreaEl = $("<textarea>").addClass("col-md-9 description");

            // add button, add id and classes to all 
            var saveBtnEl = $("<button>").addClass("btn col-md-1 saveBtn");

            // append elements to container/page
            $(".container").append(rowEl);

            $(rowEl).append(hourEl);

            $(hourEl).after(textAreaEl);

            $(textAreaEl).after(saveBtnEl);


            // check time to see if time if .past, .present or .future and add appropriate class

            // hour now
            var currentHour = currentDayObj.getHours()
            // hour Id on time-block
            var timeblockId = hourIdsArr[i]


            if (currentHour < timeblockId){
               
                $(rowEl).addClass("future");
            }

            else if (currentHour === timeblockId){

                $(rowEl).addClass("present");
            }

            else $(rowEl).addClass("past");
        }

        toRead();
    };

    // saveBtnEl.on("click") call function toWrite ()
    // $(".saveBtn").on("click", toWrite())


    // toWrite function
    function toWrite() {

        console.log("in toWrite")

        // get value of textarea and .trim()
        // save relevant text to local storage
        // localStorage.setItem("textAreaVal");

    };
    // call toRead()
    setUp();

});