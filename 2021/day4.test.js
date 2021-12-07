const { BingoSpace, BingoCard } = require('./day4');

const finalCards = `13 62 38 10 41
93 59 60 74 75
79 18 57 90 28
56 76 34 96 84
78 42 69 14 19

96 38 62  8  7
78 50 53 29 81
88 45 34 58 52
33 76 13 54 68
59 95 10 80 63

36 26 74 29 55
43 87 46 70 21
 9 17 38 58 63
56 79 85 51  2
50 57 67 86  8

29 78  3 24 79
15 81 20  6 38
97 41 28 42 82
45 68 89 85 92
48 33 40 62  4

68 38 43  2 27
74 92 49 11 22
33 97 73 87 30
42 28 60 39 67
 3 66 35 94 47

 6 65  2 30 88
69  3 33 61 23
62 40 37  7 43
55 12 70 36 73
15 20 85 38 44

99 36 10 83 69
31 58 93 87 56
33 25 82 59 30
45 86 79 12  2
39 57 51 53 13

48 46 11 20 69
89  9 96 45 76
67 78 82  6 97
30 41 37 32 64
47 31 93 29 75

49 93 50 83 64
54  4 18  1 76
75 30 19 78 12
84 55 28  3 57
16 77 87 25  2

15 57 86 92 60
87 66 76 12 52
62 74 93 88 78
39 13 44 20 46
59 31 40 91 79

82 16 73 45 42
21 79 97 62  5
96 52 53 74 49
38 84 85 69 68
35 44 92  1 47

 8 22 61 35 88
84 86 33 26 11
57 24 83 25 64
46 47 28  6 96
58 99  3 29 40

61 49 56 59 81
68 58 98 50 23
92 33 43 65 16
94 47 74 21 60
83 69 35 31 27

 4 32 91 53 18
41 84 26 69 31
25 81  0 71 57
39 11 43 14 63
24 73 58 17 95

 3 50 57  9 94
48 43 42 96 15
25  0 38 12 39
45 56 77 47 53
19 95 24 28 54

78 67 64 33 40
29 48  8 17 38
22 79 71 46 83
11 45 47 87 80
 3 84 26  5 28

77 92 70 44 61
59 78 12  8 50
60 58 55 98 85
66  2 52 83 81
34 79 20 30 38

67  3 44  4 91
78 64 32 54 31
89 41 94 18  8
58 23 48 62 16
24 12 80 53 28

76 54 87 69 88
16 36 90 48  5
75 62 15 96 23
70 42 61  1 41
71 22 45 92  8

34 99 93 83 80
31  9 43 12 57
18 59 10 53  0
76 87 74 38 39
61 48 60 16  3

98  1 32  7 97
87 99 14 53 46
54 26 43 57 49
89 72  5  0 40
11 28 76 84 85

58 65 14 33 32
13 27 30 44 35
45 56 10  1 31
68 93 96 38 26
17 53 72  6 86

85 34 72 52 11
92 22 79 55 47
12  3 86 95 14
84 81 17 20 67
31 16 69 61  2

40 10 23  8 61
88 11 86 87 49
36  3 73 58 20
33 62 98 38 93
63 95  6 90 18

49 15 55 14 57
41 36 32  1 35
78 70 79 54 26
23  0 34 21 77
96 48 51 47 82

29 61 54 64 35
79 11 31 55 42
 0 88 20 34  3
84 59 46 68 50
43  6 12 17 73

53 91 64 39  5
23 51 33 13 55
25 66 56 20 98
 6 46 72 70  3
19 38 54 16 34

14 94 60 28  2
97 80 93 89 83
71 86 74 52  5
77 69 64 10 81
21 22 95 39 78

79 33  4 61 66
31 49 67 30 98
43 71 84 72 52
29 39 81 35 37
 2 95 94 13 14

77 19 40 46 96
37 81 64 75 95
47 68 83 25 69
70 35 11 17 91
31 92  1 44 14

68 66 30 84 55
87 76 73 29 53
37 58 23 12 35
 1  7 20 34 82
27 86 16 60 54

11 68 61 36 13
78 38 98 22 73
56 89 93  8 10
 5 82 60 40 76
45 39 72 48 75

35 22 88 77  8
75 30 90  6 41
12 69 48 73 61
18  1 58 32 79
37 36 85  9 17

81 76 31 87 10
27 69 36 57 15
44 72 30 59  9
24 91 13 73 61
20 84 55 51 26

95 74  5 11 44
16 26 91 58 53
82 55 27 61 76
40  4 20 78 33
32 28 98  9 15

20  1 36 71 23
56 42  0 73 45
92 64  5 50 43
69 37 87 53  7
57 84 61 70 58

25 95 78 27 43
77 97 74 13 68
20 81 18 37  4
61  9 55 92 73
72 16 80 41 57

86 74 92 16 62
97 82 26 66 41
73 46  6 40 83
48 50 67 13  3
20 27 61 10 81

53 24 29 60 79
57 39 31 34 15
12 38 13  8 30
94 98 14 54  6
47 82 65 22 42

72 69 86 31 40
19 77 21  9 52
53 97  7 27 20
35 46 22 23 39
11 43 50 29 28

34 10 81 75 42
27 67 59 20 87
45 17 46 23 76
40  4 77 25 96
18  8 88 53 32

39 37 52 22 70
51 15 69 23 64
65 50 43 29 91
 3 67  1 84 76
96 72 54 28 42

45 81 20 22 59
94 70 27 61 77
 4 83 44 68 42
13 93  1 30 34
84 37 35  8 48

24 91 55 76 74
48 64 59 58 44
99 29  3 34 87
20  4 42 68 65
90 13 82 93 78

61 36 18 56 26
81 41  1 96 78
68 54 84  4 86
71 52 28 59 39
60 72 40 58 37

66 91 90 56 73
30 28 22  8  6
19 70 95 17 72
46 20 10 21 36
53 64 99  9 79

93 62 37 28 17
51 42 76 58 65
99 71 12 66 11
19 13  3 97 22
86 50 36 39 16

10 32 80 74  2
38 59 90 63 98
51  7  9 57 24
19 48 75 79 30
40 86 72 71 54

10 99  7 84 46
16 79 74 55 57
54 12 63 30 82
49 81 33 39 14
65 58 67 98 61

60 53 43 12  2
26 25 49 61 54
17 73 75 47 19
 9 95 67 46 98
86  8 35 81 77

45  1 88 26 31
53 37 64 11 28
 7 39 32  9 72
75 51 50 70  3
82 79 71 90  8

58 26 97 61 76
24 90 98 15 80
62 75 34 69  4
10  0 64 73 99
46 83 40 23 65

11 42 17 59 88
71 25 27 60 96
43 72 69 46 37
29  1 66 12 76
22 34 81 47 80

14 24 36 83 31
26 59  8 60 21
57 90 85 89 32
64  4 91 99 81
33  1 54 73 40

70 57 10 81 68
16 97 21 11 88
56 24 51 61  5
38 80 31 23  9
48 95 30 91 41

53 15 91 12 87
83 72 98  0 58
49 42 94 39 77
 6 59 90 48 26
 2 78 62 93 33

59 13 31 24 71
18 30  3 33 34
15 61 56 91 75
38 58 29 72 26
81 50 88 82 40

26 44 95 42  3
52 12 51 20 68
45 34 36 11 77
99 54 85 47 75
22 63 82 32 15

52 34 81 57 70
44 51 31 39 80
14 82 12  8 75
28 38  5 58 45
22 26 21 92 74

88 47 20 17  0
50 52 53 43 57
40 38 33  9 36
78 93 63 12 14
65 67 91 48 98

25 56 93 76 12
39 51 97 86 94
74 10 77  1  5
66 55 79 89 48
92 58 80 78 87

72 55 75 34 69
31 73 42 86 70
81 11 33 45 17
96 27 65 50 35
18 88 98 84 39

91 51 90 93  6
77 35 13 50 17
89 75 57 39 36
92 64 56 20 78
12 80 34 69  9

99 59 14 76  4
84 19 72 30 40
75  6 68 66  3
51 28 60  2 63
85 77 62 65  5

29 23 24 20 87
96  0  6 40 98
13 80 41 82  3
62 88 25 10 99
32 59 31 94  9

22 53 42  6 33
40 29 54 68 27
19 30 77 37 61
17 62 57 36 44
69 50 32  1 20

87 88 94 41 91
75 85 67 78  9
89 46 34 59 25
74 20 77 97 56
62 11 54 17 38

85 99 89  0 98
82 90 62  8 24
23 72 51 59 77
78 31 60 10 29
44 46 26 58 68

39 71 56 63 33
66 83 68 58 69
93 73 70 15 88
55 76  4 92 38
47 28 36 94 89

12 22 20 14 51
30 11 86 57 97
56  6 93 59 18
28 40 90 67 94
16 50 89 95 88

15 26 31 56 21
47 77 23 22 66
86 51 49 24 54
53  2  0 84 63
60 92 48 17  4

16 74 15 19 53
86 13 59  8 39
44 77 25 90 70
92  3 33 60 37
10 22 20 28 14

21 72 63 91 41
46  6  8 73 71
 9 54 52 78 43
10 27 23 42 48
 2 25 80 20 37

46 70  1 56 35
20 33 52 25 63
71 57 40 45 30
26 51 95  3 47
58 55 98 83 74

47 23 58 98 59
28 49 32 81 18
83 54 34 67  3
 4 95 27 74 22
 2 45 30 44 33

67 77  0 29 76
15 25 34 63 42
21 68 18  1 99
 7 69 94 79  4
50  8 17 81 53

29 90 98 59 39
15  6 91  7 76
22 66 27 23 37
12 33 38 54 31
86 48 85 16 11

62 57 12 76 59
41 66 13 27 43
55 83 78 95 65
82 51 77 53 14
34 45 94 92 19

13 71  1 27 41
45  6 60 91 20
90  2 98 76 32
94 92 84 54 78
51 21 40 50 47

58 47 98 68 23
92 63 28 82 73
64 93 94 37 31
12 20 41 61 35
44 83 36 95 99

 0 47 37 21 64
79 17 46 70 97
 5 89 76 36 32
51 38 19 59 31
 3 50 63 45  9

65 86 43  8 77
38 18 49 14 88
87 28 27 26 32
19  9 45 98 76
85 80  5  7 25

67 65 23 88 28
70 71 83 35 13
91  6 47 54  2
15 76 59 74 62
46 80 95 27 18

34 68 61  1 86
28 97 29 56 24
87 73 44 94 36
58  8 49 72 47
83 54 30 39 41

24 71 72  5 11
37 30 88 86 22
18 94 48 10 47
64  0 20 74 12
87 46 59 92 33

90 77 97 61 75
 2 10  5 63 69
43 32 83 24 13
78  1 50 70 53
87 47 68 73  0

58 95 26 35 23
 8  2 83 41 56
60 44 75 84 92
88 78 53 31 55
80 70 25 81  0

10 59 62 74 86
42 64 58 36 14
93 51 45  1  3
52 69 94  5 44
 4 50 48  8 12

38 40 21 97 74
98 17  3 56 58
57 63 44 93 70
10 48 49 81 73
12 55 86 41 82

93 29 38 58  5
 9 95 45 67 97
16 64 99 65 94
43 34 14 23 66
 0 88 87 50 78

72 70 87 50 31
90 91 69 18 75
42 21 11 86 81
20 63 13 43  2
56 92 29 30 73

63 98 32 50 17
71 79  4 67 44
 7 68 45 58 80
59 12 55 83 34
90 94 86 25  0

15 24 92 39 53
63  7 30 77 28
65 97 68 98 35
88 23 85 96 70
18 69 99 42 75

65 75 12 20 21
29 31 57 45 13
34 81 97 78 28
63 38 51 19 37
53 67 49 14 74

75 35 42  5 89
56 50  3 90 62
 7 15 45 16 14
40  8 84 97 65
46 51 27  9 18

62 42 24  0 53
41 94 70 88 33
32 19 43 21 23
84 98 60 39 36
 5  4 49 76 82

99 24 90  5 76
78 66 72 53 85
56 94 14 79  7
83  6 27 26 69
67 41 54 68 91

 5 72 83 53 49
48  6  9 38 15
99 84 90 82 70
69 85  4 67 20
87 16 61 21 39

18 43 78  0 77
91 37 88 32 71
15 54  2 62 17
30 98 69 38 94
83 63 89 39 14

26 70  3  5 89
94 49 35 43 99
82 36 62 78 37
90 73  9 38 40
60 68  8  2 53`;

