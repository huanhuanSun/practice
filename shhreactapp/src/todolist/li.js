import React,{PureComponent} from 'react';


class Li extends PureComponent{
    state={
        val:'',
        edit:false
    }
    //组件挂载时要同步 state.val 和props.data.content
    static getDerivedStateFromProps  (props, state) {
        // console.log(props,state)
        if (!state.edit) {
            state.val = props.data.content
        } 
        return true;

    }
    render() {
        let {data,changeChecked, editData} = this.props;
        // console.log(data)
        return (<li className={this.state.edit?"editing":''}>
            <div className={"todo " + (data.checked?'done':'')}>
                <div className="display">
                    <input 
                        type="checkbox" 
                        className="check"
                        checked={data.checked}
                        onChange={(e)=>{
                            // console.log(e.target.checked)
                            changeChecked(data.id,e.target.checked)
                        }}
                    />
                    <div 
                        className="todo-content"
                        onDoubleClick={()=>{
                            this.setState({
                                edit:true
                            })
                        }}
                    >{data.content}</div>
                    <span className="todo-destory"></span>
                </div>
                <div className="edit">
                    <input 
                        className="todo-input" 
                        type="text"
                        value={this.state.val} 
                        onChange={(e)=>{
                            this.setState({
                                val:e.target.value
                            })
                        }}
                        onBlur={(e)=>{
                            this.setState({
                                edit:false
                            })
                            //失去焦点时 要更新数据 调用父组件的方法
                            if(e.target.value.trim()) {
                                editData(data.id,e.target.value)
                            }
                            else {
                                editData(data.id,data.content)
                            }
                        }}
                    />
                </div>
            </div>
        </li>)
    }
}

export default Li