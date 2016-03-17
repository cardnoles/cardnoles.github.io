

$(document).ready(function(){
  console.log("this is connected");

function fromRight() {
  $('.slider2').stop().animate({
      right: 0
    }, 400);
  };

  function fromLeft() {
    $('.slider1').stop().animate({
      left: 0
    }, 400);
    };



    $('#home').on("click", function(){
      fromRight();
      fromLeft();
    });

});






