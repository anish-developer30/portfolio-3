let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

function Start() {
  timer = true;
  mainFun();
}
function Stop() {
  timer = false;
}
function Reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;

  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}
function mainFun() {
  if (timer == true) {
    count = count + 1;
    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }

    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;

    if (hrString < 10) {
      hrString = "0" + hrString;
    }

    if (minString < 10) {
      minString = "0" + minString;
    }

    if (secString < 10) {
      secString = "0" + secString;
    }

    if (countString < 10) {
      countString = "0" + countString;
    }
    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;
    setTimeout("mainFun()", 10);
  }
}
