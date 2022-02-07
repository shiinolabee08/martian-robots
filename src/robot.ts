export class Robot {
  direction: string;

  constructor(initialDirection: string){
    this.direction = initialDirection.split(' ')[2];
  }

  execute(commands: string): string {
    const commandsLength = commands.length;

    for(let i=0; i < commandsLength; i++) {
      if (commands.charAt(i) === 'R') {
        this.direction = this.rotateRight();
      }
    }
    return `0 0 ${this.direction}`;
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

}