import { expect } from "chai";
import randomTake from "../src/random-take"

describe("Random Take", () => {

  it("should return values from an array", () => {
   
    const immutableListOfNumbers = [25,42,667,69];
    const mutableListOfNumbers = immutableListOfNumbers.slice();
    let value;
    do {
      value = randomTake(mutableListOfNumbers)
      if (value) {
        expect(value)
          .to.not.be.oneOf(mutableListOfNumbers);
        expect(value)
          .to.be.oneOf(immutableListOfNumbers);
      } else {
        expect(mutableListOfNumbers).to.have.property("length", 0);
      }
    } while (value !== undefined);

  });

  it("should return `undefined` from an empty array", () => {
   
    const emptyList = [];
    for (let i = 0; i < 100; i++) {
      expect(randomTake(emptyList))
        .to.be.undefined;
    }

  });
});
