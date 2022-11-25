import logo from './logo.svg';
import { useState } from "react";
import './App.css';

export default function App() {
  const [Input, setInput] = useState("");

  let database = {
    "😃": "Smileys & People",
    "😄": "Grinning Face with Smiling Eyes",
    "🙃": "Upside-Down Face",
    "🤩": "Star-Struck",
    "😉": "Winking Face",
    "🤑": "Money-Mouth Face",
    "🤨": "Face with Raised Eyebrow",
    "😏": "Smirking Face",
    "😷": "Face with Medical Mask",
    "😭": "Loudly Crying Face",
    "🙈": "See-No-Evil Monkey",
    "💨": "Dashing Away",
    "🦊": "A friendly, cartoon-styled faced of a fox",
    "🐅 ": "A tiger, a large cat with an orange coat and black stripes"
  };

  let newDb = Object.keys(database);

  function onChangeHandler(event) {
    let userInput = event.target.value;
    let meaning = database[userInput];
    meaning = "undefined";
    if (meaning === "undefined") {
      meaning = "This Emojies is not available in out database";
    }
    setInput(meaning);
  }

  const onclickHandler = (emojis) => {
    let meaning2 = database[emojis];
    setInput(meaning2);
  };

  return (
    <div className="App">
      <h1>emoji interpreter</h1>
      <input onChange={onChangeHandler}></input>
      <h2>{Input} </h2>
      <hr></hr>
      <h2>Meanings of Emojis we know are given below </h2>
      <hr></hr>
      <small>Click on the emoji to check the meaning</small>
      <h2>
        {newDb.map((emojis) => {
          return (
            <span
              style={{ cursor: "pointer" }}
              onClick={() => onclickHandler(emojis)}
            >
              {emojis}
            </span>
          );
        })}
      </h2>
    </div>
  );
}