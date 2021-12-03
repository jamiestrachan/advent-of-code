/*
It seems like the submarine can take a series of commands like forward 1, down 2, or up 3:

    forward X increases the horizontal position by X units.
    down X increases the depth by X units.
    up X decreases the depth by X units.

*/

const { Submarine } = require('./day2');
const day2 = require('./day2');

const sample_directions = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"];
const final_directions = ["forward 1", "down 3", "down 2", "up 1", "down 7", "down 8", "forward 6", "forward 1", "forward 1", "down 6", "up 3", "down 7", "down 1", "down 6", "forward 6", "down 6", "forward 3", "up 7", "forward 5", "down 4", "forward 6", "forward 1", "forward 6", "forward 9", "forward 3", "up 1", "forward 7", "down 9", "forward 2", "up 9", "down 5", "down 3", "up 1", "down 6", "down 7", "down 8", "down 7", "forward 7", "forward 3", "down 5", "down 2", "forward 4", "forward 7", "down 8", "down 4", "down 5", "down 1", "forward 4", "up 6", "forward 6", "forward 4", "forward 5", "up 3", "up 6", "down 4", "down 8", "forward 4", "forward 5", "down 3", "forward 1", "down 5", "down 5", "forward 8", "forward 9", "forward 1", "forward 8", "forward 5", "forward 6", "up 8", "down 3", "forward 8", "up 2", "down 3", "down 9", "up 9", "forward 5", "down 2", "forward 7", "forward 5", "forward 5", "down 2", "down 3", "forward 7", "forward 9", "down 9", "forward 3", "forward 3", "down 3", "forward 3", "up 6", "down 4", "forward 3", "forward 3", "forward 7", "down 4", "forward 8", "up 8", "down 3", "down 2", "forward 2", "down 6", "down 6", "up 7", "up 9", "down 4", "up 7", "up 8", "down 6", "down 1", "forward 6", "forward 9", "forward 1", "forward 8", "down 4", "up 3", "forward 6", "down 5", "forward 7", "forward 5", "down 2", "forward 7", "down 6", "forward 7", "up 2", "up 5", "forward 3", "down 6", "down 9", "down 9", "forward 9", "up 7", "down 6", "down 4", "down 8", "forward 6", "up 6", "down 2", "forward 5", "up 7", "forward 5", "down 1", "up 8", "forward 2", "forward 4", "down 5", "down 8", "up 7", "up 5", "down 2", "forward 8", "forward 4", "up 6", "forward 8", "down 3", "down 2", "down 2", "forward 4", "forward 2", "forward 9", "up 3", "up 7", "up 3", "up 5", "forward 5", "up 8", "forward 3", "forward 1", "down 3", "down 8", "forward 6", "forward 5", "up 5", "down 9", "down 1", "down 9", "forward 9", "up 3", "forward 7", "forward 6", "forward 1", "up 3", "forward 9", "forward 7", "down 9", "up 6", "forward 2", "up 9", "forward 6", "forward 4", "up 3", "forward 5", "down 4", "up 8", "up 4", "up 9", "down 1", "down 7", "forward 7", "forward 2", "down 9", "forward 7", "forward 2", "down 6", "down 9", "up 6", "down 7", "down 2", "down 7", "down 6", "down 4", "down 4", "forward 6", "forward 9", "forward 4", "down 7", "down 5", "up 6", "down 7", "forward 2", "down 3", "down 1", "forward 1", "forward 5", "down 4", "down 4", "down 1", "down 9", "forward 6", "down 3", "forward 5", "up 7", "forward 9", "down 8", "down 3", "up 2", "up 2", "forward 4", "down 7", "forward 2", "forward 5", "forward 4", "forward 3", "down 8", "down 6", "forward 9", "down 1", "forward 1", "down 1", "up 8", "down 2", "forward 2", "up 5", "down 7", "forward 8", "down 7", "down 4", "forward 2", "forward 6", "up 2", "forward 8", "forward 2", "forward 1", "up 5", "down 4", "down 8", "forward 4", "down 8", "up 8", "forward 3", "down 5", "forward 2", "forward 1", "up 3", "forward 9", "up 5", "forward 5", "forward 5", "up 8", "down 6", "forward 3", "down 4", "up 5", "forward 3", "up 6", "forward 6", "forward 9", "down 7", "down 7", "down 8", "down 4", "forward 4", "forward 3", "forward 3", "forward 5", "down 3", "forward 8", "up 5", "forward 1", "up 7", "down 5", "forward 7", "forward 3", "down 3", "forward 2", "forward 1", "forward 4", "up 2", "down 8", "forward 9", "forward 9", "down 6", "down 1", "down 5", "forward 4", "down 2", "forward 1", "up 7", "down 9", "forward 3", "down 5", "down 5", "up 6", "down 6", "forward 8", "down 1", "up 3", "down 2", "up 1", "forward 5", "down 4", "down 6", "forward 8", "down 4", "down 5", "down 2", "forward 5", "forward 8", "down 8", "up 4", "forward 2", "up 2", "down 9", "forward 6", "forward 1", "forward 5", "up 2", "down 1", "up 7", "up 3", "forward 3", "down 7", "forward 2", "forward 4", "up 7", "forward 4", "forward 6", "up 2", "forward 4", "forward 2", "down 6", "down 5", "down 5", "down 6", "forward 9", "up 4", "down 4", "down 7", "up 6", "up 9", "up 4", "down 4", "up 7", "down 9", "down 9", "forward 3", "down 7", "down 7", "down 7", "down 2", "up 2", "up 1", "up 6", "down 8", "up 7", "down 4", "forward 8", "down 7", "up 1", "down 5", "down 3", "forward 6", "up 1", "down 5", "forward 3", "forward 6", "forward 7", "forward 2", "down 3", "forward 1", "up 9", "down 5", "up 2", "up 9", "up 2", "up 2", "forward 1", "down 2", "forward 1", "down 7", "forward 1", "forward 8", "down 9", "down 1", "forward 9", "forward 7", "forward 7", "down 5", "down 5", "down 3", "forward 6", "down 7", "down 4", "forward 2", "up 6", "down 3", "up 4", "up 7", "forward 2", "forward 8", "forward 4", "down 7", "down 9", "up 1", "down 2", "up 8", "down 2", "up 6", "forward 6", "up 5", "down 2", "forward 5", "down 4", "forward 7", "down 3", "down 5", "forward 1", "down 7", "forward 1", "up 1", "forward 4", "up 4", "forward 4", "forward 5", "forward 7", "down 7", "down 2", "up 4", "down 2", "down 3", "forward 3", "forward 2", "forward 5", "forward 2", "up 8", "forward 3", "down 7", "down 9", "forward 3", "forward 6", "down 7", "down 5", "down 3", "up 3", "forward 5", "forward 2", "down 1", "up 1", "up 8", "down 6", "down 4", "down 1", "forward 1", "down 7", "up 8", "forward 2", "forward 8", "forward 8", "forward 7", "down 1", "forward 8", "down 8", "forward 4", "down 3", "up 9", "down 8", "forward 9", "down 7", "up 2", "forward 9", "down 4", "up 3", "up 4", "up 4", "forward 5", "up 2", "forward 3", "down 5", "forward 5", "down 5", "up 8", "down 4", "forward 6", "down 6", "forward 7", "forward 2", "down 2", "up 7", "down 5", "down 9", "down 8", "down 4", "up 3", "forward 4", "down 8", "down 8", "down 9", "down 7", "forward 2", "forward 8", "up 5", "forward 8", "down 9", "forward 6", "up 1", "down 6", "forward 1", "up 4", "down 3", "forward 3", "forward 2", "down 6", "forward 7", "up 6", "up 9", "down 1", "forward 3", "forward 4", "forward 2", "up 8", "forward 9", "up 7", "down 2", "forward 2", "up 7", "down 2", "up 6", "down 2", "forward 9", "forward 3", "down 6", "down 5", "down 3", "forward 9", "down 8", "down 8", "down 2", "down 7", "up 3", "forward 1", "down 7", "up 8", "up 8", "forward 5", "forward 5", "forward 1", "down 8", "down 6", "forward 2", "up 3", "forward 1", "forward 7", "forward 4", "forward 5", "forward 9", "forward 7", "forward 6", "forward 3", "forward 4", "down 8", "down 1", "forward 6", "forward 9", "forward 6", "forward 9", "forward 6", "up 3", "down 8", "forward 4", "forward 1", "down 4", "forward 9", "down 8", "down 3", "up 2", "forward 5", "forward 2", "forward 5", "down 6", "down 3", "up 1", "down 9", "up 5", "forward 6", "down 7", "forward 1", "forward 9", "down 2", "down 5", "forward 3", "forward 6", "down 4", "down 5", "up 4", "forward 7", "forward 5", "down 8", "forward 6", "down 5", "forward 2", "down 7", "forward 4", "forward 8", "down 8", "forward 2", "forward 8", "down 5", "forward 7", "down 8", "down 1", "forward 8", "down 4", "up 4", "down 7", "down 6", "up 5", "forward 4", "forward 1", "forward 4", "down 5", "forward 5", "forward 9", "down 1", "forward 3", "up 7", "down 1", "down 7", "forward 2", "down 5", "down 6", "forward 5", "up 2", "down 9", "forward 1", "up 5", "forward 6", "forward 9", "forward 4", "up 4", "down 6", "up 9", "up 5", "down 2", "up 9", "down 2", "down 4", "down 8", "down 2", "forward 2", "forward 2", "down 9", "up 5", "forward 2", "forward 8", "down 2", "down 2", "down 9", "down 3", "down 9", "up 9", "up 3", "down 1", "down 9", "down 2", "forward 7", "down 2", "up 3", "down 9", "up 2", "up 4", "forward 5", "forward 7", "down 7", "up 7", "up 5", "down 8", "up 2", "forward 2", "down 3", "down 5", "forward 2", "forward 3", "forward 3", "down 1", "down 1", "forward 9", "down 5", "down 7", "forward 7", "forward 5", "up 9", "forward 3", "up 4", "forward 1", "forward 3", "down 4", "forward 9", "down 5", "down 3", "down 5", "forward 6", "down 6", "forward 2", "up 4", "down 4", "forward 2", "down 8", "up 9", "forward 9", "forward 4", "down 8", "forward 2", "forward 5", "forward 1", "forward 5", "up 1", "forward 7", "forward 9", "down 5", "forward 6", "down 1", "forward 6", "down 2", "forward 9", "down 1", "forward 1", "down 4", "down 6", "down 2", "up 7", "up 5", "forward 8", "forward 1", "down 8", "forward 1", "forward 2", "down 8", "forward 7", "down 5", "forward 1", "down 2", "up 7", "forward 7", "down 4", "down 8", "up 6", "up 4", "forward 7", "down 3", "up 5", "down 5", "forward 7", "up 7", "down 6", "forward 8", "down 7", "down 2", "up 3", "down 9", "down 7", "down 8", "forward 4", "forward 3", "forward 9", "forward 6", "up 7", "forward 5", "down 4", "down 5", "forward 6", "up 9", "down 6", "down 7", "down 8", "down 9", "down 4", "up 5", "down 4", "forward 5", "forward 3", "down 3", "down 7", "up 8", "forward 5", "down 8", "down 1", "down 6", "down 9", "up 4", "up 1", "down 8", "down 3", "down 8", "up 4", "down 7", "down 6", "forward 7", "up 9", "down 4", "down 1", "down 6", "down 2", "forward 7", "down 2", "down 7", "forward 3", "forward 6", "up 2", "down 4", "up 1", "forward 4", "up 2", "down 4", "up 3", "down 8", "up 9", "forward 8", "down 5", "down 4", "forward 8", "down 1", "down 8", "forward 3", "down 4", "forward 5", "down 5", "up 9", "forward 1", "down 9", "down 1", "forward 4", "forward 9", "up 1", "forward 4", "forward 2", "down 9", "down 1", "forward 1", "down 2", "forward 2", "down 5", "up 4", "up 7", "down 8", "forward 3", "up 1", "down 4", "forward 5", "up 2", "forward 4", "forward 2", "down 1", "forward 4", "forward 1", "up 5", "forward 8", "forward 4", "forward 1", "down 6", "down 7", "up 4", "forward 9", "up 6", "forward 9", "forward 3", "forward 2", "down 2", "forward 7", "up 7", "forward 7", "down 4", "down 6", "forward 8", "up 8", "forward 1", "forward 3", "forward 3", "up 8", "down 1", "up 9", "forward 1", "up 1", "down 7", "forward 7", "up 5", "forward 5", "up 9", "up 3", "forward 2", "forward 6", "up 1", "forward 5", "up 1", "down 3", "down 5", "forward 8", "up 5", "forward 1", "down 8", "forward 4", "down 3", "down 1", "down 7", "forward 7", "forward 3", "down 4", "forward 9", "up 5", "down 2", "forward 4", "up 7", "up 5", "forward 3", "down 7", "forward 8", "up 4", "up 2", "forward 2", "down 9", "forward 4", "down 5", "forward 2", "down 9", "down 5", "up 7", "forward 3", "down 8", "forward 7", "forward 9", "down 5", "forward 2", "forward 9", "forward 5", "down 5", "up 4", "down 6", "down 6", "forward 8", "forward 5", "forward 4", "down 5", "forward 2", "down 8", "forward 9", "down 1", "down 8", "down 7", "up 9", "down 7", "down 1", "forward 7", "forward 9", "forward 8", "up 2", "forward 6", "down 3", "down 6", "up 4", "forward 4", "forward 5", "down 9", "down 5", "forward 1", "down 2", "forward 1", "down 1", "up 1", "up 7", "up 5", "forward 6", "forward 3"];

