//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below and figure out the data flow
// 2. Add in your code from the terminal app (check for win logic)
// 3. Look for the @TODO, to fix
// next to each @TODO you will find tasks that need to be finished
// 4. GET THIS GAME WORKING!!


let board = [
  ['','',''],
  ['','',''],
  ['','','']
]

let currentMarker = 'X'
// is called when a square is clicked. "this" = element here
const handleClick = (element) => {
  // check to see if the square clicked has anything in it, if not continue
  // this prevents an X being changed to an O
  const row = parseInt(element.id.charAt(0))
  const column = parseInt(element.id.charAt(2))
  
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id,row,column)
  }
}

const addMarker = (id,row,column) => {
  // console.log(`We'll place a mark on square: ${id}`)
  document.getElementById(id).innerHTML = currentMarker;
  board[row][column] = currentMarker;
  checkForWin()
}

const changeMarker = () => {
  // ternary operator: if it's an X make it an O, if O make it an X
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}

const resetBoard = () => {
  // sanity check: this tells us the function is being called
  // console.log("the board was cleared!")

  // collects all of the "td"s into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  
  const squares = document.getElementsByTagName("TD")
  
  // loops over the HTML Collections and clears out the Xs and Os
  for (i=0; i<squares.length; i++) {
    console.log(squares[i])
    squares[i].innerHTML = null

    board = [
      ["","",""],
      ["","",""],
      ["","",""]
    ]
  }
}

const checkForWin = () => {
  // calls each checkForWin possibility and if any are true gives a page alert,
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    // **BONUS** you could make the dismissal of this alert window reset the board...
    setTimeout(function() { alert(`Player ${currentMarker} won!`); }, 1);
  } else {
    // if no win, change the marker from X to O, or O to X for the next player.
    changeMarker()
  }
}

const horizontalWin = () => {
  return (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
          || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
          || (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X")
          || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
          || (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X")
          || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
  }
  
  const verticalWin = () => {
    return (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
          || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
          || (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X")
          || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
          || (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X")
          || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
  }
  
  const diagonalWin = () => {
    return (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
          || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
          || (board[2][0] == "X" && board[1][1] == "X" && board[0][2] == "X")
          || (board[2][0] == "O" && board[1][1] == "O" && board[0][2] == "O")
  }





// **BONUSES**

// 1. Display the current player's turn
// 2. Count number of wins for each player and display them
// 3. Reset the number of wins
// 4. Clear the board on alert window dismissal
// 5. Add players names and display who wins, i.e. "Congrats Emily, you won with 0s!"
