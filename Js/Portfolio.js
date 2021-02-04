$(document).ready(function(){
  var nice = $("main").niceScroll();
  var nice1 = $("section .container-fluid").niceScroll();

  $(".scHome").css("display","block");
  $("[data-target='scAbout']").click(function(){    
    $("section .row").fadeOut(1500);
    $(".scAbout").fadeIn(1500);
  }); 
  
  $("[data-target='scHome']").click(function(){
    $(".scHome").fadeIn(1500);
    $(".scHome").siblings().fadeOut(1500);
  });   

  $("[data-target='scResume']").click(function(){    
    $("section .row").fadeOut(1500);
    $(".scResume").fadeIn(1500);
  }); 

  $("[data-target='scService']").click(function(){    
    $("section .row").fadeOut(1500);
    $(".scService").fadeIn(1500,function(){
      $(".scService").css("display","flex");
    });
  });

  $("[data-target='scPorto']").click(function(){    
    $("section .row").fadeOut(1500);
    $(".scPorto").fadeIn(1500,function(){
      $(".scPorto").css("display","flex");
    });
  });
  
  $("[data-target='scBlog']").click(function(){    
    $("section .row").fadeOut(1500);
    $(".scBlog").fadeIn(1500,function(){
      $(".scBlog").css("display","flex");
    });
  });
  
  $("[data-target='scContact']").click(function(){    
    $("section .row").fadeOut(1500);
    $(".scContact").fadeIn(1500,function(){
      $(".scContact").css("display","flex");
    });
  });
  
  
  for(var i=0; i<8; i++){
    $("nav a").eq(i).click(function(){
      $(this).css("color","#0dcdbd");
      $(this).siblings().css("color","#343a40");
      $(this).children(":first").animate({width: '20px'}, 500);
      $(this).siblings().find("span").animate({width: '0px'}, 500);    
    });
  }; 
  
  $(".btnToggler").click(function(){
    $("nav").slideToggle(1000);
  });
  
});