test('expect Submarine class to exist with defaults', () => {
    const sub = new day2.Submarine();
    expect(sub).toBeDefined();
    expect(sub.horizontal).toBe(0);
    expect(sub.depth).toBe(0);
    expect(sub.position).toBe(0);
});

test('move Submarine forward horizontally', () => {
    const sub = new day2.Submarine();
    expect(sub.moveForward).toBeDefined();
    expect(sub.horizontal).toBe(0);
    expect(sub.depth).toBe(0);
    
    expect(sub.moveForward(0)).toBe(true);
    expect(sub.horizontal).toBe(0);
    expect(sub.depth).toBe(0);
    
    expect(sub.moveForward(1)).toBe(true);
    expect(sub.horizontal).toBe(1);
    expect(sub.depth).toBe(0);
    
    expect(sub.moveForward("x")).toBe(false);
    expect(sub.horizontal).toBe(1);
    expect(sub.depth).toBe(0);
    
    expect(sub.moveForward(10)).toBe(true);
    expect(sub.horizontal).toBe(11);
    expect(sub.depth).toBe(0);
    
    expect(sub.moveForward()).toBe(false);
    expect(sub.horizontal).toBe(11);
    expect(sub.depth).toBe(0);
});

test('adjust Submarine depth', () => {
    const sub = new day2.Submarine();
    expect(sub.moveDown).toBeDefined();
    expect(sub.moveUp).toBeDefined();
    expect(sub.depth).toBe(0);
    
    expect(sub.moveDown(0)).toBe(true);
    expect(sub.depth).toBe(0);
    
    expect(sub.moveDown(1)).toBe(true);
    expect(sub.depth).toBe(1);
    
    expect(sub.moveDown("x")).toBe(false);
    expect(sub.depth).toBe(1);
    
    expect(sub.moveDown(10)).toBe(true);
    expect(sub.depth).toBe(11);
    
    expect(sub.moveDown()).toBe(false);
    expect(sub.depth).toBe(11);

    expect(sub.moveUp()).toBe(false);
    expect(sub.depth).toBe(11);

    expect(sub.moveUp(10)).toBe(true);
    expect(sub.depth).toBe(1);

    expect(sub.moveUp("x")).toBe(false);
    expect(sub.depth).toBe(1);

    expect(sub.moveUp(0)).toBe(true);
    expect(sub.depth).toBe(1);

    expect(sub.moveUp(1)).toBe(true);
    expect(sub.depth).toBe(0);

    expect(sub.moveUp(1)).toBe(false); //this would put us above 0
    expect(sub.depth).toBe(0);

    expect(sub.moveUp(10)).toBe(false); //this would put us above 0
    expect(sub.depth).toBe(0);
});


