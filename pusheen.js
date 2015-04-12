/*!
 * pusheen.js
 */

var SPEED = 0.45;

var img = document.createElement('img');
var position = -900;
var catAnimate;
var activateBtn = document.getElementById('activate');

img.src = "http://3.bp.blogspot.com/-ZrIwoH6g36U/UsfI4ZaJM-I/AAAAAAAAJTY/qj7z8PaXG0g/s1600/Pusheen04.png";
img.style.height = "50%";
img.style.position = "fixed";
img.style.right = position + 100;
img.style.bottom = "30";

if (activateBtn) {
  activateBtn.addEventListener('click', function() {
    catAnimate = setInterval(moveTheCat, 30);
  })
}

var moveTheCat = function() {
  position *= SPEED;
  img.style.right = position + 150;
}

document.getElementsByTagName('html')[0].appendChild(img);
