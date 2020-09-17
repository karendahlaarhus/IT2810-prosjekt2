import React from "react";
import "./App.css";
import Frontpage from "./components/Frontpage";
import Audio from "./components/Audio";


function App() {

  return (
    <div className="wrapper">
      <Frontpage />
      <Audio></Audio>
    </div>
    
  );
  
}

export default App;
