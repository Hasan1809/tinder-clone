import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import TinderCards from "./TinderCards.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header />
      <TinderCards />
      {/* Swipe options */}
    </div>
  );
}

export default App;
