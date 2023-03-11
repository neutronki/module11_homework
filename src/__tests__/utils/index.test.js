import { getMonth, repeatWord, countDown } from "../../utils/index.js";

describe("Test for getMonth function", ()=>{
    it("Should be correctly if the number of month from 1 to 12 and invalid number", () => {
        expect(getMonth(11)).toBe('November');
        expect(getMonth('Not a number')).toBe('Error. There must be a number');
        expect(getMonth(15)).toBe('Number out of range');
    })
})

describe("Test for repeatWord function", ()=>{
    const word = 'Homework';
    const correctAnswer = 'Homework1, Homework2, Homework3, Homework4, Homework5';
    const count = 5;
    it("it is correct if the required quantity of the output", () => {
        expect(repeatWord(word, count)).toBe(correctAnswer);
    })
})

describe("countDown", ()=>{
    const number = 5;
    const correctAnswer = '5 4 3 2 1';
    it("Should be correctly if the sequence of numbers is in reverse order", () => {
        expect(countDown(number)).toBe(correctAnswer);
    })
})
