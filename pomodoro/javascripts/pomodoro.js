$(document).ready(function () {
  var sessionNum = 25;
  var breakNum = 5;

  //Sets initial value of the break and session timers.
  $("sessionNumber").html(sessionNum);
  $("breakNumber").html(breakNum);
  // Logic to adjust the break and session timers using the buttons.
  $(".breakUp").click(function () {
    breakNum += 1;
    $("breakNumber").html(breakNum);
  });
  $(".breakDown").click(function () {
    if(breakNum > 0){
      breakNum -= 1;
    } else {
      breakNum = 0;
    }
    $("breakNumber").html(breakNum);
  });
  $(".sessionUp").click(function () {
    sessionNum += 1;
    $("sessionNumber").html(sessionNum);
    $("sessionClock").html("<h2>" + sessionNum + ":00<h2><button>Start</button>");
  });
  $(".sessionDown").click(function () {
    if(sessionNum > 0) {
      sessionNum -= 1;
    } else {
      sessionNum = 0;
    }
    $("sessionNumber").html(sessionNum);
    $("sessionClock").html("<h2>" + sessionNum + ":00<h2><button>Start</button>");
  });


// Function to get the time from the break and sessison timers to apply to
// the clock later.
  function getTime(timer) {
    var minutes = timer;
    var seconds = 0;

    if(minutes < 10) {
      var timeHTML = "0" + minutes;
    } else {
      timeHTML = minutes;
    }
    timeHTML += ":";

    if(seconds < 10) {
      timeHTML += "0";
    }
    timeHTML += seconds;

    return timeHTML;
  }

  var sessionTime = getTime(sessionNum);
  var breakTime = getTime(breakNum);
  
});
