var showNav = document.getElementById('nav-toggle');
var isOpen = false;

showNav.addEventListener('click', function() {
openNav()
});
function openNav() {
  document.getElementsByClassName("colapse-navbar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
