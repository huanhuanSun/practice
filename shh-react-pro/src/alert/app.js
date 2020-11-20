import React,{PureComponent} from 'react'
import Alert from './alert'

class Btn extends PureComponent{
    render() {
        console.log(this.props)
        return (<div>
            <div className="close"
                 onClick={()=>{
                    //  console.log(this.props)
                    this.props.setShow();
                 }}
            ></div>
        </div>)
    }
}


export default class App extends PureComponent{
    state={
        title:'杏和软件'
    }
    render(){
        return (<div>
            <Alert title={this.state.title}
                    Child={Btn}
                    // cb={(props)=>{
                    //     console.log(props)
                    // 在此可以做很多复杂逻辑 如数据处理等
                    //     return <Btn {...props}></Btn>
                    // }}
            >
                
                 <p>第一段内容</p>   
                 <p>第二段内容</p>   
                 <p>第三段内容</p>   
                 <p>第四段内容</p>   
            </Alert>
        </div>)
    }
}
