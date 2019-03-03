  
  (function ($) {
   "use strict";
   jQuery(document).ready(function($){


    /***************************
      HEADER AREA NAVBAR ALL JS
      ****************************/

          //Sticky nav start
          $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 400) {
              $(".sticky").removeClass("scroll-header");
            } else {
              $(".sticky").addClass("scroll-header");
            }
          });
          //Sticky nav end


          // slicknav mobile and tablet costom menu

          $('ul#navigation').slicknav({
            prependTo: "#mobile_menu"
          });
          //slick nav end









/*******************************
           SLIDER 
           ********************************/  

           $('.slider-active').owlCarousel({
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:4000,
            nav:true,
            animateOut: 'slideOutRight',
            animateIn: 'fadeInLeft',
            smartSpeed:950,
            responsive:{
              0:{
                items:1
              },
              600:{
                items:1
              },
              1000:{
                items:1
              }
            }
          })
      /*******************************
        BARFILLER 
        ********************************/ 

        $('#bar1').barfiller({
         barColor: '#006CFF'
       });

        $('#bar2').barfiller({
          barColor: '#006CFF'
        });

        $('#bar3').barfiller({
          barColor: '#006CFF'
        });
        
       /*******************************
        PORTFOLIO
        ********************************/ 


       // IMAGE LOADED JQUERY START     
       $('.grid').imagesLoaded(function () {
              // images have loaded
              //PORTFOLIO START  
              var $grid = $('.grid').isotope({
                itemSelector: '.gallery',
                percentPosition: true,
                masonry: {
                      // use outer width of grid-sizer for columnWidth
                      columnWidth: '.gallery'
                    }
                  })
              // filter items click
              $('.portfolio-filter').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                  filter: filterValue
                });
              });
              // filter items on button click
              $('.portfolio-filter').on('click', 'li', function () {
                $(this).addClass('active').siblings().removeClass('active');
              });
              //PORTFOLIO END
            });
          // IMAGE LOADED JQUERY END    

       /*******************************
        COUNTER JS
        ********************************/ 

          // JQUERY COUNTER
          $('.counter').counterUp({
            delay: 10,
            time: 3000
          });
          //JQUERY COUNTER END   


        //owl corosol  Clints
        $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 120,
          nav: false,
          autoplay: true,
          autoplayTimeout: 2000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1000: {
              items: 6
            }
          }

        })

          //owl corosol Clints end  










          
   }); //DOCUMENT.READY BACKET CLOSE
   
   //WINDOW.LOADED START
   jQuery(window).load(function(){

    //PRELOADING START
    $("#preload").delay(350).fadeOut("slow")
    //PRELOADING END 


  }); //WINDOW.LOAD JS BACKET CLOSE






 }(jQuery)); //JQUERY MAIN  BACKET CLOSE






      //JS FILE FOR NAVBAR ACTIVE AND SMOOTHSCROLL jS START 
      
      $(document).ready(function () {
        $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').each(function () {
        $(this).removeClass('active');
      })
      $(this).addClass('active');
      
      var target = this.hash,
      menu = target;
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
      }, 700, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });
  });



      function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#navigation a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navigation ul li a').removeClass("active");
            currLink.addClass("active");
          }
          else{
            currLink.removeClass("active");
          }
        });
      }
//JS FILE FOR NAVBAR ACTIVE AND SMOOTHSCROLL jS END       

