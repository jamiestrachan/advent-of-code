/*
https://adventofcode.com/2021/day/2
https://adventofcode.com/2021/day/2#part2
*/

class Submarine {
    #h = 0;
    #d = 0;

    get horizontal() { return this.#h; }
    get depth() { return this.#d; }
    get position() { return this.#h * this.#d; }

    moveForward(steps) {
        if (isNaN(steps)) return false;

        this.#h += steps;
        return true;
    }
    moveDown(steps) {
        if (isNaN(steps)) return false;

        this.#d += steps;
        return true;
    }
    moveUp(steps) {
        if (isNaN(steps)) return false;

        this.#d -= steps;
        if (this.#d < 0) {
            this.#d = 0;
            return false;
        }
        return true;
    }

    followInstruction(instruction) {
        if (instruction && instruction.split && instruction.split(" ").length === 2) {
            let [direction, steps] = instruction.split(" ");
            steps = parseInt(steps);

            if (isNaN(steps)) return false;

            switch(direction) {
                case 'forward':
                    return this.moveForward(steps);
                case 'down':
                    return this.moveDown(steps);
                case 'up':
                    return this.moveUp(steps); 
            }
        }
        return false;
    }

    followPath(instructions) {
        if (!instructions || !Array.isArray(instructions) || instructions.length < 1) return false;

        let retval = true;
        for (let i = 0; i < instructions.length; i++) {
            retval = this.followInstruction(instructions[i]) && retval;
        }

        return retval;
    }
}

module.exports = {
    Submarine: Submarine,
};