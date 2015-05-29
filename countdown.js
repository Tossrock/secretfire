var burnDate = new Date('2015-09-05T21:00:00');

var _second = 1000;
var _minute = 60 * _second;
var _hour = 60 * _minute;
var _day = 24 * _hour;
var timer;

function showRemaining() {
  var now = new Date();

  var distanceToBurn = burnDate - now;

  if (distanceToBurn < 0) {
    clearInterval(timer);
    document.getElementById('countdown').innerHTML = 'FUCK YER BURN';

    return;
  }

  days = Math.floor(distanceToBurn / _day);
  hours = Math.floor((distanceToBurn % _day) / _hour);
  minutes = Math.floor(((distanceToBurn % _day) % _hour) / _minute);
  seconds = Math.floor((((distanceToBurn % _day) % _hour) % _minute) / _second);

  document.getElementById('countdown').innerHTML = '<b>' + days + '</b>' + ' days ';
  document.getElementById('countdown').innerHTML += '<b>' + hours + '</b>' + 'hrs ';
  document.getElementById('countdown').innerHTML += '<b>' + minutes + '</b>' + 'mins ';
  document.getElementById('countdown').innerHTML += '<b>' + seconds + '</b>' + 'secs';
  document.getElementById('countdown').innerHTML += '<b>' + '<br>till the man burns';
}
