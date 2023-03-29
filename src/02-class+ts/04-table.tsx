import React, { Component } from 'react'

export default class Table extends Component {
    state = {
        isShow: true
    }
    isShowSli = () => {
        console.log(123);

        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        return (
            <div>
                <Navbar cb={this.isShowSli} title='首页' ></Navbar>
                {this.state.isShow && <Sidebar></Sidebar>}
            </div>
        )
    }
}
interface IProps {
    title: string
    cb: () => void
}
class Navbar extends Component<IProps>{

    render(): React.ReactNode {
        return (
            <div>{this.props.title}
                <button onClick={() => {
                    this.props.cb()
                }}>点击</button>
            </div>
        )
    }
}
class Sidebar extends Component {
    render(): React.ReactNode {
        return (
            <div>Slidebar</div>
        )
    }
}

