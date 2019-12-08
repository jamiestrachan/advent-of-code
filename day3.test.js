const day3 = require('./day3');

test('Point existence', () => {
    expect(day3.Point).toBeDefined();
});
test('create default Point', () => {
    const p = new day3.Point();
    expect(p.x()).toBe(0);
    expect(p.y()).toBe(0);
});
test('create set Point', () => {
    const p = new day3.Point(1,1);
    expect(p.x()).toBe(1);
    expect(p.y()).toBe(1);
});
test('generate new Points', () => {
    const startX = 1;
    const startY = 1;
    const p = new day3.Point(startX, startY);

    const p1 = p.up();
    expect(p1.x()).toBe(startX);
    expect(p1.y()).toBe(startY + 1);

    const p2 = p.down();
    expect(p2.x()).toBe(startX);
    expect(p2.y()).toBe(startY - 1);

    const p3 = p.left();
    expect(p3.x()).toBe(startX - 1);
    expect(p3.y()).toBe(startY);

    const p4 = p.right();
    expect(p4.x()).toBe(startX + 1);
    expect(p4.y()).toBe(startY);
});
test('comparing Points', () => {
    const p1 = new day3.Point();
    const p2 = new day3.Point();

    expect(p1.equals(p2)).toBe(true);

    const p3 = p1.right();
    expect(p1.equals(p3)).toBe(false);

    const p4 = p2.right();
    expect(p3.equals(p4)).toBe(true);
});
test('calculate Manhattan distance', () => {
    const p1 = new day3.Point();
    const p2 = new day3.Point(1,1);
    const p3 = new day3.Point(-100,-100);
    const p4 = new day3.Point(50,-50);
    const p5 = new day3.Point(-999,999);
    const p6 = new day3.Point(26,-78);

    expect(p1.distanceFrom()).toBe(0);
    expect(p1.distanceFrom(p2)).toBe(2);
    expect(p1.distanceFrom(p3)).toBe(200);
    expect(p3.distanceFrom(p4)).toBe(200);
    expect(p2.distanceFrom(p6)).toBe(104);
    expect(p1.distanceFrom(p5)).toBe(1998);
    expect(p5.distanceFrom(p6)).toBe(2102);
    expect(p6.distanceFrom()).toBe(104);
});

