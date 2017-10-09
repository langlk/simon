function Simon() {
  this.colors = ["red", "blue", "green", "yellow"];
  this.pattern = [];
}

Simon.prototype.getPattern = function () {
  var index = Math.floor(Math.random() * 4);
  this.pattern.push(this.colors[index]);
  return this.pattern;
};

exports.simonModule = Simon;
