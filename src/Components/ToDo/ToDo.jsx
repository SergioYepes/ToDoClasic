import React, {useState,useEffect} from 'react'
import TuDo from "./ToDo.module.css"
import OneToDo from "../OneToDo/OneToDo"

function ToDo() {

  const[tarea,setTarea]=useState("")
  const[anotacion,setAnotacion]=useState([])

  useEffect(()=>{

  })

  // function handleClick(e){
  //   e.preventDefault();
  //   setTarea("hola")
  // }
  function handleChange(e){
    let target= e.target.value
    setTarea(target)
  }
  
  function handleSubmit(e){
    e.preventDefault()
    const ID={
      id:crypto.randomUUID(),
      title: tarea,
      completed: false
    }
    setAnotacion([...anotacion,ID])
    setTarea("")
  }
  function handleUpdate(id,value){
    const temp=[...anotacion]
    const item =temp.find((i)=>i.id === id)
    item.title=value
    setAnotacion(temp)
  }
  function handleDelete(id){
    const temp=anotacion.filter((i)=>i.id !== id)
    setAnotacion(temp)
  }

  return (
    <div className={TuDo.Container}>
      <div>Clasic ToDo APP</div>
      <form className={TuDo.CreateForm} onSubmit={handleSubmit}>
        <input onChange={(e)=>handleChange(e)} className={TuDo.Input} value={tarea}/>
        <input onClick={(e)=>handleSubmit(e)} type="submit" value="create" className={TuDo.Button}/>
      </form>
      <div className={TuDo.SmallCont}>
        {anotacion.map((e)=> <OneToDo key={e.id} e={e} onUpdate={handleUpdate} onDelete={handleDelete}/>  )}
      </div>
    </div>
  )
}

export default ToDo
