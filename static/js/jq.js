$(function () {
  // nav hamburger
  $("#navBTN").on("click", function () {
    var navIcon = $(".navXsList").css("display");
    if (navIcon == "none") {
      $(".navXsList").css({ display: "flex" });
      $("#navBTN path").attr({
        d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z",
      });
    } else {
      $(".navXsList").css({ display: "none" });
      $("#navBTN path").attr({
        d: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z",
      });
    }
  });
  // search youtuber
  $("#submit").on("click", function () {
    var name = $("#searchInput").val();
    if (name == "입짧은 햇님" || name == "입짧은" || name == "햇님") {
      console.log("성공");
      window.location.replace("/youtuber1");
    } else {
      alert("준비중인 유튜버 페이지 입니다!");
    }
  });

  // login
  $("#loginSubmit").on("click", function () {
    var id = $("#userId").val();
    var password = $("#userPassword").val();

    if (id == "" && password == "") {
      $("#userId + span").text("아이디를 입력하세요.");
      $("#userPassword + span").text("비밀번호를 입력하세요.");
    } else if (password == "") {
      $("#userPassword + span").text("비밀번호를 입력하세요.");
      $("#userId + span").text("");
    } else if (id == "") {
      $("#userId + span").text("아이디를 입력하세요.");
      $("#userPassword + span").text("");
    } else if (id == "userid" && password == "aaa") {
      alert("로그인 성공");
      window.location.replace("/");
    } else if (id !== "userid" || password !== "aaa") {
      alert("아이디 또는 비밀번호가 틀립니다.");
    }
  });

  // menu_2 section3
  $(".foodCategory button").on("click", function () {
    var title = $(this).attr("id");
    var data = {
      western: "양식",
      desert: "디저트",
      chicken: "치킨",
      kor: "한식",
      chi: "중식",
      jap: "일식",
    };

    $(".ViewArea ." + title).css("display", "flex");
    $(".cateTitle").text(data[title]);
    $("div." + title)
      .siblings()
      .css("display", "none");
  });

  // scroll lazy_image
  $(window).scroll(function () {
    var scrollT = window.scrollY;
    var lazyImage = $("img.lazy");
    $(lazyImage).each(function (img) {
      var dataSrc = $(this).attr("data-src");
      // console.log(dataSrc);
      if ($(this).offset().top < window.innerHeight + scrollT) {
        $(this).attr("src", dataSrc);
        $(this).removeClass("lazy");
        $(window).resize;
      }
    });
  });

  // contact page
  $("#inputState").on("click", function () {
    var selectOp = $("#op").val();
    var name = $("#contactName").val();
    var tel = $("#contactTel").val();
    var mail = $("#contactMail").val();
    var text = $("#contactText").val();

    var option = {
      advertising: "광고",
      launching: "입점",
      site: "오류",
      suggest: "건의",
    };
    $(".op").text(option[selectOp]);

    if (
      selectOp == null ||
      name == "" ||
      tel == "" ||
      mail == "" ||
      text == ""
    ) {
      $(".alert1").css({
        display: "block",
        color: "red",
      });
      $(".sandStyle").attr("disabled", "true");
      $("#sendModalOpen .modal-body table").addClass("modalBodyNone");
    } else {
      $("#sendModalOpen .modal-body table").addClass("modalBodyBlock");

      $(".alert1").css({
        display: "none",
      });

      $(".contactName").text(name);
      $(".contactTel").text(tel);
      $(".contactMail").text(mail);
      $(".contactText textarea").text(text);

      var test = $(".sandStyle").attr("disabled");
      if (test == "disabled") {
        $(".sandStyle").attr("disabled", false);
      }
      $(".sandStyle").on("click", function () {
        alert("문의보내기 성공");
      });
    }
  });
});
