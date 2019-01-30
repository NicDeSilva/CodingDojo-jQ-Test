
$(document).ready(function(){
$( "button" ).click(function() {
    $(("div").children("p") ).addClass( "red" );
  });

  $( "button" ).click(function() {
    $( this ).slideToggle();
    console.log("slide;")
  });
});