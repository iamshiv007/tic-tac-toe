import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);

  const playGame = (e) => {
    if (!e.target.innerText) {
      e.target.innerText = value;
      setValue(value === 0 ? "❌ " : 0);
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
