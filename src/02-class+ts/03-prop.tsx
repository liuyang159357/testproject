import React, { Component } from 'react'

export default class Prop extends Component {
  render() {
    return (
      <div>
        <Children name='aaa'></Children>
      </div>
    )
  }
}
interface IProp{
    name:string
}
class Children extends Component<IProp> {
  render() {
    return (
      <div>Children-{this.props.name}</div>
    )
  }
}
