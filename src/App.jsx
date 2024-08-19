/* 
  Randy Nguyen
*/
import { useState, createContext} from "react";
import Groups from "./Groups.jsx";
import Assignments from "./Assignments.jsx";

export const groupContext = createContext();
export const gradeContext = createContext();


function App() {
  const [groups, setGroups] = useState([]); 
  const [grade, setGrade] = useState(0);

  return (
    <>
    <groupContext.Provider value = {{groups, setGroups}}>
    <gradeContext.Provider value = {{grade, setGrade}}>

    <div className = "GradeAndInputs">
        <h1>Grade: {grade}%</h1>
        <Assignments/>
        <Groups></Groups>

        

        {/* <ul>
                {groups.map((group,index) => 
                    group.assignments.map((assignment, index2) =>
                        <p key = {index2}>{assignment.name}</p>
                    )
                )}
            </ul> */}
    </div>


    </gradeContext.Provider>
    </groupContext.Provider>

    </>
  )
}

export default App
