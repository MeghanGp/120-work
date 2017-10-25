var ball = {};
ball.width = 10;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 90;
ball.scale_y = 90;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
    // set random colors
    // I did it this way because it seems to keep a more specific set of random colors then simply random
    var red = floor( random(256) );
    var blue = floor( random(256) );

    fill( red, 0, blue);
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.8, 90);
    ball.scale_y = map(mouseY, 0, height, 0.5, 90);
}