test('adjust Submarine aim', () => {
    const sub = new day2.Submarine();
    expect(sub.aimDown).toBeDefined();
    expect(sub.aimUp).toBeDefined();
    expect(sub.aim).toBe(0);
    expect(sub.depth).toBe(0);

    expect(sub.aimDown()).toBe(false);
    expect(sub.horizontal).toBe(0);
    expect(sub.aim).toBe(0);
    expect(sub.depth).toBe(0);

    expect(sub.aimDown("x")).toBe(false);
    expect(sub.horizontal).toBe(0);
    expect(sub.aim).toBe(0);
    expect(sub.depth).toBe(0);

    expect(sub.aimUp()).toBe(false);
    expect(sub.horizontal).toBe(0);
    expect(sub.aim).toBe(0);
    expect(sub.depth).toBe(0);

    expect(sub.aimUp("x")).toBe(false);
    expect(sub.horizontal).toBe(0);
    expect(sub.aim).toBe(0);
    expect(sub.depth).toBe(0);

    expect(sub.aimDown(1)).toBe(true);
    expect(sub.horizontal).toBe(0);
    expect(sub.aim).toBe(1);
    expect(sub.depth).toBe(0);

    expect(sub.aimUp(1)).toBe(true);
    expect(sub.horizontal).toBe(0);
    expect(sub.aim).toBe(0);
    expect(sub.depth).toBe(0);

    expect(sub.aimDown(10)).toBe(true);
    expect(sub.horizontal).toBe(0);
    expect(sub.aim).toBe(10);
    expect(sub.depth).toBe(0);

    expect(sub.aimUp(20)).toBe(true);
    expect(sub.horizontal).toBe(0);
    expect(sub.aim).toBe(-10);
    expect(sub.depth).toBe(0);
});

