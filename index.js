let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
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
}


function displayw(){
  document.getElementById("a61").style.display="block";
  document.getElementById("a62").style.display="none";
  document.getElementById("a63").style.display="none";
  document.getElementById("a511").style.color="orange";
  document.getElementById("a522").style.color="black";
  document.getElementById("a533").style.color="black";
    
    
}
function displayg(){
  document.getElementById("a61").style.display="none";
  document.getElementById("a62").style.display="block";
  document.getElementById("a63").style.display="none";
  document.getElementById("a511").style.color="black";
  document.getElementById("a522").style.color="orange";
  document.getElementById("a533").style.color="black";

}
function displaywc(){
  document.getElementById("a61").style.display="none";
  document.getElementById("a62").style.display="none";
  document.getElementById("a63").style.display="block";
  document.getElementById("a511").style.color="black";
  document.getElementById("a522").style.color="black";
  document.getElementById("a533").style.color="orange";
}
