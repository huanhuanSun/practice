import React, { PureComponent } from "react"

export default class Title extends PureComponent{
    render() {
        return (<div className="title">
            <h1>{this.props.title}</h1>
        </div>)
    }
}