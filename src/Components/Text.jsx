import React from 'react'
import { useSelector } from 'react-redux'

function Text() {
    const data=useSelector((storedata)=>{
        return storedata
    })
  return (
    <div>
      <h3>Text Component</h3>
      <p>{data.name}</p>
    </div>
  )
}

export default Text
