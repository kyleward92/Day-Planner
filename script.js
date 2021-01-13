
var currentDate = moment().format('dddd, MMMM Do YYYY, h:mm a');
var currentHour = moment().hour();
var presentTime = $('#currentDay').text(currentDate);
var nine = $('#9am').val(9);
var ten = $('#10am').val(10);
var eleven = $('#11am').val(11);
var twelve = $('#12pm').val(12);
var one = $('#1pm').val(1);
var two = $('#2pm').val(2);
var three = $('#3pm').val(3);
var four = $('#4pm').val(4);
var five = $('#5pm').val(5);
var six = $('#6pm').val(6);
var seven = $('#7pm').val(7);

var saveBtn = $('.saveBtn');



var timeBlocks = [nine, ten, eleven, twelve, one, two, three, four, five, six, seven]

// console.log('currentHour:', currentHour)







function checkTime() {
  for (var i = 0; i < timeBlocks.length; i++) {
    var hour = parseInt(timeBlocks[i].val())
    
    if (currentHour > hour) {
      $(timeBlocks[i]).addClass('past');
    console.log(timeBlocks[i].val());

    }

    else if  (currentHour = hour) {
      $(timeBlocks[i]).removeClass('past');
      $(timeBlocks[i]).addClass('present');

    } else  {
      $(timeBlocks[i]).removeClass('present');
      $(timeBlocks[i]).removeClass('past');

      $(timeBlocks[i]).addClass('future');
      
    }
    }

  
  
};





  
$('.saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, value);
});



$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#1 .description').val(localStorage.getItem('1'));
$('#2 .description').val(localStorage.getItem('2'));
$('#3 .description').val(localStorage.getItem('3'));
$('#4 .description').val(localStorage.getItem('4'));
$('#5 .description').val(localStorage.getItem('5'));
$('#6 .description').val(localStorage.getItem('6'));
$('#7 .description').val(localStorage.getItem('7'));

function newFunction() {
    if (currentHour < presentTime) {
        $(textEntry).addClass("past");
    } else if (currentHour > presentTime) {
        $(textEntry).addClass("future");
    } else {
        $(textEntry).addClass("present");
    }
}
;


