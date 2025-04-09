import Ship  from "../src/modules/models/Ship.js";

describe("Ship", () => {
  let testShip;
  let length;

  beforeEach(() => {
    length = 3;
    testShip = new Ship(length);
  });

  test("isSunk() should return true if length <= hits", () => {
    testShip.hit();
    testShip.hit();
    testShip.hit();

    expect(testShip.isSunk()).toBe(true);
  });

  test("isSunk() should return false if hits < length", () => {
    expect(testShip.isSunk()).toBe(false);

    testShip.hit();
    expect(testShip.isSunk()).toBe(false);
  });

  test("hits getter should match the number of times hits fn called", () => {
    expect(testShip.hits).toBe(0);

    testShip.hit();
    testShip.hit();
    expect(testShip.hits).toBe(2);
  });

  test("length getter should return the length of the ship", () => {
    expect(testShip.length).toBe(3);
  });

  test("should throw an error when object is initialized with length less than 1", () => {
    expect(() => new Ship(0)).toThrow(Error);
  });
});