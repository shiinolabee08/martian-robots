import { Robot } from "./robot";

describe('Martina Robot should ...', () => {

  describe.each([
    ['0 0 R', '0 0 N', '0 0 E'],
    ['0 0 RR', '0 0 N', '0 0 S'],
    ['0 0 RRR', '0 0 N', '0 0 W'],
    ['0 0 RRRR', '0 0 N', '0 0 N'],
  ])('rotate right', (commands, initialPosition, currentPosition) => {
    const robot = new Robot(initialPosition);

    test(`returns ${currentPosition} when ${commands} and when starting at ${initialPosition}`, () => {
      expect(robot.execute(commands)).toStrictEqual(currentPosition);
    });
  });

  describe.each([
    ['0 0 L', '0 0 N', '0 0 W'],
    ['0 0 LL', '0 0 N', '0 0 S'],
    ['0 0 LLL', '0 0 N', '0 0 E'],
    ['0 0 LLLL', '0 0 N', '0 0 N'],
    ['0 0 L', '0 0 E', '0 0 N'],
    ['0 0 LL', '0 0 E', '0 0 W'],
  ])('rotate left', (commands, initialPosition, currentPosition) => {
    const robot = new Robot(initialPosition);

    test(`returns ${currentPosition} when ${commands} and when starting at ${initialPosition}`, () => {
      expect(robot.execute(commands)).toStrictEqual(currentPosition);
    });
  });

  describe.each([
    ['F', '0 0 N', '0 1 N'],
    ['FFFFFFFFFF', '0 0 N', '0 0 N'],
    ['FFFFFFFFFFFFFFF', '0 0 N', '0 5 N'],
  ])('move next', (commands, initialPosition, currentPosition) => {
    const robot = new Robot(initialPosition);

    test(`returns ${currentPosition} when ${commands} and when starting at ${initialPosition}`, () => {
      expect(robot.execute(commands)).toStrictEqual(currentPosition);
    })
  })
});