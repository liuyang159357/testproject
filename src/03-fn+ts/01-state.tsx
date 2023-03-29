import React, { useState } from 'react'

export default function State() {
    const [name,setName]=useState<string>('liuyang')
  return (
    <div>State-{name.substring(0,1).toUpperCase()+name.substring(1)}
    <button onClick={()=>{
        setName('li')
    }}>点击</button></div>
  )
}
