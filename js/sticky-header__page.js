$(function () {
  var $win2 = $(window),
    $fv2 = $(".p-fv2");
  $header2 = $(".l-header");
  (fvHeight2 = $fv2.outerHeight()),
    (fixedClass2 = "is-fixed3"),
    (changeColor2 = "is-fixed4");
  $win2.on("load scroll", function () {
    var value = $(this).scrollTop();
    if ($win2.width() > 300)
      if (value > fvHeight2) {
        $header2.addClass(fixedClass2);
        $(".l-header__inner-left").children("img").addClass(changeColor2);
        $(".p-nav-list").children("li").addClass(changeColor2);
        $(".c-ham-btn").addClass(changeColor2);
      } else {
        $header2.removeClass(fixedClass2);
        $(".l-header__inner-left").children("img").removeClass(changeColor2);
        $(".p-nav-list").children("li").removeClass(changeColor2);
        $(".c-ham-btn").removeClass(changeColor2);
      }
  });
});
