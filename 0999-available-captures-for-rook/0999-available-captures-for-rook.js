/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let x, y

    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[0].length; j++) {
            if(board[i][j] === 'R') {
                [x, y] = [i, j]
                break
            }
        }
    }

    let count = 0

    for(let i=x-1; i>=0; i--) {
        if(board[i][y] === 'p') {
            count++
            break
        }
        if(board[i][y] === 'B') break
    }

    for(let i=x+1; i<board.length; i++) {
        if(board[i][y] === 'p')  {
            count++
            break
        }
        if(board[i][y] === 'B') break
    }

    for(let i=y-1; i>=0; i--) {
        if(board[x][i] === 'p')  {
            count++
            break
        }
        if(board[x][i] === 'B') break
    }

    for(let i=y+1; i<board.length; i++) {
        if(board[x][i] === 'p')  {
            count++
            break
        }
        if(board[x][i] === 'B') break
    }

    return count
};