test('test Bingo Space', () => {
    const bs = new BingoSpace(4);

    expect(bs).toBeDefined();
    expect(bs.value).toBe(4);
    expect(bs.toString()).toBe("4");
    expect(bs.isCalled).toBe(false);
    expect(bs.call(1)).toBe(false);
    expect(bs.isCalled).toBe(false);
    expect(bs.call(4)).toBe(true);
    expect(bs.isCalled).toBe(true);
    expect(bs.call(1)).toBe(false);
    expect(bs.isCalled).toBe(true);
    expect(bs.reset()).toBe(true);
    expect(bs.isCalled).toBe(false);
    expect(bs.toString()).toBe("4");
});

test('test Bingo Card', () => {
    const bc = new BingoCard("1 2\n3 4");

    expect(bc).toBeDefined();
    expect(bc.toString()).toBe("1 2\n3 4");
    expect(bc.isWinner).toBe(false);
    expect(bc.call()).toBe(false);
    expect(bc.call("x")).toBe(false);
    expect(bc.call(false)).toBe(false);
    expect(bc.call(5)).toBe(false);
    expect(bc.call(1)).toBe(true);
    expect(bc.isWinner).toBe(false);
});

test('run Bingo game', () => {
    const bc = new BingoCard("1 2\n3 4");

    expect(bc).toBeDefined();
    expect(bc.toString()).toBe("1 2\n3 4");

    expect(bc.call(1)).toBe(true);
    expect(bc.call(2)).toBe(true);
    expect(bc.isWinner).toBe(true);
    expect(bc.reset()).toBe(true);
    expect(bc.isWinner).toBe(false);

    expect(bc.call(1)).toBe(true);
    expect(bc.call(3)).toBe(true);
    expect(bc.isWinner).toBe(true);
    expect(bc.reset()).toBe(true);
    expect(bc.isWinner).toBe(false);

    expect(bc.call(1)).toBe(true);
    expect(bc.call(4)).toBe(true);
    expect(bc.isWinner).toBe(false);
    expect(bc.reset()).toBe(true);
    expect(bc.isWinner).toBe(false);
});