test('adjust submarine depth via aim', () => {
    const sub = new day2.Submarine();
    expect(sub.horizontal).toBe(0);
    expect(sub.aim).toBe(0);
    expect(sub.depth).toBe(0);
    expect(sub.position).toBe(0);

    expect(sub.aimDown(5)).toBe(true);
    expect(sub.moveForward(5)).toBe(true);
    expect(sub.horizontal).toBe(5);
    expect(sub.aim).toBe(5);
    expect(sub.depth).toBe(25);
    expect(sub.position).toBe(125);

    expect(sub.aimDown(5)).toBe(true);
    expect(sub.moveForward(5)).toBe(true);
    expect(sub.horizontal).toBe(10);
    expect(sub.aim).toBe(10);
    expect(sub.depth).toBe(75); //25 + (10*5)
    expect(sub.position).toBe(750);

    expect(sub.aimUp(2)).toBe(true);
    expect(sub.moveForward(10)).toBe(true);
    expect(sub.horizontal).toBe(20);
    expect(sub.aim).toBe(8);
    expect(sub.depth).toBe(155); //75 + (8*10)
    expect(sub.position).toBe(3100);

    expect(sub.aimUp(28)).toBe(true);
    expect(sub.moveForward(10)).toBe(false);
    expect(sub.horizontal).toBe(30);
    expect(sub.aim).toBe(-20);
    expect(sub.depth).toBe(0); //155 + (-20 * 10)
    expect(sub.position).toBe(0);
});

