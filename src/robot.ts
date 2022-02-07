export class Robot {
  direction: string;

  constructor(initialDirection: string){
    this.direction = initialDirection.split(' ')[2];
  }

  execute(commands: string): string {
    const commandsLength = commands.length;

    for(let i=0; i < commandsLength; i++) {
      if (this.direction === 'N') {
        this.direction = 'E';
      }
    }
    return `0 0 ${this.direction}`;
  }

}