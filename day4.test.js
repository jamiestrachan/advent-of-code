/*
You arrive at the Venus fuel depot only to discover it's protected by a password. The Elves had written the password on a sticky note, but someone threw it out.

However, they do remember a few key facts about the password:

    It is a six-digit number.
    The value is within the range given in your puzzle input.
    Two adjacent digits are the same (like 22 in 122345).
    Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).

Other than the range rule, the following are true:

    111111 meets these criteria (double 11, never decreases).
    223450 does not meet these criteria (decreasing pair of digits 50).
    123789 does not meet these criteria (no double).
*/
const day4 = require('./day4');

test('validate six-digit number', () => {
    expect(day4.isSixDigits).toBeDefined();
    expect(day4.isSixDigits(1)).toBe(false);
    expect(day4.isSixDigits(12)).toBe(false);
    expect(day4.isSixDigits(123)).toBe(false);
    expect(day4.isSixDigits(1234)).toBe(false);
    expect(day4.isSixDigits(12345)).toBe(false);
    expect(day4.isSixDigits(123456)).toBe(true);
    expect(day4.isSixDigits(1234567)).toBe(false);
});
