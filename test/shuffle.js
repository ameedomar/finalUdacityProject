/* eslint-env mocha */
import { expect } from "chai";
import { shuffle } from "../nd0011-c4-starter/starter/src/shuffle.js"; // Adjust path to your actual shuffle function

describe("shuffle()", () => {
  it("should shuffle the elements in the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const original = [...arr];
    const shuffled = shuffle(arr);

    // Check that the result is not in the same order
    expect(shuffled).to.have.members(original);
    expect(shuffled.join()).to.not.equal(original.join());
  });
});
