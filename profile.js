

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

  function fromRight2() {
    $('.slider4').stop().animate({
      right: 0
    }, 400);
  };

  function fromLeft2() {
    $('.slider3').stop().animate({
      left: 0
    }, 400);
    };

    $('#home').on("click", function(){
      fromRight();
      fromLeft();
    });

    $('#aboutMe').on("click", function(){
      fromRight2();
      fromLeft2();
    });

});






