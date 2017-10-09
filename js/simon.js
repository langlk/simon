function Simon() {
  this.colors = ["red", "blue", "green", "yellow"];
  this.pattern = [];
  this.userInput = [];
}

Simon.prototype.getPattern = function () {
  var index = Math.floor(Math.random() * 4);
  this.pattern.push(this.colors[index]);
  return this.pattern;
};

Simon.prototype.inputMove = function(color) {
  this.userInput.push(color);
  return (color === this.pattern[this.userInput.length - 1]);
};

exports.simonModule = Simon;
