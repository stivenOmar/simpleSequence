const {it, expect} = require("@jest/globals");
const elemetOfIndex = require("../src/simpleSequence");

describe("elementOfIndex", ()=> {
    it("Should return 1 for input n = 0", ()=> {
        expect(elemetOfIndex(0)).toBe(1);
    })

    it("Should return 4 for input n = 5", ()=> {
        expect(elemetOfIndex(5)).toBe(4);
    })

    it("Should return 272712 for input n = 545421", ()=> {
        expect(elemetOfIndex(545421)).toBe(272712);
    })

    it("Should return 81239812739128371 for input n = 87123641123172368", ()=> {
        expect(elemetOfIndex(87123641123172368)).toBe(81239812739128371);
    })
})