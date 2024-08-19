import React, {useState, useRef, useContext} from 'react';
import {groupContext, gradeContext} from "./App.jsx";


function Assignments(){
    const [assignmentName, setAssignmentName] = useState("");
    const [assignmentMaxScore, setMaxScore] = useState(0);
    const [assignmentScore, setScore] = useState(0);
    const {grade, setGrade} = useContext(gradeContext);
    const {groups, setGroups} = useContext(groupContext);
    const [assignmentGroup, setAssignmentGroup] = useState("");

    function assignmentNameInput(event){
        setAssignmentName(event.target.value);
    }
    function assignmentMaxScoreInput(event){
        setMaxScore(event.target.value);
    }
    function assignmentScoreInput(event){
        setScore(event.target.value);
    }
    function assignmentGroupInput(event){
        setAssignmentGroup(event.target.value);
    }

    function addAssignment(){
        if(assignmentName.trim() != "" && assignmentMaxScore > -1){
            const newAssignment = {name:assignmentName, score: assignmentScore, max:assignmentMaxScore, group: assignmentGroup};
            let groupIndex = groups.findIndex(findGroup); 
            console.log(groupIndex);
            groups[groupIndex].assignments.push(newAssignment);
            //groups[groupIndex].assignments.push(newAssignment);
            setAssignmentName("");
            setMaxScore(0);
            setScore(0);
            setAssignmentGroup("");
            console.log("AGG");
        }
    }


    function findGroup(value, index, array){
        return value.name == assignmentGroup;
    }


    
    return(
        <div className = "AssignmentsInput">
            <h3>Add Name and Grade</h3>
            <input type="text" placeholder = "Enter Assignment Name" onChange = {assignmentNameInput} value = {assignmentName}></input>
            <input type="number" onChange = {assignmentScoreInput} value = {assignmentScore}/>
            <input type = "number" onChange = {assignmentMaxScoreInput} value = {assignmentMaxScore}></input>
            <select value = {assignmentGroup} onChange={assignmentGroupInput}>
                <option value = "">Select group</option>
                {groups.map((group, index) =>
                    <option value = {group.name} key = {index}>{group.name}</option>
                )}
            </select>
            <button onClick={() => addAssignment()}>Add Group</button>
        </div>
    );
}
export default Assignments