import React, { useState } from "react";


const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
  
};

function Spell() {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleInputChange = (e) => {

    setInputText(e.target.value);

    
    const words = e.target.value.split(" ");
    const correcWords = words.map((word) => {
      const correctWord = customDictionary[word.toLowerCase()];
      return correctWord || word;
    });

    const correctedText = correcWords.join(" ");

    
    const Correction = correcWords.find(
      (word, index) => word !== words[index]
    );
    setSuggestedText(Correction || "");
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={8}
        cols={32}
      />
      {suggestedText && (
        <p>
          Did you mean: <b>{suggestedText}</b>?
        </p>
      )}
    </div>
  );
}

export default Spell;
