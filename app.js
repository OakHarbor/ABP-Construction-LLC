/* jQuery for the navigation animation */



  /* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
    const htmlGrab = document.querySelector("html"); 
    const $navbarMenu = $(".navbar-menu");
    const getSidebar = document.querySelector(".navbar-menu");
    const getSidebarUL = document.querySelector(".side-nav ul");
    const getSidebarLinks = document.querySelectorAll(".side-nav a");
    const getSidebarVisibility = document.querySelector(".side-nav");
    const hamburger = document.querySelector('.hamburger');

    hamburger.classList.toggle('is-active');

    if (toggleNavStatus === false) {

      getSidebarVisibility.style.visibility = "visible";
      getSidebar.style.overflow = "visible";

      getSidebarLinks.forEach((item, index)=>{
        console.log(item);
        item.style.opacity = "1";
        item.style.visibility = "visible";
        });
      getSidebar.style.width = "60%";
      getSidebar.style.overflow = "visible";
      htmlGrab.classList.add("clicked");
      $navbarMenu.addClass("clicked")
      toggleNavStatus = true;
    } 

    else if (toggleNavStatus === true) {

         getSidebarLinks.forEach((item, index)=>{
          item.style.opacity = "0";
          item.style.transitionDelay = "0s";
          item.style.visibility = "hidden";
         });
        getSidebar.style.overflow = "visible";
        getSidebar.style.width = "0";
        $navbarMenu.removeClass("clicked")
        htmlGrab.classList.remove("clicked");
        toggleNavStatus = false;
    }
}