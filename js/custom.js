

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/
  $(document).ready(function(){
    $( "#menu-tpl" ).load( "http://filippoquacquarelli.it/templates/nav.html" );
    $( "#portfolio-tpl" ).load( "http://filippoquacquarelli.it/templates/portfolio.html" );
    $( "#footer-tpl" ).load( "http://filippoquacquarelli.it/templates/footer.html" );
  });

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });

