Simon = require('./../js/simon.js').simonModule;

$(document).ready(function() {
  var simonGame;
  $('#start').click(function() {
    simonGame = new Simon();
    var pattern = simonGame.getPattern();
    $('#pattern').text(pattern);
  });
  $(".color").click(function() {
    var color = $(this).attr("id");
    var correct = simonGame.inputMove(color);
    alert(correct);
  });
});
