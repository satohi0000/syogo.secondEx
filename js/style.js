new Splide(".splide", {
  autoplay: true,
  interval: 5000,
  speed: 500,
  pauseOnFocus: false,
  fixedWidth: "35%",
  gap: "4%",
  padding: "11%",
  type: "loop",
  width: "100%",
  height: "400px",
  drag: "free",
  snap: true,

  breakpoints: {
    881: {
      height: "auto",
      fixedWidth: "90%",
      padding: "15%",
      focus: "center",
      gap: "8%",
    },
  },
}).mount();

$("#c-BTN1").on("click", function () {
  $(this).toggleClass("active");
  $(".p-nav-list2").toggleClass("open");
  $(".p-mask").toggleClass("open1");
  $("body").toggleClass("no_scroll");
  $(".l-header").toggleClass("c-filter");

  return false;
});

const CHANGE_WIDTH = 881; // 変更を検知する横幅
const ADD_CLASS = "sp-change"; // 追加するクラス

$(window).on("load resize", function () {
  var i_width = $(window).outerWidth(true);
  if (i_width > CHANGE_WIDTH) {
    if ($(".p-nav-item").hasClass(ADD_CLASS)) {
      $(".p-nav-item").removeClass(ADD_CLASS);
    }
  } else {
    if (!$(".p-nav-item").hasClass(ADD_CLASS)) {
      $(".p-nav-item").addClass(ADD_CLASS);
    }
  }
});

$(".p-nav-item2 a").on("click", function () {
  $("#c-BTN1").toggleClass("active");
  $(".p-nav-list2").toggleClass("open");
  $(".p-mask").toggleClass("open1");
  $("body").toggleClass("no_scroll");
  return false;
});

$(document).ready(function () {
  $("#form").submit(function (event) {
    var formData = $("#form").serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc3fZ22K_5d25Tgthov3IFpBxaz2LyhrgQP17ph7E_zcafGCQ/formResponse",
      data: formData,
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

$(".p-article__table-dt1").on("click", function () {
  $(".p-article__table-dt1").next().slideToggle(1000);
  return false;
});
$(".p-article__table-dt2").on("click", function () {
  $(this).next().slideToggle(1000);
  return false;
});
$(".p-article__table-dt3").on("click", function () {
  $(this).next().slideToggle(1000);
  return false;
});

$(document).ready(function () {
  const $submitBtn = $("#js-submit");
  $("#form input,#form textarea").on("change", function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $("#form #privacyCheck").prop("checked") === true
    ) {
      $submitBtn.prop("disabled", false);
    } else {
      $submitBtn.prop("disabled", true);
    }
  });
});

$("input[name='entry.752881277'").blur(function () {
  if ($(this).val() == "") {
    $(".c-form__error-message1").slideDown();
  } else {
    $(".c-form__error-message1").slideUp();
  }
});

$("input[name='entry.1530546066'").blur(function () {
  if ($(this).val() == "") {
    $(".c-form__error-message2").slideDown();
  } else {
    $(".c-form__error-message2").slideUp();
  }
});

AOS.init({
  offset: 300,
  delay: 100,
  duration: 600,
  easing: "ease-out",
  anchorPlacement: "bottom-top",
  once: false,
});
