const { getRandomToy, add, getCartTotal } = require("./lecture11");

// test("add should return sum", function () {
//     let sum = add(2, 3);
//     expect(sum).toEqual(5);
// });

describe("add function", function () {

    test("return sum", function () {
        let sum = add(2, 3);
        expect(sum).toEqual(5);
    });
  
    test("return sum w/neg numbers", function () {
        let sum = add(-2, 3);
        expect(sum).toEqual(1);
    });
});

//Matchers

// .toEqual(obj)  basically == but works on reference types too
//     Has the same value (eg, different objects with same values match)
// .toBe(obj)  basically ===
//     Is the same object (eg, different objects with same values do not)
// .toContain(sought)
//     Does object/array contain this item?
// .not.
//     Add before matcher to invert (eg expect("hi").not.toEqual("bye"))


describe("matchers", function () {
    test("toBe and toEqual are different", function () {
      let nums = [1, 2, 3];
      let newNums = nums.slice();
      console.log(newNums)
  
      expect(nums).not.toBe(newNums);  // not the same reference!
      expect(nums).toEqual(newNums);   // same values so we use toEqual
    });
  });

//Any

test("random toy", function () {
  let toy = getRandomToy();
  expect(toy).toEqual({
    toy: {
      name: expect.any(String),
      price: 34.99,
    },
  });
});

// Before and After Demo
// getCartTotal(cart, discount=0)

describe("getCartTotal", function () {
    beforeAll(function() {
        console.log("Run once before all tests");
    });
    
    let cart;
    beforeEach(function () {
        cart = [
            { id: "le croix", price: 4, qty: 3 },
            { id: "pretzels", price: 8, qty: 10 },
        ];
    });
    test("total w/o discount", function () {

        const total = getCartTotal(cart);
        expect(total).toEqual(92);
    });

    test("total w/discount", function () {

        const total = getCartTotal(cart, 0.5);
        expect(total).toEqual(46);
    });

    afterEach(function() {
        console.log("Run after each test");
    });
    
    afterAll(function() {
        console.log("Run once after all tests");
    });
});

// Before / After
// Jest gives us hooks we can tap into so
// we don’t repeat common setup/teardown:

// For one-time setup/teardown:
// beforeAll: run once before all tests start
// afterAll: run once after all tests finish
// For frequent setup/teardown:
// beforeEach: run before each test starts
// afterEach: run after each test finishes