test('scoring Bingo card', () => {
    const bc = new BingoCard("1 2\n3 4");

    expect(bc.score).toBe(10);
    expect(bc.call(1)).toBe(true);
    expect(bc.score).toBe(9);
    expect(bc.call(4)).toBe(true);
    expect(bc.score).toBe(5);

    expect(bc.reset()).toBe(true);
    expect(bc.score).toBe(10);
    expect(bc.call(3)).toBe(true);
    expect(bc.score).toBe(7);
    expect(bc.call(2)).toBe(true);
    expect(bc.score).toBe(5);
    expect(bc.call(4)).toBe(true);
    expect(bc.score).toBe(1);
});

test('run sample data', () => {
    const callList = "7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1";
    let calls = callList.split(",");
    calls = calls.map(x => parseInt(x));

    let cards = [];
    cards.push(new BingoCard("22 13 17 11  0\n8  2 23  4 24\n21  9 14 16  7\n6 10  3 18  5\n1 12 20 15 19"));
    cards.push(new BingoCard("3 15  0  2 22\n 9 18 13 17  5\n 19  8  7 25 23\n 20 11 10 24  4\n 14 21 16 12  6"));
    cards.push(new BingoCard("14 21 17 24  4\n 10 16 15  9 19\n 18  8 23 26 20\n 22 11 13  6  5\n 2  0 12  3  7"));

    let foundWinner = false;
    let winningNumber = -1;
    let winningCard = -1;

    expect(cards[0].toString()).toBe("22 13 17 11 0\n8 2 23 4 24\n21 9 14 16 7\n6 10 3 18 5\n1 12 20 15 19");
    expect(cards[1].toString()).toBe("3 15 0 2 22\n9 18 13 17 5\n19 8 7 25 23\n20 11 10 24 4\n14 21 16 12 6");
    expect(cards[2].toString()).toBe("14 21 17 24 4\n10 16 15 9 19\n18 8 23 26 20\n22 11 13 6 5\n2 0 12 3 7");

    for (let x = 0; x < calls.length; x++) {
        for (let c = 0; c < cards.length; c++) {
            cards[c].call(calls[x]);
            if (cards[c].isWinner) {
                foundWinner = true;
                winningCard = cards[c];
                break;
            }
        }
        if (foundWinner) {
            winningNumber = calls[x];
            break;
        }
    }
    expect(winningNumber * winningCard.score).toBe(4512);
});

