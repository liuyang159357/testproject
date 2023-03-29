import React,{ ReactElement, useState} from 'react'

export default function Props() {
    const [name,setName]=useState('liuyang')
  return (
    <div>
        <Children name={name}></Children>
    </div>
  )
}
interface IProps{
    name:string
}
const Children:React.FC<IProps>= (props)=>{
    return (
        <div>{props.name}</div>
    )
}

