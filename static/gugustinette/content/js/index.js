// Update : added throttle to increase performance
window.addEventListener('scroll', throttle(parallax, 14));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

function parallax() {
  var scrolled = window.pageYOffset;

  var parallax = document.querySelector(".code-background-img");
  // You can adjust the 0.4 to change the speed
	var coords = (scrolled * 0.2) + 'px'
  parallax.style.transform = 'translateY(' + coords + ')';

  var parallax = document.querySelector(".code-background-3");
  // You can adjust the 0.4 to change the speed
	var coords = (scrolled * 0.25) + 'px'
  parallax.style.transform = 'translateY(' + coords + ')';

  parallax = document.querySelectorAll(".code-background-1");
  // You can adjust the 0.4 to change the speed
	var coords = (scrolled * 0.4) + 'px'
  parallax[0].style.transform = 'translateY(' + coords + ')';
  parallax[1].style.transform = 'translateY(' + coords + ')';

  parallax = document.querySelectorAll(".code-background-2");
  // You can adjust the 0.4 to change the speed
	var coords = (scrolled * 0.3) + 'px'
  parallax[0].style.transform = 'translateY(' + coords + ')';
  parallax[1].style.transform = 'translateY(' + coords + ')';
};