"use client"
import React, { useState } from 'react'

const page = () => {
  const[ title, settitle] = useState("")
  const[ desc, setdesc] = useState("")
  const[mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, {title, desc }]);
    settitle("")
    setdesc("")
    console.log(mainTask)
    }

    const deleteHandler = (i) => {
      let copytask = [...mainTask]
       copytask.splice(i, 1)
       setMainTask(copytask)
    }
    let renderTask = <h2>No Task Available</h2>

    if(mainTask.length>0){
      renderTask = mainTask.map((t, i) =>{
        return(
         <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex  items-center justify-between mb-5 w-2/3'>
           <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-lg font-semibold'>{t.desc}</h6>
         </div>
         <button 
         onClick={()=>{
          deleteHandler(i)
         }}
         className='bg-red-800 px-4 py-2 text-black rounded font-bold'>Delete</button>
         </li>
        )
      })
    }
  return (
    <>
    <h1
     className='bg-green-800 text-black p-5 text-3xl
      font-bold text-center '>Yasmeen Todo List</h1>

      <form onSubmit={submitHandler}>
        <input
        text="text"
        placeholder='Enter the title'
        value={title}
        onChange={(e)=>{
              settitle(e.target.value)
        }}
        className='bg-green-800 text-black
        px-4 py-2 border-black m-5 border-2'
        />
         <input
        text="text"
        className='text-black bg-green-800
        px-4 py-2 m-5 border-2 border-black'
        placeholder="Enter the description"
        value={desc}
        onChange={(e)=>{
           setdesc(e.target.value)
        }}
        />
        <button className='bg-green-800 text-black
        px-4 py-2 text-xl m-5 font-bold
        rounded border-2 border-black'>Add Task</button>
      </form>
      <br/>
      <div className='p-8 bg-green-800'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
