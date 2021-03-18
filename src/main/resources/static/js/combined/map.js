$(function () {
    $(".menu-link").click(function () {
     $(".menu-link").removeClass("is-active");
     $(this).addClass("is-active");
    });
   });
   
   $(function () {
    $(".main-header-link").click(function () {
     $(".main-header-link").removeClass("is-active");
     $(this).addClass("is-active");
    });
   });
   
   const dropdowns = document.querySelectorAll(".dropdown");
   dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
     e.stopPropagation();
     dropdowns.forEach((c) => c.classList.remove("is-active"));
     dropdown.classList.add("is-active");
    });
   });
   
   $(".search-bar input")
    .focus(function () {
     $(".header").addClass("wide");
    })
    .blur(function () {
     $(".header").removeClass("wide");
    });
   
   $(document).click(function (e) {
    var container = $(".status-button");
    var dd = $(".dropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
     dd.removeClass("is-active");
    }
   });
   
   $(function () {
    $(".dropdown").on("click", function (e) {
     $(".content-wrapper").addClass("overlay");
     e.stopPropagation();
    });
    $(document).on("click", function (e) {
     if ($(e.target).is(".dropdown") === false) {
      $(".content-wrapper").removeClass("overlay");
     }
    });
   });
   
//    $(function () {
//     $(".status-button:not(.open)").on("click", function (e) {
//      $(".overlay-app").addClass("is-active");
//     });
//     $(".pop-up .close").click(function () {
//      $(".overlay-app").removeClass("is-active");
//     });
//    });
   
//    $(".status-button:not(.open)").click(function () {
//     $(".pop-up").addClass("visible");
//    });
   
//    $(".pop-up .close").click(function () {
//     $(".pop-up").removeClass("visible");
//    });
   
   const toggleButton = document.querySelector('.dark-light');
   
   toggleButton.addEventListener('click', () => {
     document.body.classList.toggle('light-mode');
   });

   let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('style');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('tis-active') : item.classList.remove('tis-active');
        })
    }

};


tab();
// var call = document.getElementById('button');
// if(call.click = true){
//     call.classList.add('open')
// }