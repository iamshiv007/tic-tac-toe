import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("🟢");
  const [gameOver, setGameOver] = useState(false);
  const [winer, setWiner] = useState();
  const [playCount, setPlayCount] = useState(0);

  const playGame = (e) => {
    if (!e.target.innerText && !gameOver) {
      e.target.innerText = value;
      setValue(value === "🟢" ? "❌" : "🟢");

      setPlayCount(playCount + 1);

      const ones = document.getElementsByClassName("one");
      const twos = document.getElementsByClassName("two");
      const threes = document.getElementsByClassName("three");
      const fours = document.getElementsByClassName("four");
      const fives = document.getElementsByClassName("five");
      const sixs = document.getElementsByClassName("six");
      const sevens = document.getElementsByClassName("seven");
      const eights = document.getElementsByClassName("eight");

      if (
        (ones[0].innerText === "🟢" &&
          ones[1].innerText === "🟢" &&
          ones[2].innerText === "🟢") ||
        (ones[0].innerText === "❌" &&
          ones[1].innerText === "❌" &&
          ones[2].innerText === "❌")
      ) {
        setGameOver(true);
        setWiner(ones[0].innerText);
      } else if (
        (twos[0].innerText === "🟢" &&
          twos[1].innerText === "🟢" &&
          twos[2].innerText === "🟢") ||
        (twos[0].innerText === "❌" &&
          twos[1].innerText === "❌" &&
          twos[2].innerText === "❌")
      ) {
        setGameOver(true);
        setWiner(twos[0].innerText);
      } else if (
        (threes[0].innerText === "🟢" &&
          threes[1].innerText === "🟢" &&
          threes[2].innerText === "🟢") ||
        (threes[0].innerText === "❌" &&
          threes[1].innerText === "❌" &&
          threes[2].innerText === "❌")
      ) {
        setGameOver(true);
        setWiner(threes[0].innerText);
      } else if (
        (fours[0].innerText === "🟢" &&
          fours[1].innerText === "🟢" &&
          fours[2].innerText === "🟢") ||
        (fours[0].innerText === "❌" &&
          fours[1].innerText === "❌" &&
          fours[2].innerText === "❌")
      ) {
        console.log("Game Over", "four");
        setGameOver(true);
        setWiner(fours[0].innerText);
      } else if (
        (fives[0].innerText === "🟢" &&
          fives[1].innerText === "🟢" &&
          fives[2].innerText === "🟢") ||
        (fives[0].innerText === "❌" &&
          fives[1].innerText === "❌" &&
          fives[2].innerText === "❌")
      ) {
        setGameOver(true);
        setWiner(fives[0].innerText);
      } else if (
        (sixs[0].innerText === "🟢" &&
          sixs[1].innerText === "🟢" &&
          sixs[2].innerText === "🟢") ||
        (sixs[0].innerText === "❌" &&
          sixs[1].innerText === "❌" &&
          sixs[2].innerText === "❌")
      ) {
        setGameOver(true);
        setWiner(sixs[0].innerText);
      } else if (
        (sevens[0].innerText === "🟢" &&
          sevens[1].innerText === "🟢" &&
          sevens[2].innerText === "🟢") ||
        (sevens[0].innerText === "❌" &&
          sevens[1].innerText === "❌" &&
          sevens[2].innerText === "❌")
      ) {
        setGameOver(true);
        setWiner(sevens[0].innerText);
      } else if (
        (eights[0].innerText === "🟢" &&
          eights[1].innerText === "🟢" &&
          eights[2].innerText === "🟢") ||
        (eights[0].innerText === "❌" &&
          eights[1].innerText === "❌" &&
          eights[2].innerText === "❌")
      ) {
        setGameOver(true);
        setWiner(eights[0].innerText);
      }
    }
  };

  const restartGame = () => {
    setWiner();
    setGameOver(false);
    setValue("🟢");
    setPlayCount(0);

    const miniBoxes = document.getElementsByClassName("miniBox");

    for (let i = 0; i < 9; i++) {
      miniBoxes[i].innerText = null;
    }
  };

  return (
    <>
      <p className="header">Tic-Tac-toe</p>
      <div className="mainContainer">
        <FirstColumn playGame={playGame} />
        <SecondColumn playGame={playGame} />
        <ThirdColumn playGame={playGame} />
      </div>

      {(gameOver || playCount === 9) && (
        <div className="resultBox">
          {playCount === 9 && !winer ? (
            <div>Game Draw</div>
          ) : (
            <div>
              <strong> {winer}</strong> is won the Game
            </div>
          )}
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
    </>
  );
};

export default App;

const FirstColumn = ({ playGame }) => {
  return (
    <div>
      <div onClick={playGame} className="miniBox one four seven"></div>
      <div onClick={playGame} className="miniBox one five"></div>
      <div onClick={playGame} className="miniBox one six eight"></div>
    </div>
  );
};

const SecondColumn = ({ playGame }) => {
  return (
    <div>
      <div onClick={playGame} className="miniBox two four"></div>
      <div onClick={playGame} className="miniBox two five seven eight"></div>
      <div onClick={playGame} className="miniBox two six"></div>
    </div>
  );
};

const ThirdColumn = ({ playGame }) => {
  return (
    <div>
      <div onClick={playGame} className="miniBox three four eight"></div>
      <div onClick={playGame} className="miniBox three five"></div>
      <div onClick={playGame} className="miniBox three six seven"></div>
    </div>
  );
};
