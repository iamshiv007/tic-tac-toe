import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winer, setWiner] = useState();

  const playGame = (e) => {
    if (!e.target.innerText && !gameOver) {
      e.target.innerText = value;
      setValue(value === 0 ? "❌" : 0);

      const ones = document.getElementsByClassName("one");
      const twos = document.getElementsByClassName("two");
      const threes = document.getElementsByClassName("three");
      const fours = document.getElementsByClassName("four");
      const fives = document.getElementsByClassName("five");
      const sixs = document.getElementsByClassName("six");
      const sevens = document.getElementsByClassName("seven");
      const eights = document.getElementsByClassName("eight");

      if (
        (ones[0].innerText === "0" &&
          ones[1].innerText === "0" &&
          ones[2].innerText === "0") ||
        (ones[0].innerText === "❌" &&
          ones[1].innerText === "❌" &&
          ones[2].innerText === "❌")
      ) {
        console.log("Game Over", "one");
        setGameOver(true);
        setWiner(ones[0].innerText);
      } else if (
        (twos[0].innerText === "0" &&
          twos[1].innerText === "0" &&
          twos[2].innerText === "0") ||
        (twos[0].innerText === "❌" &&
          twos[1].innerText === "❌" &&
          twos[2].innerText === "❌")
      ) {
        console.log("Game Over", "two");
        setGameOver(true);
        setWiner(twos[0].innerText);
      } else if (
        (threes[0].innerText === "0" &&
          threes[1].innerText === "0" &&
          threes[2].innerText === "0") ||
        (threes[0].innerText === "❌" &&
          threes[1].innerText === "❌" &&
          threes[2].innerText === "❌")
      ) {
        console.log("Game Over", "three");
        setGameOver(true);
        setWiner(threes[0].innerText);
      } else if (
        (fours[0].innerText === "0" &&
          fours[1].innerText === "0" &&
          fours[2].innerText === "0") ||
        (fours[0].innerText === "❌" &&
          fours[1].innerText === "❌" &&
          fours[2].innerText === "❌")
      ) {
        console.log("Game Over", "four");
        setGameOver(true);
        setWiner(fours[0].innerText);
      } else if (
        (fives[0].innerText === "0" &&
          fives[1].innerText === "0" &&
          fives[2].innerText === "0") ||
        (fives[0].innerText === "❌" &&
          fives[1].innerText === "❌" &&
          fives[2].innerText === "❌")
      ) {
        console.log("Game Over", "five");
        setGameOver(true);
        setWiner(fives[0].innerText);
      } else if (
        (sixs[0].innerText === "0" &&
          sixs[1].innerText === "0" &&
          sixs[2].innerText === "0") ||
        (sixs[0].innerText === "❌" &&
          sixs[1].innerText === "❌" &&
          sixs[2].innerText === "❌")
      ) {
        console.log("Game Over", "six");
        setGameOver(true);
        setWiner(sixs[0].innerText);
      } else if (
        (sevens[0].innerText === "0" &&
          sevens[1].innerText === "0" &&
          sevens[2].innerText === "0") ||
        (sevens[0].innerText === "❌" &&
          sevens[1].innerText === "❌" &&
          sevens[2].innerText === "❌")
      ) {
        console.log("Game Over", "seven");
        setGameOver(true);
        setWiner(sevens[0].innerText);
      } else if (
        (eights[0].innerText === "0" &&
          eights[1].innerText === "0" &&
          eights[2].innerText === "0") ||
        (eights[0].innerText === "❌" &&
          eights[1].innerText === "❌" &&
          eights[2].innerText === "❌")
      ) {
        console.log("Game Over", "eight");
        setGameOver(true);
        setWiner(eights[0].innerText);
      }
    }
  };

  return (
    <>
      <div className="header">Tic-Tac-toe</div>
      <div className="mainContainer">
        <FirstColumn playGame={playGame} />
        <SecondColumn playGame={playGame} />
        <ThirdColumn playGame={playGame} />
      </div>

      {gameOver && <div>
        <div>{winer} is won the Game</div>
        <button>Restart</button>
      </div>}
    </>
  );
};

export default App;

const FirstColumn = ({ playGame }) => {
  return (
    <div>
      <div onClick={playGame} className="one four seven"></div>
      <div onClick={playGame} className="one five"></div>
      <div onClick={playGame} className="one six eight"></div>
    </div>
  );
};

const SecondColumn = ({ playGame }) => {
  return (
    <div>
      <div onClick={playGame} className="two four"></div>
      <div onClick={playGame} className="two five seven eight"></div>
      <div onClick={playGame} className="two six"></div>
    </div>
  );
};

const ThirdColumn = ({ playGame }) => {
  return (
    <div>
      <div onClick={playGame} className="three four eight"></div>
      <div onClick={playGame} className="three five"></div>
      <div onClick={playGame} className="three six seven"></div>
    </div>
  );
};