test('creating a Trail', () => {
    expect(day3.Trail).toBeDefined();

    const t = new day3.Trail();
    const p = new day3.Point();
    expect(t.start().equals(p)).toBe(true);
    expect(t.end().equals(p)).toBe(true);
});
test('adding to a Trail', () => {
    const t = new day3.Trail();
    expect(t.length()).toBe(0);

    t.moveRight();
    expect(t.end().equals(new day3.Point(1,0))).toBe(true);
    expect(t.length()).toBe(1);

    t.moveUp();
    expect(t.end().equals(new day3.Point(1,1))).toBe(true);
    expect(t.length()).toBe(2);

    t.moveLeft();
    expect(t.end().equals(new day3.Point(0,1))).toBe(true);
    expect(t.length()).toBe(3);

    t.moveDown();
    expect(t.end().equals(new day3.Point(0,0))).toBe(true);
    expect(t.length()).toBe(4);

    t.move("R");
    expect(t.end().equals(new day3.Point(1,0))).toBe(true);
    expect(t.length()).toBe(5);

    t.move("U");
    expect(t.end().equals(new day3.Point(1,1))).toBe(true);
    expect(t.length()).toBe(6);

    t.move("L");
    expect(t.end().equals(new day3.Point(0,1))).toBe(true);
    expect(t.length()).toBe(7);

    t.move("D");
    expect(t.end().equals(new day3.Point(0,0))).toBe(true);
    expect(t.length()).toBe(8);
});
test('instruction interpretation', () => {
    const t = new day3.Trail();

    expect(t.splitInstructionList("R1,L1")).toStrictEqual(["R1","L1"]);
    expect(t.splitInstructionList("R8,U5,L5,D3")).toStrictEqual(["R8","U5","L5","D3"]);

    expect(t.splitInstruction("R1")).toStrictEqual({"direction":"R","steps":1});
    expect(t.splitInstruction("U10")).toStrictEqual({"direction":"U","steps":10});
    expect(t.splitInstruction("D999")).toStrictEqual({"direction":"D","steps":999});
});
test('adding to a Trail with instructions', () => {
    const t1 = new day3.Trail();

    t1.followInstructions("R1");
    expect(t1.end().equals(new day3.Point(1,0))).toBe(true);
    expect(t1.length()).toBe(1);

    t1.followInstructions("D2,R2");
    expect(t1.end().equals(new day3.Point(3,-2))).toBe(true);
    expect(t1.length()).toBe(5);

    t1.followInstructions("D2,L5,U8");
    expect(t1.end().equals(new day3.Point(-2,4))).toBe(true);
    expect(t1.length()).toBe(20);

    const t2 = new day3.Trail();

    t2.followInstructions("R8,U5,L5,D3");
    expect(t2.end().equals(new day3.Point(3,2))).toBe(true);
    expect(t2.length()).toBe(21);
});
test('walking a Trail', () => {
    const t = new day3.Trail();

    t.followInstructions("R3");
    expect(t.walk(p => p.toString())).toStrictEqual(["0,0","1,0","2,0","3,0"]);
});
test('finding Trail intersections', () => {
    const t1 = new day3.Trail();
    const t2 = new day3.Trail();

    t1.followInstructions("R8,U5,L5,D3");
    t2.followInstructions("U7,R6,D4,L4");

    const tis = t1.intersections(t2);
    expect(tis.length).toBe(2);
    expect(tis).toContainEqual(new day3.Point(3,3));
    expect(tis).toContainEqual(new day3.Point(6,5));
});
test('finding closest Trail intersection', () => {
    const t1 = new day3.Trail("R8,U5,L5,D3");
    const t2 = new day3.Trail("U7,R6,D4,L4");
    expect(t1.shortestIntersectionDistance(t2)).toBe(6);

    const t3 = new day3.Trail("R75,D30,R83,U83,L12,D49,R71,U7,L72");
    const t4 = new day3.Trail("U62,R66,U55,R34,D71,R55,D58,R83");
    expect(t3.shortestIntersectionDistance(t4)).toBe(159);

    const t5 = new day3.Trail("R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51");
    const t6 = new day3.Trail("U98,R91,D20,R16,D67,R40,U7,R15,U6,R7");
    expect(t5.shortestIntersectionDistance(t6)).toBe(135);

    // this test takes a while
    // const t7 = new day3.Trail(day3.line1);
    // const t8 = new day3.Trail(day3.line2);
    // expect(t7.shortestIntersectionDistance(t8)).toBe(627);
});
test('steps to Point on Trail', () => {
    const t1 = new day3.Trail("R8,U5,L5,D3");
    expect(t1.stepsToPoint(new day3.Point(1,0))).toBe(1);
    expect(t1.stepsToPoint(new day3.Point(5,0))).toBe(5);
    expect(t1.stepsToPoint(new day3.Point(6,5))).toBe(15);
    expect(t1.stepsToPoint(new day3.Point(3,2))).toBe(21);
    expect(t1.stepsToPoint(new day3.Point(10,10))).toBe(false);

    // make sure that if a point is repeated on a Trail, the shortest number of steps is returned
    const t2 = new day3.Trail("R5,U1,L3,D3");
    expect(t2.stepsToPoint(new day3.Point(2,0))).toBe(2);
});
test('finding shortest Trail intersection', () => {
    const t1 = new day3.Trail("R8,U5,L5,D3");
    const t2 = new day3.Trail("U7,R6,D4,L4");
    expect(t1.fewestIntersectionSteps(t2)).toBe(30);

    const t3 = new day3.Trail("R75,D30,R83,U83,L12,D49,R71,U7,L72");
    const t4 = new day3.Trail("U62,R66,U55,R34,D71,R55,D58,R83");
    expect(t3.fewestIntersectionSteps(t4)).toBe(610);

    const t5 = new day3.Trail("R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51");
    const t6 = new day3.Trail("U98,R91,D20,R16,D67,R40,U7,R15,U6,R7");
    expect(t5.fewestIntersectionSteps(t6)).toBe(410);

    // this test takes a while
    // const t7 = new day3.Trail(day3.line1);
    // const t8 = new day3.Trail(day3.line2);
    // expect(t7.fewestIntersectionSteps(t8)).toBe(13190);
});
