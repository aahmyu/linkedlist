var board = {
  data:{
    col: 0,
    row: 0,
    val: 1
  },
  next:{
    data:{
      col: 1,
      row: 0,
      val: 2
    },
    next:{
      data:{
        col: 2,
        row: 0,
        val: 4
      },
      next:{
        data:{
          col: 0,
          row: 1,
          val: 8
        },
        next:{
          data:{
            col: 1,
            row: 1,
            val: 16
          },
          next:{
           data:{
            col: 2,
            row: 1,
            val: 32
           },
           next:{
             data:{
              col: 0,
              row: 2,
              val: 64
             },
             next:{
               data:{
                col: 1,
                row: 2,
                val: 128
               },
               next:{
                 data:{
                  col: 2,
                  row: 2,
                  val: 256
                 },
                 next: null
               }
             }
           }
          }
        }
      }
    }
  }
};
var winningMoves = [7, 56, 448, 73, 146, 292, 273, 84];
var moves = function(){
  this.head= null;
};

var turns = 0;

function isEven(n){
  return n % 2 === 0;
}

function play(board,col,row){
  turns++;
  var player;
  var cell = getCell(board,col,row);
  isEven(turns) ? player = 'O' : player = 'X';
  setMoves(moves,player,cell);
  calcWin(moves.head,winningMoves);
}

function getCell(ll,col,row){
  var current = ll;
  while(current.next){
    if(current.data.col === col && current.data.row === row){
      return current.data;
    }
    current = current.next;
  }
  return current.data;
}

function setMoves(ll,player,cell){
  cell.sym = player;
  var node = {data: cell,next: null};
  if(!ll.head){
    ll.head = node;
  }else{
    var current = ll.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
}
var xSum = 0, oSum = 0;
function calcWin(movesLL, winLL){
  var current = movesLL;
  while(current.next){
    current = current.next;
  }
  if(current.data.sym === 'X'){
    xSum += current.data.val;
  }else{
    oSum += current.data.val;
  }
  if(winLL.indexOf(xSum)!= -1){
    console.log('X Wins');
    xSum = 0;
  }else if(winLL.indexOf(oSum)!= -1){
    console.log('O Wins');
    oSum = 0;
  }else{
    console.log('No winner yet');
  }
}

// play(board,0,0);
// play(board,2,2);
// play(board,1,0);
// play(board,1,2);
// play(board,2,0);
play(board,0,0);
play(board,2,0);
play(board,1,1);
play(board,2,1);
play(board,0,2);
play(board,2,2);
