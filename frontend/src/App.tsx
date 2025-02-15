import React from "react";
import "./App.css"
import Home from "./Home.tsx";
// import TravelPlanner from "./TravelPlanner.tsx";

const App: React.FC = () => {
  return (
    <div>
      <h1>Trip-le</h1>
      <Home />
    </div>
  );
};

export default App;
