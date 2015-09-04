

$(document).ready(function(){

     $("#container").hide();  
  
    
    $(".btn1").click(function(){
        $(".try").show();
        $(".opening").hide();
        $("#container").hide();  
    });
    
      $(".btn2").click(function(){
            $("#pow").animate({
                    "width": "400px",
                    "height": "400px",
                    "left": "150px",
                    "top":  "150px"
             }, 500 );

        $(".tryAgain").show();
        $(".try").hide();
        $("#container").hide();
    });
    
     $(".btn3").click(function(){
         $("#bam").animate({
                    "width": "400px",
                    "height": "400px",
                    "right": "150px",
                    "top":  "150px"
             }, 500 );
        $(".hidden").show();
        $(".tryAgain").hide();
        $("#container").hide();
    });
     $(".btn4").click(function(){
        $("#container").show();
        $(".hidden").hide();
        $("body").css("background-image","url('Images/terrarium.jpg')");
    });

     

    
    $('#diffuser').hover(function() {
        $("#diffuser").addClass('transition');
    
    }, function() {
        $("#diffuser").removeClass('transition');
    });

    
    
    $('#paisley').hover(function() {
        $("#paisley").addClass('transition');
    
    }, function() {
        $("#paisley").removeClass('transition');    
    });


     $('#mothlab').hover(function() {
        $("#mothlab").addClass('transition');
    
    }, function() {
        $("#mothlab").removeClass('transition');
    });


  $('#skyland').hover(function() {
        $("#skyland").addClass('transition');
    
    }, function() {
        $("#skyland").removeClass('transition');
    });


 $('#diffuser2').hover(function() {
        $("#diffuser2").addClass('transition');
    
    }, function() {
        $("#diffuser2").removeClass('transition');
    });
  

});
