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
});
