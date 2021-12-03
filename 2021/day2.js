/*
https://adventofcode.com/2021/day/2
https://adventofcode.com/2021/day/2#part2
*/

class Submarine {
    #h = 0;
    #d = 0;
    #a = 0;

    get horizontal() { return this.#h; }
    get depth() { return this.#d; }
    get aim() { return this.#a; }
    get position() { return this.#h * this.#d; }

    aimDown(steps) {
        if (isNaN(steps)) return false;

        this.#a += steps;
        return true;
    }
    aimUp(steps) {
        if (isNaN(steps)) return false;

        this.#a -= steps;
        return true;
    }
    changeDepth(steps) {
        if (isNaN(steps)) return false;

        this.#d += steps;
        if (this.#d < 0) {
            this.#d = 0;
            return false;
        }
        return true;
    }
    moveDown(steps) {
        if (isNaN(steps)) return false;

        return this.changeDepth(steps);
    }
    moveUp(steps) {
        if (isNaN(steps)) return false;

        return this.changeDepth(steps * -1);
    }
    moveForward(steps) {
        if (isNaN(steps)) return false;

        this.#h += steps;
        return this.changeDepth(this.#a * steps);
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
                    return this.aimDown(steps);
                case 'up':
                    return this.aimUp(steps); 
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