export class Coordinate{
  private xCoordinate: number;
  private yCoordinate: number;

  constructor(xCoordinate: number, yCoordinate: number) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  }

  getX(): number {
    return this.xCoordinate;
  }

  getY(): number {
    return this.yCoordinate;
  }
}