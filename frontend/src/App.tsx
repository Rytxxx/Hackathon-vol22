import React from "react";
import "./App.css"
// import {Header} from "./components/Header.tsx"
// import {TripPlanner} from "./components/TripPlanner.tsx"
import Home from "./Home.tsx";
const App: React.FC = () => {
  return (
    <div>
      {/* <Header /> */}
      <Home />
      {/* <TripPlanner /> */}
    </div>
  );
};

export default App;