test('find first winning card', () => {
    const callList = "14,30,18,8,3,10,77,4,48,67,28,38,63,43,62,12,68,88,54,32,17,21,83,64,97,53,24,2,60,96,86,23,20,93,65,34,45,46,42,49,71,9,61,16,31,1,29,40,59,87,95,41,39,27,6,25,19,58,80,81,50,79,73,15,70,37,92,94,7,55,85,98,5,84,99,26,66,57,82,75,22,89,74,36,11,76,56,33,13,72,35,78,47,91,51,44,69,0,90,52";
    let calls = callList.split(",");
    calls = calls.map(x => parseInt(x));

    const cardList = finalCards.split(/\s*\n\n\s*/);
    const cards = cardList.map(x => new BingoCard(x));

    let foundWinner = false;
    let winningNumber = -1;
    let winningCard = -1;

    expect(cards.length).toBe(100);
    expect(cards[1].toString()).toBe("96 38 62 8 7\n78 50 53 29 81\n88 45 34 58 52\n33 76 13 54 68\n59 95 10 80 63");
    expect(cards[34].isWinner).toBe(false);

    for (let x = 0; x < calls.length; x++) {
        for (let c = 0; c < cards.length; c++) {
            cards[c].call(calls[x]);
            if (cards[c].isWinner) {
                foundWinner = true;
                winningCard = cards[c];
                break;
            }
        }
        if (foundWinner) {
            winningNumber = calls[x];
            break;
        }
    }
    expect(winningNumber * winningCard.score).toBe(14093);

});

