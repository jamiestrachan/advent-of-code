/*
https://adventofcode.com/2021/day/3
https://adventofcode.com/2021/day/3#part2
*/

function separateBits(bits) {
    if (!bits || !bits.length) return false;
    let splitBits = bits.split("");
    return splitBits.map(x => parseInt(x));
}

function transposeBits(inputs) {
    if (!inputs || !Array.isArray(inputs)) return false;
    let output = [];
    let bits = [];
    for (let i = 0; i < inputs.length; i++) {
        bits = separateBits(inputs[i]);
        for (let j = 0; j < bits.length; j++) {
            if (!output[j]) output[j] = [];
            output[j].push(bits[j]);
        }
    }
    return output;
}

function mostCommonBit(bits) {
    if (!bits || !Array.isArray(bits)) return false;
    let totalBits = bits.reduce(function (total, current) {
        return total + current
      }, 0);

    return totalBits / bits.length >= 0.5 ? 1 : 0;
}

function leastCommonBit(bits) {
    if (!bits || !Array.isArray(bits)) return false;

    return mostCommonBit(bits) === 1 ? 0 : 1;
}

function calculateGamma(bitSets) { //expects binary
    if (!bitSets || !Array.isArray(bitSets)) return false;
    return bitSets.map(x => mostCommonBit(x)).join(""); //returns binary
}

function calculateEpsilon(bitSets) { //expects binary
    if (!bitSets || !Array.isArray(bitSets)) return false;
    return bitSets.map(x => leastCommonBit(x)).join(""); //returns binary
}

 function combineGammaEpsilon(gamma, epsilon) { //expects decimal
     gamma = parseInt(gamma) || 0;
     epsilon = parseInt(epsilon) || 0;
     return gamma * epsilon; // returns decimal
 }

function calculatePowerConsumption(input) {
    if (!input || !Array.isArray(input)) return false;

    const transposed = transposeBits(input);  
    const gamma = calculateGamma(transposed);
    const epsilon = calculateEpsilon(transposed);
    return combineGammaEpsilon(parseInt(gamma, 2), parseInt(epsilon, 2));
}

function calculateOxygenGeneratorRating(input) {
    if (!input || !Array.isArray(input)) return false;
    return false;
}

function calculateCO2ScrubberRating(input) {
    if (!input || !Array.isArray(input)) return false;
    return false;
}

function combineO2CO2(o2, co2) {
    return false;
}

function calculateLifeSupportRating(input) {
    if (!input || !Array.isArray(input)) return false;

    const o2Rating = calculateOxygenGeneratorRating(input);
    const co2Rating = calculateCO2ScrubberRating(input);
    return combineO2CO2(o2Rating, co2Rating)
    return false;
}

module.exports = {
    separateBits: separateBits,
    transposeBits: transposeBits,
    mostCommonBit: mostCommonBit,
    leastCommonBit: leastCommonBit,
    calculateGamma: calculateGamma,
    calculateEpsilon: calculateEpsilon,
    combineGammaEpsilon: combineGammaEpsilon,
    calculatePowerConsumption: calculatePowerConsumption,
    calculateOxygenGeneratorRating: calculateOxygenGeneratorRating,
    calculateCO2ScrubberRating: calculateCO2ScrubberRating,
    calculateLifeSupportRating: calculateLifeSupportRating,
};