import React,{PureComponent} from 'react';


class Create extends PureComponent{
    state={
        val:''
    }
    render() {
        // console.log(this.props)
        let {addData} = this.props
        return (<div id="create-todo">
            <input 
                id="new-todo"  
                placeholder="What needs to be done?"
                value={this.state.val}
                onChange = {(e)=>{
                    //受控组件 必须有onChange事件 与 value属性相关联
                    this.setState({
                        val:e.target.value
                    })
                    console.log(e.target.value)
                }}
                onKeyDown={(e)=>{
                    // console.log(e.keyCode)
                    if (e.keyCode == 13) {
                        // console.log(Date.now())
                        addData({
                            id:Date.now(),
                            content:this.state.val,
                            checked:false
                        })
                        this.setState({
                            val:''
                        })
                    }

                }}
                />
        </div>)
    }
}

export default Create