
$(document).ready(function(){
    $( ".add-class button" ).click(function() {
        $((".add-class p") ).addClass( "red" );
    });

  $( ".toggle-img button" ).click(function() {
    $( ".toggle-img  img" ).slideToggle( "slow",function()
    {
        $(".toggle-img  img").show();
    });
    console.log("slide;")
  });

  $(".append-p button").click(function(){
  $( "#first" ).append( "<p>More text appended!</p>" );
  });


  $( ".slideDown-img button" ).click(function() {
    $( ".slideDown-img img" ).slideDown( "slow", function() {
    });
  });

  $( ".fadeOut-img button" ).click(function() {
    $( ".fadeOut-img img" ).fadeOut( "slow", function() {
    });
  });  

var show = false;
  $( ".showhide-img button" ).click(function() {
    if (show) { 
        $(".showhide-img img").show(); }    
    else{$(".showhide-img img").hide();}
    show = !show;
  }); 

  $(".before-p button").click(function(){
    $(".before-p p").before("New text added before!");
  });

  $(".html-div button").click(function(){
    $(".html-div p").html("<h3>I overwrote the paragraph element!</h3>");
  });
});