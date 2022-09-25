import React,{useState} from 'react'
import OneTuDo from "./OneToDo.module.css"

function OneToDo({e,onUpdate,onDelete}) {
    const[edit,setEdit]=useState(false)
    
    function FormEdit(){
        const[newVal,setNewVal]=useState(e.title)
        function handleSubmit(e){
            e.preventDefault()
        }
        function handleChange(e){
            const value= e.target.value
            setNewVal(value)
        }
        function handleClick(){
            onUpdate(e.id, newVal)
            setEdit(false)
        }
        return (
            <form className={OneTuDo.formEdit} onSubmit={handleSubmit}>
                <input type="text" className={OneTuDo.input} onChange={(e)=>handleChange(e)} value={newVal}/>
                <div className={OneTuDo.formEdite} >
                    <button className={OneTuDo.button} onClick={handleClick}>Update</button>
                    <button className={OneTuDo.buttonRed} onClick={()=>setEdit(false)}>Cancel</button>
                </div>
            </form>
        )
    }
    function TodoElement(){
        return (
            <h2 className={OneTuDo.info}><span className={OneTuDo.Title}> {e.title} </span>
                <button className={OneTuDo.button} onClick={()=>setEdit(true)}>edit</button>
                 <button className={OneTuDo.buttonRed} onClick={()=>onDelete(e.id)}>delete</button>
            <br/></h2>
        )
    }

  return (
    <div>
        <div className={OneTuDo.Container}>
            {edit ? <FormEdit/> : <TodoElement/>}
        </div>
        
    </div>
  )
}

export default OneToDo
