Meghan Goodpasture, 51
[Altered Sketch](https://meghangp.github.io/120-work/hw-7/)
## What Is The Code Doing?

The original sketch works the way it does because of the setup of the conditional flow, which set variables to react a certain way based on conditions met/not met; true or false.
* Line 1 sets up the varible for the ball.
* Line 2 defines the radius,
* Line 3 sets the x-coordinate,
* Line 4 sets the y-coordinate
* Line 5 changes the position of the x-coordinate
* Line 6 changes the position of the y-coordinate
* Line 7 sets the scale on the x axis of the trail that the ellipse will leave behind.
* Line 8 is doing the same as line 7, for the y axis.
* Line 10 declares setup
* Line 11 sets the width and length of the canvas
* Line 12 sets the background
* Line 17 declares the draw function
* Line 19 adds a slight increase on the x axis and multipies it by 1
* Line 20 adds a slight increase on the y axis and mutiplies it by 1
* Line 23 is an if statement requiring the x axis  to be greater than/equal to the position or width, or x axis must be less than/equal to zero. Logical operator requires both conditions be false to return false.
* Line 24 x axis position set to negative and reverses position.
* Lines 25 & 27 are the same as stated above, for the y axis and for the position and height rather than width.
* Line 30 sets the color of the ellipse, in this case white.
* Line 31 defines the ellipse size and position with set variables.
* Line 34 declares the mouse pressed event, which will make the ellipse change direction and speed upon click.
* Line 35 creates a variable and maps it to the position of mouseX so that upon clicking the ellipse and trail will move slightly towards the position of the mouse when it was clicked, and is setting the width trail/bounds of the ellipse.
* Line 36 is doing the same as 35 for the height.

To make the ball change direction you can click elsewhere on the canvas, it also changes direction due to bouncing off of the window borders.

## What I Altered

I changed the height of the canvas to windowHeight, set the background to black, and made the ellipse change colors at random but set the random colors to stay within reds, blues, and purples. I also spaced out the trail the ellipse behind and changed the starting point.
