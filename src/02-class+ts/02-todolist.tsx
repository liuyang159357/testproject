import React, { Component } from 'react'
interface IState {
    text: string
}
export default class TodoLIst extends Component<any, IState> {
    state = {
        text: ''
    }
    myRef=React.createRef <HTMLInputElement>()
    render() {
        return (
            <div>
                <input ref={this.myRef} type="text" />
                <button onClick={() => {
                    console.log(this.myRef.current?.value);
                    
                }}>
                    click
                </button>
            </div>
        )
    }
}
