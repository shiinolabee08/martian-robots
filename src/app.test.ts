import { Robot } from "./robot";

describe('Martina Robot should ...', () => {

  describe.each([
    ['0 0 R', '0 0 N', '0 0 E'],
  ])('Robot should rotate right', (commands, initialPosition, currentPosition) => {
    const robot = new Robot(initialPosition);

    test(`returns ${currentPosition} when ${commands}`, () => {
      expect(robot.execute(commands)).toStrictEqual(currentPosition);
    })
  })
});