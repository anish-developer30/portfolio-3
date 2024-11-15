var dt = new Date();

function Reloade() {
  dt.setDate(1); // set 1 day

  // console.log(dt.getDay()); // return 1 day of weeks
  var day = dt.getDay();

  var today = new Date(); // current Date
  // console.log(today);
  document.getElementById("date_str").innerHTML = dt.toDateString(); // return string date

  // array of months
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Navember",
    "December",
  ];
  // console.log(dt.getMonth()); // only month number returm /  january = 0

  // print date and month string = dt.getMonth(); + months array
  document.getElementById("month").innerHTML = months[dt.getMonth()];

  var endDate = new Date(
    dt.getFullYear(), //return year
    dt.getMonth() + 1,
    0 // return last date of current month
  ).getDate(); // return only endDate number

  var prevDate = new Date(
    dt.getFullYear(), //return year
    dt.getMonth(),
    0 // return last date of previous month
  ).getDate(); // return only endDate number

  // print previous date by for loop

  var cells = "";

  for (x = day; x > 0; x--) {
    cells += "<div class='prev_day'>" + (prevDate - x + 1) + "</div>";
  }

  // print  date by for loop

  for (i = 1; i <= endDate; i++) {
    if (i == today.getDate() && dt.getMonth() == today.getMonth()) {
      cells += "<div class='today'>" + i + "</div>";
    } else {
      cells += "<div>" + i + "</div>";
    }
  }
  document.getElementsByClassName("days")[0].innerHTML = cells;
}
function moveMonth(para) {
  if (para == "prev") {
    dt.setMonth(dt.getMonth() - 1);
  } else if (para == "next") {
    dt.setMonth(dt.getMonth() + 1);
  }
  Reloade();
}
