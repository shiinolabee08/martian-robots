import { Direction } from "./direction";
import { DirectionsEnum } from "./directions.enum";

export const enum CoordinatesEnum {
  MAX_HEIGHT = 10, //temporarily set 10 instead of 50 for testing purposes
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
  yCoordinate: number;
  xCoordinate: number;

  constructor(initialDirection: string){
    const splitInitialDirection = initialDirection.split(' ');

    this.direction = splitInitialDirection[2];

    this.eDirection = new Direction(
      splitInitialDirection[2],
      DirectionsMapping[splitInitialDirection[2]][0],
      DirectionsMapping[splitInitialDirection[2]][1]
    );

    this.yCoordinate = parseInt(splitInitialDirection[1]);
    this.xCoordinate = parseInt(splitInitialDirection[0]);
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
        this.yCoordinate = this.moveUp();
      }
    }
    return `${this.xCoordinate} ${this.yCoordinate} ${this.direction}`;
  }

  moveUp(): number {
    return (this.yCoordinate + 1) % CoordinatesEnum.MAX_HEIGHT;
  }
}