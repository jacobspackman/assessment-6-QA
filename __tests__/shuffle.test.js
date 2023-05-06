const shuffle = require("../src/shuffle");

describe("shuffle should return a random 5 items from the bot array", () => {
  
  test("shuffle should return array", () => {
    expect(shuffle.copyArray.length).toBe(10)
    
  })

  test("shuffle should return the amount of objects same as the argument sent in", () => {
    expect(shuffle.res.length).toBe(shuffle.length)
  })

});

console.log(shuffle.copyArray)