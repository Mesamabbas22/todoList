// import React from 'react';
import Input from "./input"
import Itme from "./item"
import {useState} from 'react'; 
const Listitem = ()=>{
    const [newList,setNewList] = useState('')
    const [list, setList] = useState([]);
 
    let handleAddToDo = ()=>{
        if(newList.trim() !== ""){
            setList([...list,newList])
            setNewList('')
            document.querySelector('.text').value = null
        }
    }
    let handleDeleteToDoList = (index)=>{
            let todos = [...list];
            todos.splice(index,1)
            setList(todos)


    }
    let heandleEditToDO = (index)=>{
        let value = prompt();
        if(value){
            let todoEdti = [...list];
            todoEdti[index] = value
            setList(todoEdti)
        }
    }
    return(
        <div className='container'>
            <form onSubmit={(e)=>{e.preventDefault(this);handleAddToDo()}}>
            <Input placeholder={"Etner text"} onchange={(e)=>setNewList(e.target.value)} className={'text'} types="text"/>
            <Input types="submit" className="button" buttonName="button"/>
            </form>
    <div>
        <div className="item">
            
            {list.map((todo,index)=>(
                
                <Itme key={index} id={index + 1} todo={todo} onedit={()=>{heandleEditToDO(index)}} ondelete={()=> handleDeleteToDoList(index)} />
            ))}
        </div>
    </div>
    </div>
    )



}
export default Listitem 