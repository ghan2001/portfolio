
$(document).ready(function(){
alert('hello');

  $(window).scroll(function(){
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      
    //   scroll-up button show/hide script
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });
  $('.card').hover(function(){

    $('.card').animate({
        left:'150px',
        // width:'+10%',
        fontSize:'25px',
        // margin:'20px',
        color :'green'
        
},1000)

    
  })


   // typing text animation script



   var typed = new Typed(".typing-1", {
      strings: ["Student", "Front End Develope"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
 

  var typed = new Typed(".typing-2", {
      strings: ["Student", "Front End Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
});   
