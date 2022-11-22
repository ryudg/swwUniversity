/* 사이트맵 토글 버튼, 스크롤 up 버튼, 스크롤 헤더 색상 변경 */

$(function () {
  $(".header-main-list-open").on("click", function () {
    $(".sitemap").toggleClass("active");
  });
  $(".sitemap-close").on("click", function () {
    $(".sitemap").toggleClass("active");
  });
  $(window).scroll(function () {
    let scrollT = $(window).scrollTop();
    //if (scrollT > 100) 에서 수정함
    if (scrollT >= 100) {
      $(".header-main").addClass("active");
      $(".header-sub").addClass("active");
      $(".upbtn").addClass("active");
    } else {
      $(".header-main").removeClass("active");
      $(".header-sub").removeClass("active");
      $(".upbtn").removeClass("active");
    }
  });
});
/* 헤더네비게이션 검정배경 */
$(function () {
  $(window).scroll(function () {
    let scrollT2 = $(window).scrollTop();
    if (scrollT2 < 100) {
      $(".header-main-list-depth2-box").addClass("active");
      $(".header-main-list-depth2-list li a").addClass("active");
      $("#headerlogo").attr("src", "./images/logo/logomainwhite.png");
    } else {
      $(".header-main-list-depth2-box").removeClass("active");
      $(".header-main-list-depth2-list li a").removeClass("active");
      $("#headerlogo").attr("src", "./images/logo/logomain.png");
    }
  });
});

/* main-visual background-img */
$(function () {
  let bgImg = [
    "./images/mainvisual/mainvisual01.png",
    "./images/mainvisual/mainvisual02.png",
    "./images/mainvisual/mainvisual03.png",
  ];
  let bgImgNum = 0;
  setInterval(function () {
    bgImgNum++;
    if (bgImgNum >= bgImg.length) {
      bgImgNum = 0;
    }
    $(".main-visual").css({
      "background-image": `url(${bgImg[bgImgNum]})`,
    });
  }, 5000);
});

/* mobile site map btn */
$(function () {
  let btn1 = $(".sitemap-list-mobile-depth1-btn1");
  let btn1Box = $(".sitemap-list-mobile-depth1-btn1-open");
  let btn2 = $(".sitemap-list-mobile-depth1-btn2");
  let btn2Box = $(".sitemap-list-mobile-depth1-btn2-open");
  let btn3 = $(".sitemap-list-mobile-depth1-btn3");
  let btn3Box = $(".sitemap-list-mobile-depth1-btn3-open");
  let btn4 = $(".sitemap-list-mobile-depth1-btn4");
  let btn4Box = $(".sitemap-list-mobile-depth1-btn4-open");

  btn1.on("click", function () {
    btn2Box.removeClass("active");
    btn3Box.removeClass("active");
    btn4Box.removeClass("active");
    btn1Box.addClass("active");
  });
  btn2.on("click", function () {
    btn1Box.removeClass("active");
    btn3Box.removeClass("active");
    btn4Box.removeClass("active");
    btn2Box.addClass("active");
  });
  btn3.on("click", function () {
    btn1Box.removeClass("active");
    btn2Box.removeClass("active");
    btn4Box.removeClass("active");
    btn3Box.addClass("active");
  });
  btn4.on("click", function () {
    btn1Box.removeClass("active");
    btn2Box.removeClass("active");
    btn3Box.removeClass("active");
    btn4Box.addClass("active");
  });
});

/* section notice scroll */
$(function () {
  $(window).scroll(function () {
    let scrollT3 = $(window).scrollTop();
    console.log(scrollT3);
    if (scrollT3 > 800 && scrollT3 < 2400) {
      $(".section-notice").addClass("active");
    } else {
      $(".section-notice").removeClass("active");
    }
  });
});

/* slick */
$(function () {
  $(".center").slick({
    centerMode: true,
    centerPadding: "40px",
    slidesToShow: 3,
    speed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
