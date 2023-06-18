var timeDisplayEl = $("#currentDay");
var divEl = $("div");
var containerEl = $(".container");
var allTimeBlocks = $(".time-block");

// console.log(divEl);

// var timeExample = $()



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  
  function checkTime(){
    var times = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

    for (i = 0; i < times.length; i++){
      var timeRow = $("#hour-" + times[i]);

      if (times[i] > dayjs().format('HH')){
        console.log(times[i] + "through >");
        timeRow.removeClass("past");
        timeRow.addClass("future");
        timeRow.removeClass("present");
      } else if (times[i] < dayjs().format('HH')){
        console.log(times[i] + "through < ");
        timeRow.addClass("past");
        timeRow.removeClass("future");
        timeRow.removeClass("present");
      } else {
          console.log(times[i] + "through else");
          timeRow.removeClass("past");
          timeRow.removeClass("future");
          timeRow.addClass("present");
      }      
      }
    }

  checkTime();

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  function displayTime() {
    var rightNow = dayjs().format('dddd, MMMM DD, YYYY, H:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  displayTime();
  setInterval(displayTime, 1000);
});

// console.log(dayjs().format('HH'));
// console.log(typeof dayjs().format('HH'));
// console.log("");

// console.log(dayjs().subtract(4,'hour').format('HH'));
// console.log(typeof dayjs().subtract(4,'hour').format('H'));



// console.log(dayjs().format('H'));
// console.log(typeof dayjs().format('H'));
// console.log("");

// console.log(dayjs().subtract(4,'hour').format('H'));
// console.log(typeof dayjs().subtract(4,'hour').format('H'));

