
import React, {useState, useRef, useContext} from 'react';
import {groupContext} from "./App.jsx";
function GroupsInputs(){
    
    const [groupName, setGN] = useState("");
    const [groupWeight, setGW] = useState(0);
    const groupTotalWeight = useRef(0);    
    const {groups, setGroups} = useContext(groupContext);

    function addGroup(){
        if(groupName.trim() != "" && (Number(groupTotalWeight.current) + Number(groupWeight)) < 101 && groupWeight >= 0 && groups.findIndex(checkDupes) == -1){
            const newGroup = {name:groupName, weight:groupWeight, assignments: [], points:0, maxPoints:0};
            groupTotalWeight.current = Number(groupTotalWeight.current) + Number(groupWeight);
            setGroups(oldArray => [...groups, newGroup] );
            setGN("");
            setGW(0);
        }
    }

    function checkDupes(value, index, array){
        return value.name == groupName;
    }
    
    function groupNameInput(event){
        setGN(event.target.value);
    }
    function groupWeightInput(event){
        setGW(event.target.value);
    }

    function removeGroup(index){
        setGroups(groups.filter((_,i) => i !== index));
    }

    return(

        <div className = "AddGroups">
            <p>Add Group Name</p>
            <input type = "text" placeholder = "Enter Name" value = {groupName} onChange={groupNameInput} maxLength="20"></input>
            <p>Add Group Weight (%)</p>
            <input type = "number" value = {groupWeight} onChange={groupWeightInput} min = "0" max = {100 - groupTotalWeight.current}></input>
            <button onClick={() => addGroup()}>Add Group</button>
            <div>
                <p>Groups</p>
                <ul>
                    {groups.map((group,index) => 
                    <li key = {index} onClick = {() => removeGroup(index)}> 
                        {group.name}
                    </li>)}
                </ul>
            </div>
            <div style={{marginLeft: "10px"}}>
                <p>Weight</p>
                <ul>
                    {groups.map((group,index) => 
                    <li key = {index} onClick = {() => removeGroup(index)}> 
                        {Number(group.weight)}%
                    </li>)}
                </ul>
            </div>
        </div>
    );
}
export default GroupsInputs