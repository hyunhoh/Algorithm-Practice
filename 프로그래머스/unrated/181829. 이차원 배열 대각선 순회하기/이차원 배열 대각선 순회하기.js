function solution(board, k) {
    return board.reduce((acc, cur, idx1) => acc + cur.reduce((acc, cur, idx2) => idx2 + idx1 <= k ? cur + acc : acc, 0), 0);
}