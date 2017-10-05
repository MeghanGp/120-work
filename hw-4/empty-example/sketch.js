// setup function
function setup(){
// canvas for the portrait
  createCanvas( 600, 700 );
}

function draw(){

// background color
background( 'rgb(175, 121, 227)' );

/* **************** */
/* MAIN SANDBOX */
/* **************** */
push();

// set grid center
translate( 300, 350 );

/* **************** */
/* ECLIPSE */
/* **************** */
push();

translate( 100, -390)
ellipseMode(CORNER);
fill('rgb(38, 217, 167)');
ellipse( 25, 25, 200, 200);

ellipseMode(CORNERS);
fill('rgb(6, 6, 6)');
ellipse(25, 25, 200, 200);

pop(); //END ECLIPSE



/* **************** */
/* BODY */
/* **************** */
push();

fill(6, 6, 6);
rect( -160, -125, 300, 300, 100);

pop(); // BODY END

/* **************** */
/* NECK? SORT OF? */
/* **************** */
push();

// triangles to smooth out head to body/arms
fill(6, 6, 6);
translate(78, -148);
triangle(28, 90, 62, 30, 60, 90);
translate(-266, -10);
triangle(40, 90, 40, 30, 90, 90);

pop(); // END OF NECK THING


/* **************** */
/* HORNS */
/* **************** */
push();
fill('rgb(90, 53, 98)');
translate( -60, -180 );

rotate(10)
triangle( 20, 75, 58, 20, 86, 75 );
translate( -160, 165 );
rotate(-20)
triangle( 20, 75, 58, 20, 86, 75 );

pop();


/* **************** */
/* HEAD */
/* **************** */
push();
fill(6, 6, 6,);
translate( 0, -155);
ellipse( 0, 0, 300, 245);

pop(); // END HEAD


/* **************** */
/* ARM RIGHT */
/* **************** */
push();
fill(6, 6, 6,);
translate( 150, -70);

// right seperate from left, less confusing for me
rotate( radians(55) );
ellipse( 0, 20, 180, 70);

pop(); // END RIGHT ARM

/* **************** */
/* ARM LEFT */
/* **************** */
push();
fill(6, 6, 6);
translate( -100, -160 );

rotate( radians(55) );
ellipse( 0, 100, 180, 70);

pop(); // END LEFT ARM


/* **************** */
/* FACE */
/* **************** */
push();
translate( -40, -240);

// Cyclops
ellipseMode(RADIUS);
fill( 'rgb(42, 255, 53)' );
ellipse(50, 50, 30, 30)

ellipseMode(CENTER);
fill('rgb(90, 53, 98)');
ellipse( 50, 50, 30, 30);


pop(); // END FACE


/* **************** */
/* GHOST LEGS LEFT */
/* **************** */
push();
fill(6, 6, 6);
rotate(90)
ellipse( 160, 70, 120, 70 );

ellipse( 160, 20, 120, 70 );

ellipse( 160, -30, 120, 70 );

pop(); // END LEFT LEGS

/* **************** */
/* GHOST LEGS RIGHT */
/* **************** */
push();
fill(6, 6, 6);
rotate(20)
ellipse( 160, -60, 120, 70 );
ellipse( 160, -20, 120, 70 );
ellipse( 160, 30, 120, 70 );
rotate(10)
ellipse( -160, 30, 120, 70 );

pop(); // END RIGHT LEGS

/* **************** */
/* GROUND */
/* **************** */
push();

translate( -300, 230 );
fill('rgb(38, 217, 167)');
rect(0, 0, 600, 200);

// craters
translate( 100, 40);
ellipseMode(RADIUS);
fill('rgb(21, 116, 96)');
ellipse(50, 50, 70, 20);

ellipseMode(CENTER);
fill('rgb(54, 51, 51)');
ellipse(50, 50, 70, 20);

translate(300, -80);
ellipseMode(RADIUS);
fill('rgb(18, 97, 80)');
ellipse(50, 50, 40, 10);

ellipseMode(CENTER);
fill('rgb(54, 51, 51)');
ellipse(50, 50, 60, 10);


pop(); // END GROUND



}
