import React from 'react';
let input = ({types,buttonName,placeholder,className,onchange,onClick,onSubmit})=>{
    return(
            <input className={className}
            onChange={types == "text"?(onchange):(null)}
            onClick={types == "button" ?(onClick):(null)}
            type={types} placeholder={types== "text"&&(placeholder)}
            value={types == ("button"||"submit") ?(buttonName):(null)} onSubmit={types =="submit"?onSubmit:null} />
    )

}
export default input