/* 
  Randy Nguyen
*/
import { useState, createContext, useContext } from "react";
import Groups from "./Groups.jsx";
function App() {

  return (
    <div className = "Gradebook">
      <h1>Gradebook</h1>
      <Groups></Groups>
    </div>
  )
}

export default App
