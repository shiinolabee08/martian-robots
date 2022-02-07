import { DirectionsMapping } from "./robot";

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