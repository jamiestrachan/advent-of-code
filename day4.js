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
function isSixDigits(num) {
    return (num.toString().length === 6);
}

function hasMatchingAdjacentDigits(num) {
    const digits = num.toString().split("");
    for (let i = 1; i < digits.length; i++) {
        if (digits[i-1] === digits[i]) return true;
    }
    return false;
}

function hasAscendingDigits(num) {
    const digits = num.toString().split("");
    for (let i = 1; i < digits.length; i++) {
        if (digits[i-1] > digits[i]) return false;
    }
    return true;
}

module.exports = {
    isSixDigits: isSixDigits,
    hasMatchingAdjacentDigits: hasMatchingAdjacentDigits,
    hasAscendingDigits: hasAscendingDigits,
};

