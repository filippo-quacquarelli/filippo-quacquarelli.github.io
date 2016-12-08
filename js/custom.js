

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/
  $(document).ready(function(){
    $( "#menu-tpl" ).load( "/mysite/templates/nav.html" );
    $( "#portfolio-tpl" ).load( "/mysite/templates/portfolio.html" );
    $( "#footer-tpl" ).load( "/mysite/templates/footer.html" );
  });

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });

