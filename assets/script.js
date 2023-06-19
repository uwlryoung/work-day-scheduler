/* Needed variables. 
The array "times" helps with the id selectors which are "hour-09, hour-10, for example */
var timeDisplayEl = $("#currentDay");
var saveButton = $(".saveBtn");
var times = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];


/* List of functions. This is wrapped in an init function so that it ensures that everything
on the browser is rendered first.*/
$(function () {

  /* Click event to save the data in the text area.
  parentID will find the id-name (e.g., "hour-09")
  textInput gets the value (text) within the textarea, the sibling just before (previous) to the button.
  That text is then stored in local storage. */
  saveButton.on("click", function(){
    var parentID = $(this).parent().attr("id");
    var textInput = $(this).prev().val();
    localStorage.setItem(parentID,textInput);
  });


  /* This function checks the time and will change the styles of the text area based on 
  whether it is the past, present, or future relative to the current time. It utilizes 
  the times array initalized in the variables */
  function checkTime(){

    for (i = 0; i < times.length; i++){
      var timeRow = $("#hour-" + times[i]);

      if (times[i] > dayjs().format('HH')){
        timeRow.removeClass("past");
        timeRow.addClass("future");
        timeRow.removeClass("present");
      } else if (times[i] < dayjs().format('HH')){
        timeRow.addClass("past");
        timeRow.removeClass("future");
        timeRow.removeClass("present");
      } else {
        timeRow.removeClass("past");
        timeRow.removeClass("future");
        timeRow.addClass("present");
      }      
    }
  };

  /* This function gets the local storage for each textarea (textareas have a class of ".description"
  and renders the information on the page. It utilizes the times array initialized in the variables*/
  function getSchedule(){
    $(".description").each(function(i) {
      var getData = localStorage.getItem("hour-"+ times[i]);
      $(this).text(getData);
    });
  };
  
  /* Function for a clock using dayjs. */
  function displayTime() {
    var rightNow = dayjs().format('dddd, MMMM DD, YYYY, H:mm:ss a');
    timeDisplayEl.text(rightNow);
  }


  /* Function Calls. displaytime has a setInterval because it needs to be updated every second to 
  show the accurate time. checkTime has a setInterval so that it checks the hour every second to 
  see when the hour changs. */
  displayTime();
  setInterval(displayTime, 1000);

  checkTime();
  setInterval(checkTime, 1000);

  getSchedule();
});