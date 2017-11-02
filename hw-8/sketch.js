function setup(){
createCanvas( windowWidth, windowHeight );

}
// set background
function draw(){
background('rgb(31, 179, 155)');

// for loop to draw ellipses across the width of the window
for ( let x = 0; x <= width; x += 50 ){
  // make the circles change color
  fill( 0, 200, random(255) );
  ellipse( x, 300, 25, 25 );
}



}
