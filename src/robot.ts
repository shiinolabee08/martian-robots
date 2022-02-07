import { Coordinate } from "./coordinate";
import { Direction, DirectionsMapping } from "./direction";
import { Grid } from "./grid";
export class Robot {
  direction: string;
  eDirection: Direction;
  coordinate: Coordinate;
  grid: Grid;

  constructor(initialDirection: string){
    const splitInitialDirection = initialDirection.split(' ');

    this.direction = splitInitialDirection[2];

    this.coordinate = new Coordinate(parseInt(splitInitialDirection[0]), parseInt(splitInitialDirection[1]));

    this.eDirection = new Direction(
      splitInitialDirection[2],
      DirectionsMapping[splitInitialDirection[2]][0],
      DirectionsMapping[splitInitialDirection[2]][1]
    );

    this.grid = new Grid();
  }

  execute(commands: string): string {
    const commandsLength = commands.length;

    for(let i=0; i < commandsLength; i++) {
      if (commands.charAt(i) === 'R') {
        this.eDirection = this.eDirection.rotateToRight();
        this.direction = this.eDirection.getValue();
      }

      if (commands.charAt(i) === 'L') {
        this.eDirection = this.eDirection.rotateToLeft();
        this.direction = this.eDirection.getValue();
      }

      if (commands.charAt(i) === 'F') {
        this.coordinate = this.grid.nextCoordinate(this.coordinate, this.eDirection);
      }
    }
    return `${this.coordinate.getX()} ${this.coordinate.getY()} ${this.direction}`;
  }
}