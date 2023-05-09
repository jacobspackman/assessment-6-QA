const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  
  test("shuffle should return array", () => {

    const result = shuffle()
    expect(Array.isArray(result)).toBe(true)
    
  })

  test("return the amount of objects same as the argument sent in", () => {

    let toolArr = [34, 65, 69, 420, 898237985];

    let shuffledArr = shuffle(toolArr);

    expect(shuffledArr.length).toBe(toolArr.length);
  })

});

