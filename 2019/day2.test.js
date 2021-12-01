const day2 = require('./day2');

test('simple Intcode programs', () => {
    expect(day2.interpretIntcode([])).toStrictEqual([]);
    expect(day2.interpretIntcode([99])).toStrictEqual([99]);
});

test('complicated Intcode programs', () => {
    expect(day2.interpretIntcode([1,0,0,0,99])).toStrictEqual([2,0,0,0,99]);
    expect(day2.interpretIntcode([2,3,0,3,99])).toStrictEqual([2,3,0,6,99]);
    expect(day2.interpretIntcode([2,4,4,5,99,0])).toStrictEqual([2,4,4,5,99,9801]);
    expect(day2.interpretIntcode([1,1,1,4,99,5,6,0,99])).toStrictEqual([30,1,1,4,2,5,6,0,99]);
    //expect(day2.interpretIntcode(day2.input)).toStrictEqual([ 3790645, 12, 2, 2, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 10, 48, 1, 19, 6, 50, 2, 23, 13, 250, 1, 27, 5, 251, 2, 31, 10, 1004, 1, 9, 35, 1007, 1, 39, 9, 1010, 2, 9, 43, 3030, 1, 5, 47, 3031, 2, 13, 51, 15155, 1, 55, 9, 15158, 2, 6, 59, 30316, 1, 63, 5, 30317, 1, 10, 67, 30321, 1, 71, 10, 30325, 2, 75, 13, 151625, 2, 79, 13, 758125, 1, 5, 83, 758126, 1, 87, 6, 758128, 2, 91, 13, 3790640, 1, 5, 95, 3790641, 1, 99, 2, 3790643, 1, 103, 6, 0, 99, 2, 14, 0, 0 ]);
});

test('get Intcode program result', () => {
    expect(day2.intcodeResult([1,0,0,0,99])).toBe(2);
    expect(day2.intcodeResult([2,3,0,3,99])).toBe(2);
    expect(day2.intcodeResult([2,4,4,5,99,0])).toBe(2);
    expect(day2.intcodeResult([1,1,1,4,99,5,6,0,99])).toBe(30);
    //expect(day2.intcodeResult(day2.input)).toBe(3790645);
});

test('replacing program noun', () => {
    expect(day2.replaceNoun([1,0,0,0,99],5)).toStrictEqual([1,5,0,0,99]);
    expect(day2.replaceNoun([2,3,0,3,99],6)).toStrictEqual([2,6,0,3,99]);
    expect(day2.replaceNoun([2,4,4,5,99,0],127)).toStrictEqual([2,127,4,5,99,0]);
    expect(day2.replaceNoun([1,1,1,4,99,5,6,0,99],98)).toStrictEqual([1,98,1,4,99,5,6,0,99]);
});

test('replacing program verb', () => {
    expect(day2.replaceVerb([1,0,0,0,99],5)).toStrictEqual([1,0,5,0,99]);
    expect(day2.replaceVerb([2,3,0,3,99],6)).toStrictEqual([2,3,6,3,99]);
    expect(day2.replaceVerb([2,4,4,5,99,0],127)).toStrictEqual([2,4,127,5,99,0]);
    expect(day2.replaceVerb([1,1,1,4,99,5,6,0,99],98)).toStrictEqual([1,1,98,4,99,5,6,0,99]);
});

