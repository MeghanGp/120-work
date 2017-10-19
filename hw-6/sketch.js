// set color variables for background
var r = 255;
var b = 200;

function setup(){
createCanvas( windowWidth, windowHeight );

}

// background
function draw(){
// set background to change color with mouse position
r = map( mouseX, windowWidth, windowHeight, 255, 200 );
b = map( mouseX, windowWidth, windowHeight, 200, 255 );
  background( r, 0, b );

/* ******************** */
/* CONSTRAIN SANDBOX */
/* ******************** */
push();
var lWall = 40;
var rWall = width - 40;

var conMouse = constrain( mouseX, lWall, rWall );
// Create object
var obj = {
  x: conMouse,
  y: 40 * 2,
  diameter: 3 * 2
};

// walls
stroke( '0' );
line( lWall, 0, lWall, height );
line( rWall, 0, rWall, height );
// rectangle
noStroke();
fill('rgb(63, 224, 202)');
rect( obj.x, obj.y, obj.diameter, obj.diameter );

pop(); // END CONSTRAIN1

/* ******************** */
/* RANDOM COLOR RECTANGLE */
/* ******************** */
push();
translate( 650, 350);
var red = floor( random(256) );
var green = floor( random(99) );
var blue = floor( random(256) );

rectMode(RADIUS);
fill(red, green, blue);
rect( 90, 40, 90, 90);

rectMode(CENTER);
fill(0);
rect( 90, 40, 90, 90);

pop(); // END RECTANGLE

// END SKETCH
}
