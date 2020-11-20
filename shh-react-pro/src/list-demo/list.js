import React,{Component} from 'react'


export default class List extends Component{
    state = {
        show:false
    }
    render(){
        let {item} = this.props
        let {title,list} = item;
        return (<div>
            {/* <div className={"friend-group "+(this.state.show?"expanded":'')}> */}
                <div className={`friend-group ${this.state.show?"expanded":''}`}>
                    <dt  onClick={()=>{
                        this.setState({
                            show:!this.state.show
                        })
                    }}
                    >{title}</dt>
                    {list.map((item,index)=>{
                        return <dd key={index}>{item.name}</dd>
                    })}
                </div>
        </div>);
    }

}