import React from "react";
import "./App.css";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(2000);
  const [color, setColor] = useState("");
  return (
    <>
    <div className="cointainer">
        <Card
            url="https://img.freepik.com/premium-photo/cute-cartoon-lizard-character-3d-animation-white-background_570929-3580.jpg"
            title="Lizard"
            cardText="Lizard are a widespread group of squamete reptiles, with over 6000 species, ranging across all continents except Antarctica"
          />
          <Card
            url="https://i.pinimg.com/564x/0c/9f/36/0c9f362eb7fd5d06af157257b49a6a8d.jpg"
            title="Lizard 2"
            cardText="Lizard are a widespread group of squamete reptiles, with over 6000 species, ranging across all continents except Antarctica"
          />
          <Avatar
            name="Vardas"
            surname="Pavarde"
          />
          <Avatar
            name="Ponas"
            surname="Makaronas"
          />
    </div>

      
      <div className="bankCointainer">
          <div>My Money&nbsp;{count}&nbsp;&euro;</div>
          <div>
             <button className="bankBtn" onClick={() => setCount(count + 500)}>Add 500 &euro;</button>
             <button className="bankBtn" onClick={() => setCount(count - 500)}>Out 500 &euro;</button>
             <button className="bankBtn" onClick={() => setCount(0)}>Balance 0 &euro;</button>
          </div>
      </div>

      <div className="colorsCointainer">
          <div className="colorCirkle" style={{background:(color)}}></div>
          <div className="buttonsColor">
            <button style={{ background: "red" }} onClick={() => setColor("red")}>Red</button>
            <button style={{ background: "yellow" }} onClick={() => setColor("yellow")}>Yellow</button>
            <button style={{ background: "blue" }} onClick={() => setColor("blue")}>Blue</button>
            <button style={{ background: "green" }} onClick={() => setColor("green")}>Green</button>
            <button style={{ background: "purple" }} onClick={() => setColor("purple")}>Purple</button>
          </div>
      </div>
    </>
  );
}

export default App;
