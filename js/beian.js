;$(document).ready(function () {
  if (window.location.href.search("zhibocai.cn") > -1) {
    $("#footer-cn").show();
  } else {
    $("#footer-normal").show();
  }
});
