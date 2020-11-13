//navigation scipts
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.display = "block";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  function navOnClick()
  {
    var navs = document.getElementById("mySidenav");
    var properties = window.getComputedStyle(navs, null);
    if(properties.width == "0px")
    {
      openNav();
      document.getElementById("mySidenav").style.display = "block";
    }
      else {
        closeNav();
      }
  }

  let check_window = window.matchMedia("(min-width: 1200px)");
  function reset_to_mobileView(format) {
  if (check_window.matches) 
  { 
    document.getElementById("mySidenav").style.width="auto";
    document.getElementById("mySidenav").style.display="block";
  } 
  else 
  {
    closeNav();
  }
}
reset_to_mobileView(check_window);
check_window.addListener(reset_to_mobileView);

var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 5000);
} 

function scrollToTypesofTea() {
  window.scrollTo(0, 650);
}

function scrollToBenefitsofTea() {
  
  window.scrollTo(0,3100);
}


function openURI(uri_link) {
    window.location.href = uri_link;
}




//index slideshow scripts
