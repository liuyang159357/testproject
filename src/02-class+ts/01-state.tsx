import React, { Component } from 'react'
interface IState {
 name:string
}
export default class State extends Component <any,IState> {
    state={
        name:'liu'
    }
    myref=React.createRef<HTMLInputElement>()
  render() {
    return (
      <div>
        app-{this.state.name.substring(0,1).toUpperCase()+this.state.name.substring(1)}
        <button onClick={()=>{
            this.setState({name:'li'})
            console.log(this.myref.current?.value);
            
        }}>
            click
        </button>
        <input ref={this.myref} type="text" />
      </div>
    )
  }
}
