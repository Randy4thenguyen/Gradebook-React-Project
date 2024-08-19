
import React, {useState, useRef, useContext} from 'react';
import {groupContext} from "./App.jsx";
function Groups(){
    
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

    return(

        <div className = "GroupsInput">
            <h3>Add Groups and Weights:</h3>
            <input type = "text" placeholder = "Enter Group Name" value = {groupName} onChange={groupNameInput} maxLength="20"></input>
            <input type = "number" value = {groupWeight} onChange={groupWeightInput} min = "0" max = {100 - groupTotalWeight.current}></input>
            <button onClick={() => addGroup()}>Add Group</button>
            <div>
                <h3>Groups</h3>
                <ul>
                    {groups.map((group,index) => 
                    <li key = {index}> 
                        {group.name}
                    </li>)}
                </ul>
            </div>
            <div style={{marginLeft: "10px"}}>
                <h3>Weight</h3>
                <ul>
                    {groups.map((group,index) => 
                    <li key = {index}> 
                        {Number(group.weight)}%
                    </li>)}
                </ul>
            </div>
        </div>
    );
}
export default Groups