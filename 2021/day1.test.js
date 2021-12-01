/*

    For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
    For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
    For a mass of 1969, the fuel required is 654.
    For a mass of 100756, the fuel required is 33583.
*/

const day1 = require('./day1');

const weights = [147077, 148686, 71851, 98056, 65024, 87254, 146003, 128542, 136657, 91885, 91904, 78806, 58210, 67520, 118393, 68344, 69593, 135370, 111892, 84153, 105683, 76166, 112780, 145179, 83811, 61481, 118277, 59732, 72222, 64606, 55645, 82168, 97590, 122479, 120365, 103057, 76225, 148099, 100610, 75592, 148678, 132756, 55335, 77094, 73992, 95097, 92382, 78885, 93657, 121709, 114261, 90565, 110043, 145497, 92066, 109833, 76107, 143941, 67084, 139407, 56730, 131457, 110026, 85632, 74239, 116964, 129806, 75030, 76317, 99523, 78069, 75685, 81279, 58287, 148135, 89313, 139141, 136066, 94046, 50430, 55242, 123494, 68410, 83716, 122608, 79343, 88826, 95968, 98603, 104895, 128814, 120473, 97504, 60990, 98132, 58895, 92987, 136301, 131747, 137498];

test('expect day1.massToFuel', () => {
    expect(day1.massToFuel()).toBeDefined();
});
test('day1.massToFuel for different masses', () => {
    expect(day1.massToFuel(0)).toBe(0);
    expect(day1.massToFuel(12)).toBe(2);
    expect(day1.massToFuel(14)).toBe(2);
    expect(day1.massToFuel(1969)).toBe(654);
    expect(day1.massToFuel(654)).toBe(216);
    expect(day1.massToFuel(216)).toBe(70);
    expect(day1.massToFuel(70)).toBe(21);
    expect(day1.massToFuel(21)).toBe(5);
    expect(day1.massToFuel(5)).toBe(0);
    expect(day1.massToFuel(100756)).toBe(33583);
});

test('expect day1.massToFuelSum', () => {
    expect(day1.massToFuelSum()).toBeDefined();
});
test('day1.massToFuelSum for different mass lists', () => {
    expect(day1.massToFuelSum([])).toBe(0);
    expect(day1.massToFuelSum([0])).toBe(0);
    expect(day1.massToFuelSum([12])).toBe(2);
    expect(day1.massToFuelSum([12,14])).toBe(4);
    expect(day1.massToFuelSum([12,14,1969])).toBe(658);
    expect(day1.massToFuelSum([12,14,1969,100756])).toBe(34241);
    expect(day1.massToFuelSum(weights)).toBe(3278434);
});

test('expect day1.recursiveFuelMass', () => {
    expect(day1.recursiveFuelMass()).toBeDefined();
});
test('expect day1.recursiveFuelMass to not add fuel for sufficiently small numbers', () => {
    expect(day1.recursiveFuelMass(0)).toBe(0);
    expect(day1.recursiveFuelMass(1)).toBe(0);
    expect(day1.recursiveFuelMass(2)).toBe(0);
    expect(day1.recursiveFuelMass(3)).toBe(0);
    expect(day1.recursiveFuelMass(4)).toBe(0);
    expect(day1.recursiveFuelMass(5)).toBe(0);
    expect(day1.recursiveFuelMass(6)).toBe(0);
    expect(day1.recursiveFuelMass(7)).toBe(0);
    expect(day1.recursiveFuelMass(8)).toBe(0);
});
test('expect day1.recursiveFuelMass to calculate recursive fuel for larger numbers', () => {
    expect(day1.recursiveFuelMass(1969)).toBe(966);
    expect(day1.recursiveFuelMass(100756)).toBe(50346);
    expect(day1.massToFuelSumRecursive([1969,100756])).toBe(51312);
    expect(day1.massToFuelSumRecursive(weights)).toBe(4914785);
});


