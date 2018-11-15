$(document).ready(function(){
    $('.header').height($(window).height());
   
    $(".navbar a").click(function(){
        $("body, html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)
     
    })
    
    $(".navbar-nav li a").click(function(event) {
          $(".navbar-collapse").collapse('hide');
    });
      
   
})

