import { Coordinate } from "./coordinate";
import { Direction, DirectionsMapping } from "./direction";
import { Grid } from "./grid";

export const enum RobotCommandsEnum{
  RIGHT = 'R',
  LEFT = 'L',
  FORWARD = 'F',
};
export class Robot {
  direction: string;
  eDirection: Direction;
  coordinate: Coordinate;
  grid: Grid;

  constructor(initialPosition: string){
    const splitInitialPosition = initialPosition.split(' ');

    this.direction = splitInitialPosition[2];

    this.coordinate = new Coordinate(parseInt(splitInitialPosition[0]), parseInt(splitInitialPosition[1]));

    this.eDirection = new Direction(
      splitInitialPosition[2],
      DirectionsMapping[splitInitialPosition[2]][0],
      DirectionsMapping[splitInitialPosition[2]][1]
    );

    this.grid = new Grid();
  }

  execute(commands: string): string {
    for(let i=0; i < commands.length; i++) {
      const commandStr = commands.charAt(i);
      switch(commandStr) {
        case RobotCommandsEnum.RIGHT:
          this.eDirection = this.eDirection.rotateToRight();
          this.direction = this.eDirection.getValue();
          break;
        case RobotCommandsEnum.LEFT:
          this.eDirection = this.eDirection.rotateToLeft();
          this.direction = this.eDirection.getValue();
          break;
        case RobotCommandsEnum.FORWARD:
          this.coordinate = this.grid.nextCoordinate(this.coordinate, this.eDirection);
          break;
      }
    }
    return `${this.coordinate.getX()} ${this.coordinate.getY()} ${this.direction}`;
  }
}