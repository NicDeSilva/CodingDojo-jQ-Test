
$(document).ready(function(){
    $( ".add-class button" ).click(function() {
        $((".add-class p") ).addClass( "red" );
    });

  $( "button" ).click(function() {
    $( "img" ).slideToggle( "slow",function()
    {
      $("img").show();
    });
    console.log("slide;")
  });
});