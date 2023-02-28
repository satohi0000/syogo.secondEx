$("#c-BTN1").on("click", function () {
  $(this).toggleClass("active");
  $(".p-nav-list2").toggleClass("open");
  $(".p-mask").toggleClass("open1");
  $(".p-fv h6").toggleClass("u-flex__no");
  $("html").toggleClass("no_scroll");
  $(".l-header").toggleClass("c-filter");
  return false;
});

$(".p-nav-item2 a").on("click", function () {
  $("#c-BTN1").toggleClass("active");
  $(".p-nav-list2").toggleClass("open");
  $(".p-mask").toggleClass("open1");
  $("body").toggleClass("no_scroll");
  return false;
});

$(function () {
  // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
  $('a[href^="#"]').click(function () {
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = -100;
    // スクロールの速度（ミリ秒）
    var speed = 1000;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href = $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? "html" : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

$("#menu1").on("click", function () {
  $("#menu1").css("text-decoration", "underline");
  $("#menu2").css("text-decoration", "none");
  $(".p-article3__other").css("display", "none");
  $(".p-article3__info").css("display", "flex");
  return false;
});

$("#menu2").on("click", function () {
  $("#menu2").css("text-decoration", "underline");
  $("#menu1").css("text-decoration", "none");
  $(".p-article3__other").css("display", "flex");
  $(".p-article3__info").css("display", "none");
  return false;
});

$(function () {
  //is-showクラスのつけ外しだけでモーダル表示非表示できるようにしています
  //アニメーションはcss側に記載しています
  $("#openModal").on("click", function () {
    $("#modalArea").toggleClass("is-show");
    $("html").toggleClass("no_scroll");
    $(".p-fv h6").toggleClass("u-flex__no");
  });
  $("#closeModal").on("click", function () {
    $("#modalArea").toggleClass("is-show");
    $("html").toggleClass("no_scroll");
    $(".p-fv h6").toggleClass("u-flex__no");
  });
  $("#modalBg").on("click", function () {
    $("#modalArea").toggleClass("is-show");
    $("html").toggleClass("no_scroll");
    $(".p-fv h6").toggleClass("u-flex__no");
  });
});

$(document).ready(function () {
  $("#form").submit(function (event) {
    var formData = $("#form").serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScpTaDaJ24r0rbmgBYtnMFZnl_WTUtWyt4c-51OrTSbygTrIw/formResponse",
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".c-form__end-message").slideDown();
          $(".c-button").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".c-form__false-message").slideDown();
        },
      },
    });
    event.preventDefault();
  });
});

$(document).ready(function () {
  const $submitBtn = $("#js-submit");
  $("#form input,#form textarea").on("change", function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $("#form #calender").val() !== true
    ) {
      $submitBtn.prop("disabled", false);
    } else {
      $submitBtn.prop("disabled", true);
    }
  });
});

flatpickr("#calender", {
  locale: "ja",
  minDate: "today",
  mode: "multiple",
  altFormat: "Y年n月j日",
  dateFormat: "Y-m-d",
});

AOS.init({
  offset: 100,
  duration: 1000,
  easing: "ease-in-sine",
  delay: 100,
});

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
        $(".header-logo").addClass(changeColor);
        $(".p-nav-list").children("li").addClass(changeColor);
        $(".c-ham-btn").addClass(changeColor);
      } else {
        $header.removeClass(fixedClass);
        $(".header-logo").removeClass(changeColor);
        $(".p-nav-list").children("li").removeClass(changeColor);
        $(".c-ham-btn").removeClass(changeColor);
      }
  });
});

$(function () {
  var $win2 = $(window),
    $fv2 = $(".p-fv2");
  $header2 = $(".l-header");
  (fvHeight2 = $fv2.outerHeight()),
    (fixedClass2 = "is-fixed3"),
    (changeColor2 = "is-fixed4"),
    $win2.on("load scroll", function () {
      var value = $(this).scrollTop();
      if ($win2.width() > 300)
        if (value > fvHeight2) {
          $header2.addClass(fixedClass2);
          $(".header-logo").addClass(changeColor2);
          $(".p-nav-list").children("li").addClass(changeColor2);
          $(".c-ham-btn").addClass(changeColor2);
        } else {
          $header2.removeClass(fixedClass2);
          $(".header-logo").removeClass(changeColor2);
          $(".p-nav-list").children("li").removeClass(changeColor2);
          $(".c-ham-btn").removeClass(changeColor2);
        }
    });
});
