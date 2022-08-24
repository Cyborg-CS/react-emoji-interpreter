import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiList = {
    "❤️": "Love",
    "🔥": "Fire",
    "💵": "Money",
    "🤡": "Clown Face",
    "⚡": "Thunder Bolt",
    "😁": "Smiling Face",
    "✈️": "Air Plane",
    "🌸": "Cherry Blossom",
    "😎": "Savage",
    "👊": "Fist",
    "💣": "Bomb !",
    "😓": "Downcast face"
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
      <main style={{ minWidth: "50vw", minHeight: "60%" }}>
        <h1>Your Emoji's</h1>
        <input
          onChange={emojiMeaningHandler}
          placeholder="input a emoji"
          style={{ width: "50vw", minHeight: "2rem", textAlign: "center" }}
        />
        <h3 style={{ fontWeight: "bolder", height: "1rem", margin: "1rem" }}>
          {" "}
          {emojiMeaning}{" "}
        </h3>
        <h4>Emojis we know</h4>
        <div>
          {emojiDictionary.map(function (emoji) {
            return (
              <span
                key={emoji}
                style={{
                  fontSize: "2rem",
                  paddingLeft: "o.5rem",
                  cursor: "pointer"
                }}
                onClick={() => emojiClickHandler(emoji)}
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </main>
    </div>
  );
}

/**
 * Things to note -->
 * class => className in 'react';
 * style takes object {} instead of "";
 * VISER => View --> Interact --> State in eventHandler --> Render
 */
