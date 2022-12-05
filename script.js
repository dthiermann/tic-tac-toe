GameBoard = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]

function makeMove(board, player, x, y){
    if (board[x][y] == ' ') {
        board[x][y] = player
    }
    else {
        console.log("Illegal Move")
    }
}

function gameOverRow(board) {
    
}