// some random numbers
var data = [3, 7, 10, 6, 2];

// some constants
var DIAMETER = 5;
var SCALE = 75;
var SPACING = 5;

//-----------------------------------------------------------------------------
// Setup the sketch
function setup() {
  createCanvas(400, 800);
  noLoop();
  fill(100);
}

//-----------------------------------------------------------------------------
// draw the sketch
function draw() {
  background(240)

  // determine how many items
  var count = data.length;

  // draw the axis
  for (var i = 0; i <= 10; i += 2) {

    // calculate the y position
    var yPos = height-75*i;

    // draw a line and some text
    line(0,yPos,width,yPos);
    text(i,0,yPos-2)
  }


  // for each item:
  for (var i = 0; i < count; i++){

    // calculate some values
    var w = (width-50)/count-5;
    var h = -data[i]*SCALE;
    var x = (w+5)*i+50;
    var y = height;

    // draw the bars
    rect(x, y, w, h);

    // draw the circle
    ellipse(x+w, y+h, DIAMETER, DIAMETER);
  }


}
