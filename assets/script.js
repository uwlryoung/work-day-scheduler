var timeDisplayEl = $("#currentDay");
var saveButton = $(".saveBtn");
var times = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];


$(function () {
  saveButton.on("click", function(){
    var parentID = $(this).parent().attr("id");
    var textInput = $(this).prev().val();
    textInput.value = textInput;
    localStorage.setItem(parentID,textInput);
  });

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

  function getSchedule(){
    $(".description").each(function(i) {
      var getData = localStorage.getItem("hour-"+ times[i]);
      $(this).text(getData);
    });
  };

  function displayTime() {
    var rightNow = dayjs().format('dddd, MMMM DD, YYYY, H:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  displayTime();
  setInterval(displayTime, 1000);

  checkTime();
  setInterval(checkTime, 1000);

  getSchedule();
});