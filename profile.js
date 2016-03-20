

$(document).ready(function(){
  console.log("this is connected");

  function clearHome() {
    $('.slider1').stop().animate({
      left: -1850
    }, 800);
    $('.slider2').stop().animate({
      right: -1850
    }, 800);
  };

  function clearAboutMe() {
    $('.slider3').stop().animate({
      left: -650
    }, 400);
    $('.slider4').stop().animate({
      right: -650
    }, 400);
  };

  function clearEducation() {
    $('.slider5').stop().animate({
      left: -1050
    }, 400);
    $('.slider6').stop().animate({
      right: -1050
    }, 400);
  };

  function clearInterests() {
    $('.slider7').stop().animate({
      left: -1450
    }, 400);
    $('.slider8').stop().animate({
      right: -1450
    }, 400);
  };


  function fromLeft() {
    $('.slider1').stop().animate({
      left: 0
    }, 400);
  };

  function fromRight() {
    $('.slider2').stop().animate({
      right: 0
    }, 400);
  };

  function fromLeft2() {
    $('.slider3').stop().animate({
      left: 0
    }, 400);
  };

  function fromRight2() {
    $('.slider4').stop().animate({
      right: 0
    }, 400);
  };

  function fromLeft3() {
    $('.slider5').stop().animate({
      left: 0
    }, 400);
  };

  function fromRight3() {
    $('.slider6').stop().animate({
      right: 0
    }, 400);
  };

  function fromLeft4() {
    $('.slider7').stop().animate({
      left: 0
    }, 400);
  };

  function fromRight4() {
    $('.slider8').stop().animate({
      right: 0
    }, 400);
  };


    $('#home').on("click", function(){
      fromRight();
      fromLeft();
      clearAboutMe();
      clearEducation();
      clearInterests();
    });

    $('#aboutMe').on("click", function(){
      fromRight2();
      fromLeft2();
      clearHome();
      clearEducation();
      clearInterests();
    });

    $('#education').on("click", function(){
      fromRight3();
      fromLeft3();
      clearHome();
      clearAboutMe();
      clearInterests();
    });

     $('#interests').on("click", function(){
      fromRight4();
      fromLeft4();
      clearHome();
      clearAboutMe();
      clearEducation();
    });

});






