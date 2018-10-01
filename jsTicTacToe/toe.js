var playerArray = [];
var colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var playerList = document.querySelector('#playerList');
var players = 0;
const cell0 = document.querySelector("#cell0");
const cell1 = document.querySelector("#cell1");
const cell2 = document.querySelector("#cell2");
const cell3 = document.querySelector("#cell3");
const cell4 = document.querySelector("#cell4");
const cell5 = document.querySelector("#cell5");
const cell6 = document.querySelector("#cell6");
const cell7 = document.querySelector("#cell7");
const cell8 = document.querySelector("#cell8");
const cellArray = [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8]

function createPlayer (name) {
  this.color = Math.round(Math.random()*7);
  playerArray.push({name, color, colorChange, playerIndex: players});
  function colorChange() {
    this.color = this.color+1;
    this.color = this.color%7;
    for (var counter = 0; counter< playerArray.length; counter++) {
      if (playerArray[counter].name == this.name) {
        playerArray[counter].color = this.color;
      }
    }
    return this.color;
  }
  return{name, color, colorChange, playerIndex: players};
};

const gameBoard = (() => {
  const pick = () => {
    var newPlayer = true;
    var play = prompt("Player Name:");
    var thisPlayer;
    for (var counter = 0; counter < playerArray.length; counter++) {
      if (play == playerArray[counter].name) {
        thisPlayer = playerArray[counter];
        newPlayer = false;
      };
    };
    if (play != "" && newPlayer == true) {
      thisPlayer = createPlayer(play);
    }
    else if (newPlayer == true) {
      play = `Player ${players + 1}`;
      thisPlayer = createPlayer(play)
    }
    if (newPlayer == true) {
      var nextPlayer = document.createElement('div');
      nextPlayer.classList.add('player')
      nextPlayer.setAttribute('id', `player${players}`);
      nextPlayer.textContent = thisPlayer.name;
      nextPlayer.style.backgroundColor=colorArray[thisPlayer.color];
      nextPlayer.addEventListener('click', (e) => {
        thisPlayer.color = thisPlayer.colorChange()
        nextPlayer.style.backgroundColor = colorArray[thisPlayer.color];
      })
      playerList.appendChild(nextPlayer)
      players++;
    }
    return thisPlayer;
  };
  const newGame = (player1, player2) => {
    document.querySelector('#gamebtn').style.visibility = 'hidden';
    var victory = false;
    var turnCount = 1;
    var xo = 'X';
    var currentPlayer = document.querySelector(`#player${player1.playerIndex}`)
    currentPlayer.classList.add('activePlayer')
    var activePlayer = player1;
    function checkVictory(player) {
      if (cell0.childNodes[3].textContent == "X" || cell0.childNodes[3].textContent == "O") {
        if (cell0.childNodes[3].textContent == cell1.childNodes[3].textContent &&
          cell0.childNodes[3].textContent == cell2.childNodes[3].textContent ||
          cell0.childNodes[3].textContent == cell4.childNodes[3].textContent &&
          cell0.childNodes[3].textContent == cell8.childNodes[3].textContent ||
          cell0.childNodes[3].textContent == cell3.childNodes[3].textContent &&
          cell0.childNodes[3].textContent == cell6.childNodes[3].textContent) {
            victory = true;
          };
      };
      if (cell1.childNodes[3].textContent == "X" || cell1.childNodes[3].textContent == "O") {
        if (cell1.childNodes[3].textContent == cell4.childNodes[3].textContent &&
          cell1.childNodes[3].textContent == cell7.childNodes[3].textContent) {
            victory = true;
        }
      };
      if (cell2.childNodes[3].textContent == "X" || cell2.childNodes[3].textContent == "O") {
        if (cell2.childNodes[3].textContent == cell5.childNodes[3].textContent &&
        cell2.childNodes[3].textContent == cell8.childNodes[3].textContent) {
          victory = true;
        }
      };
      if (cell3.childNodes[3].textContent == "X" || cell3.childNodes[3].textContent == "O") {
        if (cell3.childNodes[3].textContent == cell4.childNodes[3].textContent &&
          cell3.childNodes[3].textContent == cell5.childNodes[3].textContent) {
            victory = true;
          }
        };
      if (cell6.childNodes[3].textContent == "X" || cell6.childNodes[3].textContent == "O") {
        if (cell6.childNodes[3].textContent == cell7.childNodes[3].textContent &&
          cell6.childNodes[3].textContent == cell8.childNodes[3].textContent ||
          cell6.childNodes[3].textContent == cell4.childNodes[3].textContent &&
          cell6.childNodes[3].textContent == cell2.childNodes[3].textContent) {
            victory = true;
        };
      }
      return victory;
    }
    function clearCells() {
      console.log("clearCells called")
      for (var counter = 0; counter < cellArray.length; counter++) {
        document.querySelector(`#cell${counter}btn`).style.visibility = "hidden";
        document.querySelector(`#cell${counter}text`).textContent = "";
      }
      return false;
    };
    console.log("we've got this far")
    for (var each = 0; each < cellArray.length; each++) {
      var cellbtn = document.querySelector(`#cell${each}btn`);
      cellbtn.style.visibility = 'visible';
      cellbtn.addEventListener('click',(e) => {
        e.target.parentNode.style.color = colorArray[activePlayer.color];
        e.target.parentNode.childNodes[3].textContent = xo;
        e.target.style.visibility = 'hidden';
        if (xo == 'X') {
          xo = 'O';
        }
        else {
          xo = 'X';
        }
        turnCount++;
        if(checkVictory(activePlayer)) {
          alert(`${activePlayer.name} Wins!`);
          document.querySelector('.activePlayer').classList.remove('activePlayer');
          activePlayer = null;
          document.querySelector('#gamebtn').style.visibility = 'visible';
          clearCells();
          return false;
        }
        else if (turnCount > 9) {
          alert('Cat Game!');
          document.querySelector('.activePlayer').classList.remove('activePlayer');
          activePlayer = null;
          document.querySelector('#gamebtn').style.visibility = 'visible';
          clearCells();
          return false;
        }
        else
        {
          var currentPlayer = document.querySelector('.activePlayer');
          currentPlayer.classList.remove('activePlayer');
          if (activePlayer == player1) {
            activePlayer = player2;
            currentPlayer = document.querySelector(`#player${player2.playerIndex}`);
            currentPlayer.classList.add('activePlayer');
          }
          else {
            activePlayer = player1;
            var currentPlayer = document.querySelector(`#player${player1.playerIndex}`);
            currentPlayer.classList.add('activePlayer');
          }
        }
      });
    }
  return null;
  }

return {pick, newGame}
})();

var pageName = document.querySelector('h1');
var titleColor = 4;
pageName.style.color = colorArray[titleColor];
pageName.onclick = () => {
pageName.style.color = colorArray[titleColor++%7]};

document.querySelector('#gamebtn').onclick = () => {
  var player1 = gameBoard.pick();
  var player2 = gameBoard.pick();
  gameBoard.newGame(player1, player2);
}
