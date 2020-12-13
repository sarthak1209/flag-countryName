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

var flags = Object.keys(flagsDictionary);

export default function App() {
  var [country, setCountry] = useState("Country name will be shown here");
  function onEmojiEnter(event){
    var country = flagsDictionary[event.target.value];
    setCountry(country);
  }

  function onClickEmoji(flag){
     var countryName = flagsDictionary[flag];
    console.log(flag); 
    console.log(countryName);
    setCountry(countryName);

  }
  return (
    <div className="App">
      <h1>Not sure which flag belong to which country?</h1>
      <h2>Enter or click on the flag to know</h2>
        <input style={{margin:"2rem"}} key={country} onChange={onEmojiEnter}  />
        <div>{country}</div>

     {
       flags.map(flag=>{

          return <span onClick={()=>onClickEmoji(flag)}  key={flag}
          style={{fontSize:"2rem", padding:"1rem", cursor:"pointer"}}>{flag }</span>
       })
     }
      

    </div>
  );
}
