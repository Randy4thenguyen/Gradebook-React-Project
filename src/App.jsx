/* 
  Randy Nguyen
*/
import { useState, createContext} from "react";
import GroupsInputs from "./GroupInputs.jsx";
import AssignmentInputs from "./AssignmentInputs.jsx";

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
        
        <GroupsInputs></GroupsInputs>
        <AssignmentInputs/>

        

        
    </div>
    <div>
      {groups.map((group,index) => 
        // group.assignments.map((assignment, index2) =>
          <p key = {index}>{group.name}</p>
        // )
      )}
    </div>

    </gradeContext.Provider>
    </groupContext.Provider>

    </>
  )
}

export default App