test('find last winning card with sample data', () => {
    const callList = "7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1";
    let calls = callList.split(",");
    calls = calls.map(x => parseInt(x));

    let cards = [];
    cards.push(new BingoCard("22 13 17 11  0\n8  2 23  4 24\n21  9 14 16  7\n6 10  3 18  5\n1 12 20 15 19"));
    cards.push(new BingoCard("3 15  0  2 22\n 9 18 13 17  5\n 19  8  7 25 23\n 20 11 10 24  4\n 14 21 16 12  6"));
    cards.push(new BingoCard("14 21 17 24  4\n 10 16 15  9 19\n 18  8 23 26 20\n 22 11 13  6  5\n 2  0 12  3  7"));

    let losingNumber = -1;
    let losingCard = -1;

    for (let x = 0; x < calls.length; x++) {
        console.log(`calling ${calls[x]}`);
        for (let c = 0; c < cards.length; c++) {
            cards[c].call(calls[x]);
        }
        cards = cards.filter(card => !card.isWinner);
        if (cards.length === 1) {
            losingCard = cards[0];
        } else if (cards.length === 0) {
            losingNumber = calls[x];
            break;
        }
    }

    console.log(losingNumber, losingCard.toString());
    expect(losingNumber).toBe(13);
    expect(losingCard.toString()).toBe("3 15 0 2 22\n9 18 13 17 5\n19 8 7 25 23\n20 11 10 24 4\n14 21 16 12 6");
    expect(losingNumber * losingCard.score).toBe(1924);

});


test('find last winning card with final data', () => {
    const callList = "14,30,18,8,3,10,77,4,48,67,28,38,63,43,62,12,68,88,54,32,17,21,83,64,97,53,24,2,60,96,86,23,20,93,65,34,45,46,42,49,71,9,61,16,31,1,29,40,59,87,95,41,39,27,6,25,19,58,80,81,50,79,73,15,70,37,92,94,7,55,85,98,5,84,99,26,66,57,82,75,22,89,74,36,11,76,56,33,13,72,35,78,47,91,51,44,69,0,90,52";
    let calls = callList.split(",");
    calls = calls.map(x => parseInt(x));

    const cardList = finalCards.split(/\s*\n\n\s*/);
    let cards = cardList.map(x => new BingoCard(x));

    let losingNumber = -1;
    let losingCard = -1;

    expect(cards.length).toBe(100);
    expect(cards[1].toString()).toBe("96 38 62 8 7\n78 50 53 29 81\n88 45 34 58 52\n33 76 13 54 68\n59 95 10 80 63");
    expect(cards[34].isWinner).toBe(false);


    for (let x = 0; x < calls.length; x++) {
        for (let c = 0; c < cards.length; c++) {
            cards[c].call(calls[x]);
        }
        cards = cards.filter(card => !card.isWinner);
        if (cards.length === 1) {
            losingCard = cards[0];
        } else if (cards.length === 0) {
            losingNumber = calls[x];
            break;
        }
    }

    expect(losingNumber * losingCard.score).toBe(17388);

});
