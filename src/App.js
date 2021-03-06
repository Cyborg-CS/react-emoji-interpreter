import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiList = {
    "❤️": "Love",
    "🔥": "Fire",
    "💵": "Money",
    "🤡": "Clown Face",
    "⚡": "Thunder Bolt",
    "😁": "Smiling Face"
  };

  var emojiDictionary = Object.keys(emojiList);

  const [emojiMeaning, setEmojiMeaning] = useState("");

  function emojiMeaningHandler(e) {
    var userInput = e.target.value;
    var meaning = emojiList[userInput];
    setEmojiMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiList[emoji];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Your Emoji's</h1>
      <input
        onChange={emojiMeaningHandler}
        placeholder="input a emoji"
        style={{ width: "500px", minHeight: "2rem" }}
      />
      <div style={{ fontWeight: "bolder", height: "1rem", paddingTop: "1rem" }}>
        {" "}
        {emojiMeaning}{" "}
      </div>
      <h3>Emojis we know</h3>
      <div>
        {emojiDictionary.map(function (emoji) {
          return (
            <span
              key={emoji}
              style={{ fontSize: "2rem", padding: "o.5rem", cursor: "pointer" }}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Things to note -->
 * class => className in 'react';
 * style takes object {} instead of "";
 * VISER => View --> Interact --> State in eventHandler --> Render
 */
