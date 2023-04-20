import React, { useState } from 'react'
import myStore from './store'

const InputComp = () => {
    const [input,setInput]=useState('')
    const clickDispatch=()=>{
        myStore.dispatch({type:'name',username:input})
    }
  return (
    <div style={{marginTop:'100px',textAlign:'center'}}>
      <h2>Input Component</h2>
      <input type='text' onChange={(e)=>{setInput(e.target.value)}}/>
      <button onClick={clickDispatch}>Submit</button>
    </div>
  )
}

export default InputComp
