import { useState } from "react";
import "./Board.css";

const Board = () => {
  const [turnCount, setTurnCount] = useState<number>(0);
  const [playFieldSquare, setPlayFieldSquare] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [startGame, setStartGame] = useState<boolean>(false);

  function handleClick(index: number) {
    if (playFieldSquare[index] === "" && startGame === true) {
      const updatedPlayFieldSquare = [...playFieldSquare];
      if (turnCount % 2 === 0) {
        updatedPlayFieldSquare[index] = "X";
      } else {
        updatedPlayFieldSquare[index] = "O";
      }
      setPlayFieldSquare(updatedPlayFieldSquare);
      setTurnCount(turnCount + 1);
    }
  }

  function handleStart() {
    setStartGame(true);
  }

  function handleRestart() {
    setPlayFieldSquare(["", "", "", "", "", "", "", "", ""]);
    setTurnCount(0);
  }

  return (
    <>
      <div className="boardBody">
        <div className="gridContainer">
          {playFieldSquare.map((value: string, index: number) => (
            <div
              key={index}
              className="item"
              onClick={() => handleClick(index)}
            >
              {value}
            </div>
          ))}
          <div className="gameStateButtonContainer">
            {!startGame && <button onClick={handleStart}>Start Game</button>}
            {startGame && <button onClick={handleRestart}>Reset Game</button>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
