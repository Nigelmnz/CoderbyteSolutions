// Given a time range string, find the number of minutes between the two times

function CountingMinutesI(str) { 
  //Format is [all,hr,min,period,hr,min,period,...]
  var data = /([0-9]{1,2}):([0-9]{1,2})(am|pm)-([0-9]{1,2}):([0-9]{1,2})(am|pm)/.exec(str); 
  
  var time1 = (parseInt(data[1])*60 % 60*12) + parseInt(data[2]) + (data[3] === "pm" ? 60*12 : 0);
  var time2 = (parseInt(data[4])*60 % 60*12) + parseInt(data[5]) + (data[6] === "pm" ? 60*12 : 0);

  return (60*24 + time2 - time1) % 60*24; //1440 mins in a day
}

console.log(CountingMinutesI("11:59pm-12:00am") === 1);
console.log(CountingMinutesI("5:20pm-6:30pm") === 70);
console.log(CountingMinutesI("12:30pm-12:00am") === 690);
console.log(CountingMinutesI("1:23am-1:08am") === 1425);