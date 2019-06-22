$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    var count = parseInt($("input#inputNumber").val());

    event.preventDefault();
    $("ul#outputList").text("");

    for (var index = 1; index <= count; index += 1) {
      if (index % 15 === 0) {
        $("ul#outputList").append("<li>ping pong</li>")
      } else if (index % 5 === 0) {
        $("ul#outputList").append("<li>pong</li>")
      } else if (index % 3 === 0) {
        $("ul#outputList").append("<li>ping</li>")
      } else {
        $("ul#outputList").append("<li>" + index + "</li>");
      }
    }
  });
});
