
// Players
var players = [
    {
        player: 'X',
        IDs: [],
    },
    {
        player: 'O',
        IDs: [],
    }
];
//Game board initialization
var rows = [
    [
        {
            id: 1,
            value: ' ',
        },
        {
            id: 2,
            value: ' ',
        },
        {
            id: 3,
            value: ' ',
        },
    ],
    [
        {
            id: 4,
            value: ' ',
        },
        {
            id: 5,
            value: ' ',
        },
        {
            id: 6,
            value: ' ',
        },
    ],
    [
        {
            id: 7,
            value: ' ',
        },
        {
            id: 8,
            value: ' ',
        },
        {
            id: 9,
            value: ' ',
        },
    ],
];
//winning combinations
var winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

export default {
    rows, winningCombinations, players
}
