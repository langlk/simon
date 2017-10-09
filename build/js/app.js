(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/simon.js":1}]},{},[2]);
