import { Robot } from "./robot";

describe('Martina Robot should ...', () => {

  describe.each([
    ['0 0 R', '0 0 N', '0 0 E'],
    ['0 0 RR', '0 0 N', '0 0 S'],
    ['0 0 RRR', '0 0 N', '0 0 W'],
    ['0 0 RRRR', '0 0 N', '0 0 N'],
  ])('rotate right', (commands, initialPosition, currentPosition) => {
    const robot = new Robot(initialPosition);

    test(`returns ${currentPosition} when ${commands}`, () => {
      expect(robot.execute(commands)).toStrictEqual(currentPosition);
    })
  })
});