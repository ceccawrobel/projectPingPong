$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    var count = parseInt($("input#inputNumber").val());

    event.preventDefault();
    // console.log();
    // alert(count);
    $("ul#outputList").text("");

    for (var index = 1; index <= count; index += 1) {
      if (index % 3 === 0) {
        $("ul#outputList").append("<li>ping</li>")
      } else {
        $("ul#outputList").append("<li>" + index + "</li>");
      }
    }
  });
});
