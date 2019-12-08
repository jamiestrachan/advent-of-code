const input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,19,6,23,2,23,13,27,1,27,5,31,2,31,10,35,1,9,35,39,1,39,9,43,2,9,43,47,1,5,47,51,2,13,51,55,1,55,9,59,2,6,59,63,1,63,5,67,1,10,67,71,1,71,10,75,2,75,13,79,2,79,13,83,1,5,83,87,1,87,6,91,2,91,13,95,1,5,95,99,1,99,2,103,1,103,6,0,99,2,14,0,0];

function opcodeAdd(operand1, operand2) {
    return operand1 + operand2;
}

function opcodeTimes(operand1, operand2) {
    return operand1 * operand2;
}

const operations = [];
operations[1] = opcodeAdd;
operations[2] = opcodeTimes;

function interpretIntcode(program) {
    program = program || [];
    let operand1, operand2, target;

    if (program.length > 0) {
        let cursor = 0;
        while (program[cursor] !== 99 && cursor <= program.length) {
            if (operations[program[cursor]]) {
                operand1 = program[program[cursor+1]];
                operand2 = program[program[cursor+2]];
                target = program[cursor+3];
                program[target] = operations[program[cursor]](operand1, operand2);
                cursor += 4;
            } else {
                //console.log("uh oh");
            }
        }
    }
    return program;
}

function intcodeResult(program) {
    return interpretIntcode(program)[0];
}

function replaceNoun(program, noun) {
    const newProgram = program;
    newProgram[1] = noun;
    return newProgram;
}
function replaceVerb(program, verb) {
    const newProgram = program;
    newProgram[2] = verb;
    return newProgram;
}

for (let n = 0; n <= 99; n++) {
    for (let v = 0; v <= 99; v++) {
        let attempt = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,19,6,23,2,23,13,27,1,27,5,31,2,31,10,35,1,9,35,39,1,39,9,43,2,9,43,47,1,5,47,51,2,13,51,55,1,55,9,59,2,6,59,63,1,63,5,67,1,10,67,71,1,71,10,75,2,75,13,79,2,79,13,83,1,5,83,87,1,87,6,91,2,91,13,95,1,5,95,99,1,99,2,103,1,103,6,0,99,2,14,0,0];
        if (intcodeResult(replaceNoun(replaceVerb(attempt, v), n)) === 19690720) {
            console.log(`noun: ${n}, verb: ${v}`);
        }
    }
}

module.exports = {
    input: input,
    interpretIntcode: interpretIntcode,
    intcodeResult: intcodeResult,
    replaceNoun: replaceNoun,
    replaceVerb: replaceVerb,
};
