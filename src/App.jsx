import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import TinderCards from "./TinderCards.jsx";
import SwipeButtons from "./SwipeButtons.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
