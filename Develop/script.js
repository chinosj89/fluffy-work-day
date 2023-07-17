// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var description = document.querySelector('.description');
//Current Date
var currentDay = dayjs();
$('#currentDay').text(currentDay.format('[Today is] dddd MMMM D YYYY'));

let currentHour = parseInt(dayjs().format('HH'));
//I had learned that parseINT returns an integer. using this in my code i can compare numerically the time in 24hr format to the time block with the numerical id's that have a split so side by side integer comparison can be done
$(function () {
  // Each div has a saveBtn and this code calls those buttons
  $('.saveBtn').on("click", function(event){
    event.preventDefault();
    console.log('clicked!')
    var input = $(this).siblings(".description").val(); // this selects the input field
    var time = $(this).parent().attr("id"); // (this) refers to the button,`.parent` will call the parent div while the attr('id') will call to the id of the div
    localStorage.setItem(time, input); // furthermore we can now associate the input itself with the div's id. 
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
console.log(currentHour);
$('.time-block').each(function(){
  var timeBlock = parseInt($(this).attr("id").split("-")[1]);
  if (timeBlock === currentHour ) {
    $(this).addClass('present');
  } else if (timeBlock < currentHour) {
    $(this).addClass('future');
  } else if (timeBlock > currentHour) {
    $(this).addClass('past');
  }
})

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  $("#hour-9 .description").val(localStorage.getItem("9AM"));
  $("#hour-10 .description").val(localStorage.getItem("10AM"));
  $("#hour-11 .description").val(localStorage.getItem("11AM"));
  $("#hour-12 .description").val(localStorage.getItem("12PM"));
  $("#hour-13 .description").val(localStorage.getItem("1PM"));
  $("#hour-14 .description").val(localStorage.getItem("2PM"));
  $("#hour-15 .description").val(localStorage.getItem("3PM"));
  $("#hour-16 .description").val(localStorage.getItem("4PM"));
  $("#hour-17 .description").val(localStorage.getItem("5PM"));
  

  // TODO: Add code to display the current date in the header of the page.
});
