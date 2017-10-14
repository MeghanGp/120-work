//size of shadow sphere
var radius = 200;


function setup(){
createCanvas( windowWidth, windowHeight, WEBGL );
//hide cursor
noCursor();
frameRate( 15 );

}


function draw(){
//black background for max effect
background( 0 );

/* ********************* */
/* PLANET SANDBOX */
/* ******************** */
push();

noStroke();
//shadow react to mouse
var dirY = ( mouseY / height - 0.5 ) * 5;
var dirX = ( mouseX / width - 0.5 ) * 5;
//shadow reaction/movement amount
directionalLight( 120, 120, 200, dirX, dirY, 1 );
translate(0.2 * radius, 0, 0 );
sphere(radius);

pop(); //END PLANET

/* ********************* */
/* PLANET RINGS SANDBOX */
/* ********************* */
push();

// inner ring
fill('rgb(68, 45, 89)');
rotateX(frameCount * 0.02 );
rotateY(frameCount * 0.02 );
torus( 215, 20 );

// outer ring
fill('rgb(123, 91, 157)');
rotateX(frameCount * 0.0 );
rotateY(frameCount * 0.0 );
torus(240, 15 );

pop(); //END PLANET RINGS



 }
