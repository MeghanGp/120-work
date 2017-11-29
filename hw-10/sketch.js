// set color variables for background
var r = 200;
var b = 255;

function setup(){
createCanvas( windowWidth, windowHeight );

}

// create background
function draw(){
// set background to change color with mouse position
r = map( mouseX, windowWidth, windowHeight, 255, 200 );
b = map( mouseX, windowWidth, windowHeight, 200, 255 );
  background( r, 0, b );

/* ******************** */
/* CONSTRAIN RECT SANDBOX */
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

// constrain walls/boundaries
stroke( '100' );
line( lWall, 0, lWall, height );
line( rWall, 0, rWall, height );
// rectangle
noStroke();
fill('rgb(63, 224, 202)');
rect( obj.x, obj.y, obj.diameter, obj.diameter );

pop(); // END CONSTRAIN

/* ******************** */
/* RANDOM COLOR RECTANGLE */
/* ******************** */
push();
translate( 350, 350);
// create an array for sizes of rectangles
var s = [ 90, 40, 100 ];

// set strict random color set
var r = ( random(256) );
var g = ( random(100) );
var b = ( random(256) );

// create outer color-changing rectangle
rectMode(RADIUS);
fill( r, g, b );
// change set sizes to use new array
rect( s[0], s[1], s[0], s[2] );

// create black center rectangle
rectMode(CENTER);
fill(0);
// change set sizes to use new array
rect( s[0], s[1], s[0], s[2] );

pop(); // END RECTANGLE

// Add 2 more rectangle sets using same array across page

/* ******************** */
/* SECOND RECTANGE SET */
/* ******************** */

push();
translate( 650, 350 );

rectMode(RADIUS);
// middle rect opposite of other 2
fill(0);
rect( s[0], s[1], s[0], s[2] );

rectMode(CENTER);
fill( r, g, b );
rect( s[0], s[1], s[0], s[2] );


pop(); // END SECOND RECT SET

/* ******************** */
/* THIRD SET (FIRST RECT REPLICA) */
/* ******************** */

push();
translate( 950 , 350 );

rectMode(RADIUS);
fill( r, g, b );

rect( s[0], s[1], s[0], s[2] );

rectMode(CENTER);
fill(0);
rect( s[0], s[1], s[0], s[2] );



pop(); // END 3RD RECT

// END OF SKETCH
}
