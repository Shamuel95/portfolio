//mixitup

var mixer = mixitup('.grid-Portfolio-container');

//scrollify

$(function() {
          $.scrollify({
            section : ".scrollify",
            setHeights: false,
            updateHash: false,
          });
        });

//hamburger Menu

function openMenu(){
  document.getElementById('nav-bar').style.height = "100%";
}
function closeMenu(){
  document.getElementById('nav-bar').style.height = "0%";
}
//Smooth Scroll

$(function(){
  $('.menu-items a,scroll-down a').on('click',function(){
    $('html, body').animate({
    scrollTop: $($.attr(this,'hscroll-down aref')).offset().top
  }, 1000);
  return false;
  });
});
