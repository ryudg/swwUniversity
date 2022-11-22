/* 사이트맵 토글 버튼, 스크롤 up 버튼, 스크롤 헤더 색상 변경 */

$(function () {
  $(".header-main-list-open").on("click", function () {
    $(".sitemap").toggleClass("active");
  });
  $(".sitemap-close").on("click", function () {
    $(".sitemap").toggleClass("active");
  });
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