test('calculate Submarine position', () => {
    const sub = new day2.Submarine();
    expect(sub.position).toBe(0);

    expect(sub.moveForward(1)).toBe(true);
    expect(sub.horizontal).toBe(1);
    expect(sub.depth).toBe(0);
    expect(sub.position).toBe(0);

    expect(sub.moveUp(1)).toBe(false);
    expect(sub.horizontal).toBe(1);
    expect(sub.depth).toBe(0);
    expect(sub.position).toBe(0);

    expect(sub.moveDown(1)).toBe(true);
    expect(sub.horizontal).toBe(1);
    expect(sub.depth).toBe(1);
    expect(sub.position).toBe(1);

    expect(sub.moveDown(10)).toBe(true);
    expect(sub.horizontal).toBe(1);
    expect(sub.depth).toBe(11);
    expect(sub.position).toBe(11);

    expect(sub.moveForward(6)).toBe(true);
    expect(sub.horizontal).toBe(7);
    expect(sub.depth).toBe(11);
    expect(sub.position).toBe(77);

    expect(sub.moveUp(2)).toBe(true);
    expect(sub.horizontal).toBe(7);
    expect(sub.depth).toBe(9);
    expect(sub.position).toBe(63);
});

test('follow instructions', () => {
    const sub = new Submarine();

    expect(sub.followInstruction).toBeDefined();
    expect(sub.followInstruction()).toBe(false);
    expect(sub.followInstruction(1)).toBe(false);
    expect(sub.followInstruction("x")).toBe(false);
    expect(sub.followInstruction("x x")).toBe(false);
    expect(sub.followInstruction("up x")).toBe(false);
    expect(sub.followInstruction("down x")).toBe(false);
    expect(sub.followInstruction("forward x")).toBe(false);
    expect(sub.horizontal).toBe(0);
    expect(sub.aim).toBe(0);
    expect(sub.depth).toBe(0);
    expect(sub.position).toBe(0);

    expect(sub.followInstruction("forward 3")).toBe(true);
    expect(sub.horizontal).toBe(3);
    expect(sub.aim).toBe(0);
    expect(sub.depth).toBe(0);
    expect(sub.position).toBe(0);

    expect(sub.followInstruction("down 2")).toBe(true);
    expect(sub.horizontal).toBe(3);
    expect(sub.aim).toBe(2);
    expect(sub.depth).toBe(0);
    expect(sub.position).toBe(0);

    expect(sub.followInstruction("forward 3")).toBe(true);
    expect(sub.horizontal).toBe(6);
    expect(sub.aim).toBe(2);
    expect(sub.depth).toBe(6);
    expect(sub.position).toBe(36);

    expect(sub.followInstruction("up 1")).toBe(true);
    expect(sub.horizontal).toBe(6);
    expect(sub.aim).toBe(1);
    expect(sub.depth).toBe(6);
    expect(sub.position).toBe(36);

    expect(sub.followInstruction("forward 3")).toBe(true);
    expect(sub.horizontal).toBe(9);
    expect(sub.aim).toBe(1);
    expect(sub.depth).toBe(9); //6 + (1*3)
    expect(sub.position).toBe(81);

    expect(sub.followInstruction("up 5")).toBe(true);
    expect(sub.horizontal).toBe(9);
    expect(sub.aim).toBe(-4);
    expect(sub.depth).toBe(9);
    expect(sub.position).toBe(81);

    expect(sub.followInstruction("forward 10")).toBe(false); //this instruction would raise depth above 0 so we expect a false
    expect(sub.horizontal).toBe(19);
    expect(sub.aim).toBe(-4);
    expect(sub.depth).toBe(0); //9 + (-4*10)
    expect(sub.position).toBe(0);
});

