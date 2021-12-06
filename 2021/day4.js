/*
https://adventofcode.com/2021/day/4
*/

class BingoSpace {
    #value = -1;
    #called = false;

    constructor(value) {
        if (!isNaN(value)) { this.#value = parseInt(value); }
    }

    get value() { return this.#value; }
    get isCalled() { return this.#called; }

    call(called) {
        if (this.#value === called) {
            this.#called = true;
            return true;
        }
        return false;
    }
    reset() {
        this.#called = false;
        return true;
    }
    toString() {
        return `${this.#value}`;
    }
}

class BingoCard {
    #card = [];
    #winner = false;

    constructor(card) {
        const rows = card.split(/\s*\n\s*/);
        for (let r = 0; r < rows.length; r++) {
            this.#card[r] = [];
            let cols = rows[r].split(/\s+/);
            for (let c = 0; c < cols.length; c++) {
                this.#card[r].push(new BingoSpace(cols[c]));
            }
        }
    }

    get isWinner() { return this.#winner; }
    get score() {
        let score = 0;
        for (let r = 0; r < this.#card.length; r++) {
            for (let c = 0; c < this.#card[r].length; c++) {
                if (!this.#card[r][c].isCalled) {
                    score += this.#card[r][c].value;
                }
            }
        }
        return score;
    }

    _checkRows() {
        let winner = true;
        for (let r = 0; r < this.#card.length; r++) {
            winner = true;
            for (let c = 0; c < this.#card[r].length; c++) {
                winner = winner && this.#card[r][c].isCalled;
            }
            this.#winner = winner || this.#winner;
        }
        return this.#winner;
    }

    _checkCols() {
        let winner = true;
        const colCount = this.#card[0].length;
        for (let c = 0; c < colCount; c++) {
            winner = true;
            for (let r = 0; r < this.#card.length; r++) {
                winner = winner && this.#card[r][c].isCalled;
            }
            this.#winner = winner || this.#winner;

        }
        return this.#winner;
    }

    _checkLines() {
        return this.#winner === true || this._checkRows() === true || this._checkCols() === true;
    }
    
    call(value) {
        value = parseInt(value);
        let retval = false;
        for (let r = 0; r < this.#card.length; r++) {
            for (let c = 0; c < this.#card[r].length; c++) {
                retval = this.#card[r][c].call(value) || retval;
            }
        }
        if (retval === true) { this._checkLines(); }
        return retval;
    }

    reset() {
        let retval = false;
        for (let r = 0; r < this.#card.length; r++) {
            for (let c = 0; c < this.#card[r].length; c++) {
                retval = this.#card[r][c].reset() || retval;
            }
        }
        this.#winner = false;
        return retval;
    }

    toString() {
        let rowString = [];
        let colString = [];
        for (let r = 0; r < this.#card.length; r++) {
            colString = [];
            for (let c = 0; c < this.#card[r].length; c++) {
                colString.push(this.#card[r][c].toString());
            }
            rowString.push(colString.join(" "));
        }
        return rowString.join("\n");
    }
}

module.exports = {
    BingoSpace: BingoSpace,
    BingoCard: BingoCard,
}