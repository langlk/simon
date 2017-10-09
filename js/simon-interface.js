Simon = require('./../js/simon.js').simonModule;

var showPattern = function(pattern) {
  var count = 0;
  var max = pattern.length;
  var interval = setInterval(function() {
    $(".btn").removeClass('highlighted');
    setTimeout(function() {
      if (count < max) {
        $("#" + pattern[count]).addClass('highlighted');
        count++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  }, 500);
};

$(document).ready(function() {
  var simonGame;
  $('#start').click(function() {
    simonGame = new Simon();
    var pattern = simonGame.getPattern();
    showPattern(pattern);
  });

  $(".color").click(function() {
    var color = $(this).attr("id");
    var correct = simonGame.inputMove(color);
    if (correct && simonGame.turnComplete()) {
      var pattern = simonGame.getPattern();
      showPattern(pattern);
    } else if (!correct) {
      alert("Game over");
    }
  });
});
