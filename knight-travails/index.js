import KnightTravails from './knightTravails.js'

// A few demonstrations with the following results:

KnightTravails([0, 0], [5, 7])
/* You made it in 4 moves! Here's your path:
    [ 0, 0 ]
    [ 1, 2 ]
    [ 2, 4 ]
    [ 3, 6 ]
    [ 5, 7 ]
*/

KnightTravails([2, 1], [7, 5])
/* You made it in 3 moves! Here's your path:
    [ 2, 1 ]
    [ 3, 3 ]
    [ 5, 4 ]
    [ 7, 5 ]
*/

KnightTravails([3, 6], [1, 4])
/*You made it in 4 moves! Here's your path:
    [ 3, 6 ]
    [ 5, 7 ]
    [ 4, 5 ]
    [ 2, 6 ]
    [ 1, 4 ]
*/