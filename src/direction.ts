import { DirectionsEnum } from "./directions.enum";

//Created this for easier mapping of directions by setting their left and right for example NORTH('N', 'W', 'E')
export const DirectionsMapping = {
  [DirectionsEnum.NORTH]: [DirectionsEnum.WEST, DirectionsEnum.EAST],
  [DirectionsEnum.EAST]: [DirectionsEnum.NORTH, DirectionsEnum.SOUTH],
  [DirectionsEnum.SOUTH]: [DirectionsEnum.EAST, DirectionsEnum.WEST],
  [DirectionsEnum.WEST]: [DirectionsEnum.SOUTH, DirectionsEnum.NORTH]
};

export class Direction {
  private value: string;
  private left: string;
  private right: string;

  constructor(value: string, left: string, right: string) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  rotateToRight() {
    return this.getDirectionMapping(this.right);
  }

  rotateToLeft() {
    return this.getDirectionMapping(this.left);
  }

  getDirectionMapping(directionTo: string): Direction {
    const directionMapping = DirectionsMapping[directionTo];

    if (directionMapping) {
      const directionToObj = new Direction(directionTo, directionMapping[0], directionMapping[1]);

      if (directionToObj.getValue() === directionTo) {
        return directionToObj;
      }
    }

  }

  getValue(): string {
    return this.value;
  }
}