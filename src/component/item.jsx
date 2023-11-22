import React from "react";
import Input from "./input"
const itme = ({id,todo,ondelete,onedit})=>{
    return (
        <div className="Listitme">
            <span>{id}</span>
            <span>{todo}</span>
            <div>
            <Input className={"btn-edit"} onClick={onedit} buttonName={"Edit"} types={'button'}/>
            <Input className={"btn-delete"}  onClick={ondelete} buttonName={"Delete"} types={'button'}/>
            </div>
        </div>
    );
}
export default itme