import React, {useState} from "react";
import "./index.css";

var flagsDictionary = {
  "😊": "smiling",
  "😒": "disbelief",
  "😂": "Tears of joy",
  "✌🏻": "victory or friendship",
  "👌🏻": "Looks good",
  "❤️": "love",
  "👜": "purse"
};
export default function App() {
  var [country, setCountry] = useState("");
  function onEmojiEnter(event){
    var country = flagsDictionary[event.target.value];
    setCountry(country);

  }
  return (
    <div className="App">
      <h1>Not sure which flag belong to which country?</h1>
      <h2>Enter or click on the flag to know about this</h2>
        <input onChange={onEmojiEnter}  />
        <div>{country}</div>

    </div>
  );
}
