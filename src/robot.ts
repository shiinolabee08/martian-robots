export class Robot {
  direction: string;
  yCoordinate: number;

  constructor(initialDirection: string){
    const splitInitialDirection = initialDirection.split(' ');
    this.direction = splitInitialDirection[2];
    this.yCoordinate = parseInt(splitInitialDirection[1]);
  }

  execute(commands: string): string {
    const commandsLength = commands.length;

    for(let i=0; i < commandsLength; i++) {
      if (commands.charAt(i) === 'R') {
        this.direction = this.rotateRight();
      }

      if (commands.charAt(i) === 'L') {
        this.direction = this.rotateLeft();
      }

      if (commands.charAt(i) === 'F') {
        this.yCoordinate++;
      }
    }
    return `0 ${this.yCoordinate} ${this.direction}`;
  }

  rotateRight(): string {
    if (this.direction === 'S') {
      return 'W';
    } else if (this.direction === 'E') {
      return 'S';
    } else if (this.direction === 'N') {
      return 'E';
    } else {
      return 'N';
    }
  }

  rotateLeft(): string {
    if (this.direction === 'S') {
      return 'E';
    } else if (this.direction === 'W') {
      return 'S';
    } else if (this.direction === 'N') {
      return 'W';
    } else {
      return 'N';
    }
  }

}