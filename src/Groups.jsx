
import React, {useState, useRef, useContext} from 'react';
import {groupContext} from "./App.jsx";
function Groups(){
    
    const [groupName, setGN] = useState("");
    const [groupWeight, setGW] = useState(0);
    const groupTotalWeight = useRef(0);    
    const {groups, setGroups} = useContext(groupContext);

    function addGroup(){
        if(groupName.trim() != "" && (Number(groupTotalWeight.current) + Number(groupWeight)) < 101 && groupWeight >= 0){
            const newGroup = {name:groupName, weight:groupWeight};
            groupTotalWeight.current = Number(groupTotalWeight.current) + Number(groupWeight);

            console.log(groupName + " " + groupWeight + " " + groupTotalWeight.current);
            setGroups(oldArray => [...groups, newGroup] );
            setGN("");
            setGW(0);
        }
    }
    
    function groupNameInput(event){
        setGN(event.target.value);
    }
    function groupWeightInput(event){
        setGW(event.target.value);
    }

    return(

        <div className = "Groups">
            <p>Add Groups and Weights:</p>
            <input type = "text" placeholder = "Enter Group Name" value = {groupName} onChange={groupNameInput} maxLength="20"></input>
            <input type = "number" placeholder = "Enter Weight of Group" value = {groupWeight} onChange={groupWeightInput} min = "0" max = {100 - groupTotalWeight.current}></input>
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