/* 더보기 기능 */
$(function () {
  $(".qwe").on("click", function () {
    let a = $(".sns-banner .sns-banner-title-video .asd");
    let b = a.toggleClass("active");
    if (b.hasClass("active") == true) {
      $(this).text("축소");
    } else {
      $(this).text("더보기");
    }
  });
});
