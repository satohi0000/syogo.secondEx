$(function () {
  var $win = $(window),
    $fv = $(".p-fv");
  $header = $(".l-header");
  (fvHeight = $fv.outerHeight()),
    (fixedClass = "is-fixed"),
    (changeColor = "is-fixed2");
  $win.on("load scroll", function () {
    var value = $(this).scrollTop();
    if ($win.width() > 300)
      if (value > fvHeight) {
        $header.addClass(fixedClass);
        $(".l-header__inner-left").children("img").addClass(changeColor);
        $(".p-nav-list").children("li").addClass(changeColor);
        $(".c-ham-btn").addClass(changeColor);
      } else {
        $header.removeClass(fixedClass);
        $(".l-header__inner-left").children("img").removeClass(changeColor);
        $(".p-nav-list").children("li").removeClass(changeColor);
        $(".c-ham-btn").removeClass(changeColor);
      }
  });
});
