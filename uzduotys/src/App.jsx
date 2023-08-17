import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <>
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
    </>
  );
}

export default App;
