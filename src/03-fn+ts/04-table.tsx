import React, { useState } from 'react'

export default function Table() {
    const [isShow, setIsShow] = useState(true)

    const changeShow = () => {
        setIsShow(!isShow)
    }
    return (
        <div>
            <Navbar  cb={changeShow}></Navbar>
            {isShow && <Slider></Slider>}
        </div>
    )
}
interface IProps {
    name?: string,
    cb: () => void
}
const Navbar = (props: IProps) => {
    return (
        <>
            <div>Navbar</div>
            <button onClick={() => {
                props.cb()
            }}>点击</button></>
    )
}
const Slider = () => {
    return (
        <div>Slider</div>
    )
}