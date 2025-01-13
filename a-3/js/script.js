$(document).ready(function () {
  // alert("제이쿼리 실행")
  // 메뉴 슬라이드 영역
  $(".gnb > li").hover(
    function () {
      $(this).find(".depth2").stop().slideDown();
    },
    function () {
      $(this).find(".depth2").stop().slideUp();
    }
  );
  //   비주얼 슬라이드 영역
  // .siblings() 형제요소
  // 이미지1번만 보이게 하는 코드
  $(".slide-all>li").eq(0).siblings().hide();
  //   var 변수예약어
  var slideI = 0;
  setInterval(function () {
    if (slideI < 2) {
      slideI++;
    } else {
      slideI = 0;
    }
    $(".slide-all>li").eq(slideI).siblings().fadeOut();
    $(".slide-all>li").eq(slideI).fadeIn();
  }, 3000); //3000 - 3초
  //   공지사항 탭 메뉴
  $(".c1 h4").click(function () {
    // console.log("click")
    $(".c1 h4 , .c1 ul").removeClass("on");
    $(this).addClass("on").next("ul").addClass("on");
  });
  //   모달창 close
  $(".close").click(function () {
    $("#modal").fadeOut();
  });
  // 모달창 open
  $(".popup").click(function () {
    // console.log("click")
    $("#modal").fadeIn();
  });
});
