$(function () {
  $(".header-main-list-open").on("click", function () {
    $(".sitemap").toggleClass("active");
  });
  $(".sitemap-close").on("click", function () {
    $(".sitemap").toggleClass("active");
  });
  $(window).scroll(function () {
    let scrollT = $(window).scrollTop();
    if (scrollT > 100) {
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
