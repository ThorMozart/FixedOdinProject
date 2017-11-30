$(document).ready(function() {
  buildCells(4);

$('.newTemplate').click(function() {
  console.log('prompting for new template');
  sidePrompt();
});

$('.newTemplate').mouseenter(function() {
  console.log('reading');
  $('.newTemplate').addClass('shadowed');
});
$('.newTemplate').mouseleave(function() {
  $('.newTemplate').removeClass('shadowed');
  console.log('all green');
});
});

function sidePrompt() {
  var newField = prompt('Enter the number of tiles per side.');
  buildCells(newField);
};

    function buildCells(side) {
    $('.field').empty();
    console.log(side*side + " cell grid," + side + "cells/side")
    var oneCell = '<div class = "cell" style = "float: left"></div>';
    var otherCell = '<div class = "cell" style = "float: right"></div>'
    var cellSide = (840%side ? 840/side-1 : 840/side);
    for (var counter = 0; counter < side*side; counter++) {
      console.log('appending cell');
      if (counter % side !== 0) {
        $('.field').append(oneCell);
      }
      else {
        $('.field').append(otherCell);
      }
    }
    $('.cell').css({"width" : cellSide, "height" : cellSide, "opacity": "0"});
    $('.cell').mouseenter(function() {
console.log('cell here');
$(this).css('opacity', '1');
  });
  };
