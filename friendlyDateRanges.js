function makeFriendlyDates(arr) {
  var regex = /[0-9]/g;
 // var str = arr.split('');
  var nums = [arr[0].match(regex)];
  nums.push(arr[1].match(regex));

  function getYear(nums) {
    var year = [];

    for(var i = 0; i < 4; i++) {
     year += nums[i];
    }
    return year;
  }

  function getMonth(nums) {
    var month = [];
    for(var i = 4; i < 6; i++) {
      month += nums[i];
    }
    for(var j = 1; j <= 12; j++) {
      if(month == j) {
        month=j;
      }
    }
    return month;
  }

  function getDay(nums) {
    var day = [];
    for(var i = 6; i < 8; i++) {
      day += nums[i];
    }
    for(var j = 1; j <= 31; j++) {
      if(day == j) {
        day = j;
      }
    }
    return day;
  }

  function getMonthName(month) {
    var monthName = '';
    switch (month) {
      case 1 :
        monthName = "January";
        break;
      case 2 :
        monthName = "February";
        break;
      case 3:
        monthName = "March";
        break;
      case 4:
        monthName = "April";
        break;
      case 5:
        monthName = "May";
        break;
      case 6:
        monthName = "June";
        break;
      case 7:
        monthName = "July";
        break;
      case 8:
        monthName = "August";
        break;
      case 9:
        monthName = "September";
        break;
      case 10:
        monthName = "October";
        break;
      case 11:
        monthName = "November";
        break;
      case 12:
        monthName = "December";
        break;
    }
    return monthName;
  }

  function getOrdinal(day) {
    switch (day) {
      case 1:
        day = "1st";
        break;
      case 2:
        day = "2nd";
        break;
      case 3:
        day = '3rd';
        break;
      case 4:
        day = '4th';
        break;
      case 5:
        day = '5th';
        break;
      case 6:
        day = '6th';
        break;
      case 7:
        day = "7th";
        break;
      case 8:
        day = "8th";
        break;
      case 9:
        day = '9th';
        break;
      case 10:
        day = "10th";
        break;
      case 11:
        day = "11th";
        break;
      case 12:
        day = "12th";
        break;
      case 13:
        day = '13th';
        break;
      case 14:
        day = '14th';
        break;
      case 15:
        day = '15th';
        break;
      case 16:
        day = "16th";
        break;
      case 17:
        day = '17th';
        break;
      case 18:
        day = "18th";
        break;
      case 19:
        day = "19th";
        break;
      case 20:
        day = "20th";
        break;
      case 21:
        day = "21st";
        break;
      case 22:
        day = "22nd";
        break;
      case 23:
        day = "23rd";
        break;
      case 24:
        day = "24th";
        break;
      case 25:
        day = "25th";
        break;
      case 26:
        day = "26th";
        break;
      case 27:
        day = '27th';
        break;
      case 28:
        day = "28th";
        break;
      case 29:
        day = '29th';
        break;
      case 30:
        day = "30th";
        break;
      case 31:
        day = '31st';
        break;
    }
    return day;
  }

  var Date = function(arr) {
    this.year = getYear(arr);
    this.month = getMonth(arr);
    this.monthName = getMonthName(this.month);
    this.day = getDay(arr);
    this.ordinal = getOrdinal(this.day);
  };

  var date1 = new Date(nums[0]);
  var date2 = new Date(nums[1]);

  return date1.ordinal;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
