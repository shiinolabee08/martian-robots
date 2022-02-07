# martian-robots
Martian Robots
<p>The surface of Mars can be modelled by a rectangular grid around which robots are able to move according to instructions provided from Earth. You are to write a program that determines each sequence of robot positions and reports the final position of the robot.</p>
<p>A robot position consists of a grid coordinate (a pair of integers: x-coordinate followed by y-coordinate) and an orientation (N, S, E, W for north, south, east, and west). A robot instruction is a string of the letters “L”, “R”, and “F” which represent, respectively, the instructions:</p>
<ul>
  <li>Left : the robot turns left 90 degrees and remains on the current grid point.</li>
  <li>Right : the robot turns right 90 degrees and remains on the current grid point.</li>
  <li>Forward : the robot moves forward one grid point in the direction of the current
orientation and maintains the same orientation.</li>
</ul>
<p>The direction North corresponds to the direction from grid point (x, y) to grid point (x, y+1).</p>
<p>There is also a possibility that additional command types may be required in the future and provision should be made for this. Since the grid is rectangular and bounded (…yes Mars is a strange planet), a robot that moves "off" an edge of the grid is lost forever. However, lost robots leave a robot "scent" that prohibits future robots from dropping off the world at the same grid point. The scent is left at the last grid position the robot occupied before disappearing over the edge. An instruction to move "off" the world from a grid point from which a robot has been previously lost is simply ignored by the current robot.</p>

<h2><strong>The Rules</strong></h2>
<ul>
  <li>Given that the initial starting point (0, 0, N) of a robot.</li>
  <li>0, 0 are X, Y coordinates on a grid of (50, 50).</li>
  <li>"N" is the direction it is facing (e.g N, S, E, W).</li>
  <li>"L" and "R" allow the robot to rotate left and right.</li>
  <li>"F" allows robot to move one point in the current direction.</li>
  <li>Robot receives a string array of commands e.g RMLLMM and returns the correct coordinates.</li>
  <li>Robot that moves "off" when reaching edge of the grid and will be "LOST" forever and tag that edge as a "SCENT" thats prohibits the future robots from dropping off the world at the same grid point.</li>
  <li>
</ul>
