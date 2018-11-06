//help animate navbar
document.addEventListener('DOMContentLoaded', window.onscroll = function() {myFunction()});

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;
console.log('sticky');
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

