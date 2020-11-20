import React,{PureComponent} from 'react'
import  './alert.css'

export default class Alert extends PureComponent{

    state={
        show:true
    }
    setShow=()=>{
        this.setState({
            show:false
        })
    }
    render(){
        console.log(this.props)
        // let {title,cb,children} = this.props;
        let {title,children,Child} = this.props;
        return (<div className="alert" style={{
                    display:this.state.show?'block':'none'
                }}>
            <header className="alert-header">{title}</header>
            {children}
            {<Child setShow={this.setShow}></Child>}
            {/* {cb({setshow:this.setShow})} */}
        </div>)
    }
}