import React, { useRef } from 'react'

export default function TodoLIst() {
    const myRef=useRef<HTMLInputElement>(null)
  return (
    <div>
        <input type="text" ref={myRef}/>
        <button onClick={()=>{
            console.log(myRef.current?.value);
            
        }}>点击</button>
    </div>
  )
}
