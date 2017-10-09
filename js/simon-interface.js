Simon = require('./../js/simon.js').simonModule;

$(document).ready(function() {
  var simonGame;
  $('#start').click(function() {
    simonGame = new Simon();
    pattern = simonGame.getPattern();
    $('#pattern').text(pattern);
  });
});