test('follow paths', () => {
    const sub = new Submarine();

    expect(sub.followPath).toBeDefined();
    expect(sub.followPath()).toBe(false);
    expect(sub.followPath("up 2")).toBe(false);
    expect(sub.followPath(3)).toBe(false);
    expect(sub.followPath([])).toBe(false);

    expect(sub.followPath(['forward 2'])).toBe(true);
    expect(sub.horizontal).toBe(2);
    expect(sub.aim).toBe(0);
    expect(sub.depth).toBe(0);
    expect(sub.position).toBe(0);

    expect(sub.followPath(['forward 2','down 2'])).toBe(true);
    expect(sub.horizontal).toBe(4);
    expect(sub.aim).toBe(2);
    expect(sub.depth).toBe(0);
    expect(sub.position).toBe(0);

    expect(sub.followPath(['forward 2','down 2','up 1'])).toBe(true);
    expect(sub.horizontal).toBe(6);
    expect(sub.aim).toBe(3);
    expect(sub.depth).toBe(4);
    expect(sub.position).toBe(24);

    expect(sub.followPath(['up 1','up 1','up 10','forward 10'])).toBe(false);
    expect(sub.horizontal).toBe(16);
    expect(sub.aim).toBe(-9);
    expect(sub.depth).toBe(0);
    expect(sub.position).toBe(0);
});

test('sample input', () => {
    const sub = new Submarine();

    expect(sub.followPath(sample_directions)).toBe(true);
    expect(sub.position).toBe(900);
});

test('test input', () => {
    const sub = new Submarine();

    expect(sub.followPath(final_directions)).toBe(true);
    expect(sub.position).toBe(1727785422);
});
