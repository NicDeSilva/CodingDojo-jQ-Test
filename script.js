
$(document).ready(function(){
    $( ".add-class button" ).click(function() {
        $((".add-class p") ).addClass( "red" );
    });

  $( "button" ).click(function() {
    $( this ).slideToggle();
    console.log("slide;")
  });
});