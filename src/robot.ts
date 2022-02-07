import { Coordinate } from "./coordinate";
import { Direction } from "./direction";
import { DirectionsEnum } from "./directions.enum";

export const enum CoordinatesEnum {
  MAX_HEIGHT = 10, //temporarily set 10 instead of 50 for testing purposes
  MAX_WIDTH = 10, //temporarily set 10 instead of 50 for testing purposes
};

//Created this for easier mapping of directions by setting their left and right for example NORTH('N', 'W', 'E')
export const DirectionsMapping = {
  [DirectionsEnum.NORTH]: [DirectionsEnum.WEST, DirectionsEnum.EAST],
  [DirectionsEnum.EAST]: [DirectionsEnum.NORTH, DirectionsEnum.SOUTH],
  [DirectionsEnum.SOUTH]: [DirectionsEnum.EAST, DirectionsEnum.WEST],
  [DirectionsEnum.WEST]: [DirectionsEnum.SOUTH, DirectionsEnum.NORTH]
};
export class Robot {
  direction: string;
  eDirection: Direction;
  coordinate: Coordinate;

  constructor(initialDirection: string){
    const splitInitialDirection = initialDirection.split(' ');

    this.direction = splitInitialDirection[2];
    this.coordinate = new Coordinate(parseInt(splitInitialDirection[0]), parseInt(splitInitialDirection[1]));

    this.eDirection = new Direction(
      splitInitialDirection[2],
      DirectionsMapping[splitInitialDirection[2]][0],
      DirectionsMapping[splitInitialDirection[2]][1]
    );
  }

  execute(commands: string): string {
    const commandsLength = commands.length;

    for(let i=0; i < commandsLength; i++) {
      if (commands.charAt(i) === 'R') {
        //this.direction = this.rotateRight();
        this.eDirection = this.eDirection.rotateToRight();
        this.direction = this.eDirection.getValue();
      }

      if (commands.charAt(i) === 'L') {
        // this.direction = this.rotateLeft();
        this.eDirection = this.eDirection.rotateToLeft();
        this.direction = this.eDirection.getValue();
      }

      if (commands.charAt(i) === 'F') {
        this.coordinate = this.moveUp();
      }
    }
    return `${this.coordinate.getX()} ${this.coordinate.getY()} ${this.direction}`;
  }

  moveUp(): Coordinate {
    let x = this.coordinate.getX();
    let y = this.coordinate.getY();

    if (this.direction === 'N') {
      y = (y + 1) % CoordinatesEnum.MAX_HEIGHT;
    }

    if (this.direction === 'E') {
      x = (x + 1) % CoordinatesEnum.MAX_WIDTH;
    }

    if (this.direction === 'S') {
      y = (y > 0) ? y - 1 : CoordinatesEnum.MAX_HEIGHT - 1;
    }

    if (this.direction === 'W') {
      x = (x  > 0) ? x - 1 : CoordinatesEnum.MAX_WIDTH - 1;
    }

    return new Coordinate(x, y);
  }
}