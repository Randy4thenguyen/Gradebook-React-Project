import React, {useState, useRef, useContext} from 'react';
import {groupContext, gradeContext} from "./App.jsx";


function AssignmentInputs(){
    const [assignmentName, setAssignmentName] = useState("");
    const [assignmentMaxScore, setMaxScore] = useState(0);
    const [assignmentScore, setScore] = useState(0);
    const {setGrade} = useContext(gradeContext);
    const {groups} = useContext(groupContext);
    const [assignmentGroup, setAssignmentGroup] = useState("");
    const gradeStorage = useRef(0);

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
        if(assignmentName.trim() != "" && assignmentMaxScore > -1 && assignmentGroup != ""){
            const newAssignment = {name:assignmentName, score: assignmentScore, max:assignmentMaxScore, group: assignmentGroup};
            let groupIndex = groups.findIndex(findGroup); 
            groups[groupIndex].name = "CHANGE";
            groups[groupIndex].assignments.push(newAssignment);
            groups[groupIndex].points += assignmentScore;
            groups[groupIndex].maxPoints += assignmentMaxScore;
            setAssignmentName("");
            setMaxScore(0);
            setScore(0);
            setAssignmentGroup("");
            // gradeStorage.current = 0;
            // var gradeScoreTotal = 0;
            // var gradeMaxScoreTotal = 0;
            // for(let i = 0; i < groups.length; i++){
            //     gradeScoreTotal = groups[i].points;
            //     gradeMaxScoreTotal = groups[i].maxPoints;
            //     console.log(gradeScoreTotal);
            //     console.log(gradeMaxScoreTotal);
            //     gradeStorage.current = Number(gradeScoreTotal/gradeMaxScoreTotal) * Number(groups[groupIndex].groupWeight/100);
            //     console.log(gradeStorage.current);
            // }
            // setGrade(gradeStorgage.current);


            

        }
    }


    function findGroup(value, index, array){
        return value.name == assignmentGroup;
    }


    
    return(
        <div className = "AddAssignments">
            <p>Add Assignment Name</p>
            <input type="text" placeholder = "Enter Assignment Name" onChange = {assignmentNameInput} value = {assignmentName}></input>
            <p>Add Points Recieved</p>
            <input type="number" onChange = {assignmentScoreInput} value = {assignmentScore}/>
            <p>Add Total Points</p>
            <input type = "number" onChange = {assignmentMaxScoreInput} value = {assignmentMaxScore}></input>
            <p>Select Group</p>

            <select value = {assignmentGroup} onChange={assignmentGroupInput}>
                <option value = "">Choose</option>
                {groups.map((group, index) =>
                    <option value = {group.name} key = {index}>{group.name}</option>
                )}
            </select>
            <button onClick={() => addAssignment()}>Add Assignment</button>
            {groups.map((group,index) => 
                    group.assignments.map((assignment, index2) =>
                        <p key = {index2}>{group.name}{assignment.name}</p>
                    )
                )}
        </div>
    );
}
export default AssignmentInputs