//Current Date
var currentDay = dayjs();
$('#currentDay').text(currentDay.format('[Today is:] dddd MMMM D, YYYY'));

let currentHour = parseInt(dayjs().format('HH'));
//I had learned that parseINT returns an integer. using this in my code i can compare numerically the time in 24hr format to the time block with the numerical id's that have a split so side by side integer comparison can be done


//
$(function () {
  // Each div has a saveBtn and this code calls those buttons
  $('.saveBtn').on("click", function (event) {
    event.preventDefault();
    //window.alert('Saved in Local Storage!');
    $(".notification").removeClass("d-none"); //in vanilla JS we used notification.classList.remove()

    // this selects the input field
    var input = $(this).siblings(".description").val();
    // var input = $(".time-block").children(".description").val(); - can also be done this way

    var time = $(this).parent().attr("id"); // (this) refers to the button,`.parent` will call the parent div while the attr('id') will call to the id of the div.

    // furthermore we can now associate the input itself with the div's id. 
    localStorage.setItem(time, input); //save 


    // Mock up had a notification when saved button is clicked and i wanted to copy that. I created an h2 with a display: none; then when the button is clicked it will remove the class. I then learned how to set a timeout where a class is added in a second which is display:none. This shows the h2 and after a second it add display none.
    setTimeout(function () {
      $(".notification").addClass("d-none") //vanilla js is notification.classList.add()
    }, 1000);

  });

  // Uses the time block class div and parses the div id into an integer while splitting the '-' away, while the [1] is accesing the 9.
  console.log("current time in HH: " + currentHour);
  $('.time-block').each(function () {
    var timeBlock = parseInt($(this).attr("id").split("-")[1]);
    console.log("timeBlocks: " + timeBlock);
    if (timeBlock === currentHour) {
      $(this).addClass('present');
    } else if (timeBlock > currentHour) {
      $(this).addClass('future');
    } else if (timeBlock < currentHour) {
      $(this).addClass('past');
    }
  })


  // local storage
  $("#hour-9 .description").val(localStorage.getItem("9AM"));
  $("#hour-10 .description").val(localStorage.getItem("10AM"));
  $("#hour-11 .description").val(localStorage.getItem("11AM"));
  $("#hour-12 .description").val(localStorage.getItem("12PM"));
  $("#hour-13 .description").val(localStorage.getItem("1PM"));
  $("#hour-14 .description").val(localStorage.getItem("2PM"));
  $("#hour-15 .description").val(localStorage.getItem("3PM"));
  $("#hour-16 .description").val(localStorage.getItem("4PM"));
  $("#hour-17 .description").val(localStorage.getItem("5PM"));


});
