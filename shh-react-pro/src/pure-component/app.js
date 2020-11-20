import React,{PureComponent} from 'react'



class App extends PureComponent{
    state={
        name:'shh'
    }
    render() {
        return(<div>
            名字：{this.state.name}

            <button onClick={()=>{
                this.setState({
                    name:'lp'
                })
            }}>修改名字</button>
        </div>)
    }
}

export default App