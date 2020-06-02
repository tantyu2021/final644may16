
// ********** start script for navigation 
function openNav() {
    closeNavAll();
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("navbar").style.marginLeft = "0%";
    document.getElementById("mainContent").style.marginLeft = "25%";
    document.getElementById("aboveNavbar").style.display="none";
  }
  function openNav2() {
    closeNavAll();
    document.getElementById("mySidebar2").style.width = "25%";
    document.getElementById("navbar").style.marginLeft = "0%";
    document.getElementById("mainContent").style.marginLeft = "25%";
    document.getElementById("aboveNavbar").style.display="none";
  }
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("navbar").style.marginLeft= "0";
    document.getElementById("mainContent").style.marginLeft = "0%";
  }
  function closeNav2() {
    document.getElementById("mySidebar2").style.width = "0";
    document.getElementById("navbar").style.marginLeft= "0";
    document.getElementById("mainContent").style.marginLeft = "0%";
  }
  function closeNavAll() {
    document.getElementById("mySidebar2").style.width = "0";
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("navbar").style.marginLeft= "0";
    document.getElementById("mainContent").style.marginLeft = "0%";
    document.getElementById("aboveNavbar").style.display="block";
  }
  
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {stickyNavFunction()};
  
  // Get the navbar
  var navbar = document.getElementById("navbar");
  
  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;
  
  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function stickyNavFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  // ********** end script for navigation ********************* 