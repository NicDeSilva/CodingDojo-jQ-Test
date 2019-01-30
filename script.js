
$(document).ready(function(){
$( "button" ).click(function() {
    $(("div").children("p") ).addClass( "red" );
  });

  $( "button" ).click(function() {
    $( "img" ).slideToggle( "slow",function()
    {
      $("img").show();
    });
    console.log("slide;")
  });
});