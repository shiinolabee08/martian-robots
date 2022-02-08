import { Robot } from "./robot";

describe('Martina Robot should ...', () => {

  describe.each([
    ['0 0 R', '0 0 N', '0 0 E'],
    ['0 0 RR', '0 0 N', '0 0 S'],
    ['0 0 RRR', '0 0 N', '0 0 W'],
    ['0 0 RRRR', '0 0 N', '0 0 N'],
  ])('should rotate right', (commands, initialPosition, currentPosition) => {
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
  ])('should rotate left', (commands, initialPosition, currentPosition) => {
    const robot = new Robot(initialPosition);

    test(`returns ${currentPosition} when ${commands} and when starting at ${initialPosition}`, () => {
      expect(robot.execute(commands)).toStrictEqual(currentPosition);
    });
  });

  describe.each([
    ['F', '0 0 N', '0 1 N'],
    ['FFFFFFFFFF', '0 0 N', '0 0 N'], //temporarily set 10F's instead of 50
    ['FFFFFFFFFFFFFFF', '0 0 N', '0 5 N'],
  ])('should move up', (commands, initialPosition, currentPosition) => {
    const robot = new Robot(initialPosition);

    test(`returns ${currentPosition} when ${commands} and when starting at ${initialPosition}`, () => {
      expect(robot.execute(commands)).toStrictEqual(currentPosition);
    });
  });

  describe.each([
    ['RF', '0 0 N', '1 0 E'],
    ['RFFFFF', '0 0 N', '5 0 E'],
  ])('should move right', (commands, initialPosition, currentPosition) => {
    const robot = new Robot(initialPosition);

    test(`returns ${currentPosition} when ${commands} and when starting at ${initialPosition}`, () => {
      expect(robot.execute(commands)).toStrictEqual(currentPosition);
    });
  });

  describe.each([
    ['LF', '0 0 N', '9 0 W'],
    ['LFFFFF', '0 0 N', '5 0 W'],
  ])('should move left', (commands, initialPosition, currentPosition) => {
    const robot = new Robot(initialPosition);

    test(`returns ${currentPosition} when ${commands} and when starting at ${initialPosition}`, () => {
      expect(robot.execute(commands)).toStrictEqual(currentPosition);
    });
  });

  describe.each([
    ['RFFFFFFFFFF', '0 0 N', '0 0 E'],
    ['RFFFFFFFFFFFFFFF', '0 0 N', '5 0 E'],
  ])('should wrap from the right to left when moving east', (commands, initialPosition, currentPosition) => {
    const robot = new Robot(initialPosition);

    test(`returns ${currentPosition} when ${commands} and when starting at ${initialPosition}`, () => {
      expect(robot.execute(commands)).toStrictEqual(currentPosition);
    });
  });

  //example tests from readme
  describe.each([
    ['RFRFRFRF', '1 1 E', '1 1 E'],
    ['FRRFLLFFRRFLL', '3 2 N', '3 3 N'],
    ['LLFFFLFLFL', '0 3 W', '2 4 S'],
  ])('should results to..', (commands, initialPosition, currentPosition) => {
    const robot = new Robot(initialPosition);

    test(`returns ${currentPosition} when ${commands} and when starting at ${initialPosition}`, () => {
      expect(robot.execute(commands)).toStrictEqual(currentPosition);
    })
  })
});