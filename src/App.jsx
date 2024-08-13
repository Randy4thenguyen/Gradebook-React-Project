/* 
  Randy Nguyen
*/
import { useState, createContext} from "react";
import Groups from "./Groups.jsx";

export const groupContext = createContext();

function App() {
  const [groups, setGroups] = useState([]); 

  return (
    <div className = "Gradebook">
      <groupContext.Provider value = {{groups, setGroups}}>
        <h1>Gradebook</h1>
        <Groups></Groups>
      </groupContext.Provider>
      
    </div>
  )
}

export default App
