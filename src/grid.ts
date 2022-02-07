import { Coordinate } from "./coordinate";
import { Direction } from "./direction";

export const enum GridsEnum {
  MAX_HEIGHT = 10, //temporarily set 10 instead of 50 for testing purposes
  MAX_WIDTH = 10, //temporarily set 10 instead of 50 for testing purposes
};

export class Grid {
  private maxHeight: number;
  private maxWidth: number;

  constructor() {
    this.maxHeight = GridsEnum.MAX_HEIGHT;
    this.maxWidth = GridsEnum.MAX_WIDTH;
  }

  nextCoordinate(coordinate: Coordinate, direction: Direction) {
    let x = coordinate.getX();
    let y = coordinate.getY();

    if (direction.getValue() === 'N') {
      y = (y + 1) % this.maxHeight;
    }

    if (direction.getValue() === 'E') {
      x = (x + 1) % this.maxWidth;
    }

    if (direction.getValue() === 'S') {
      y = (y > 0) ? y - 1 : this.maxHeight - 1;
    }

    if (direction.getValue() === 'W') {
      x = (x > 0) ? x - 1 : this.maxWidth - 1;
    }

    return new Coordinate(x, y);
  }
}