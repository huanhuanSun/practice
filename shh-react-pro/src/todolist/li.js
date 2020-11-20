import React,{PureComponent,Component,createRef} from 'react'


export default class Li extends PureComponent{
    state={
        edit:false,
        ref:createRef(),
        val:''
    }
    //非编辑状态时，要使state.val = props.data.txt
    static getDerivedStateFromProps(props,state){
        state.val = props.data.txt
        return true
    }
    componentDidUpdate(prevProps,prevState){
        //组件更新完后 判断是否需要给input 获得焦点
        console.log(this.state.ref)
        if(this.state.edit && !prevState.edit){
            this.state.ref.current.select();
        }
    }
    render(){
        let {data,updateData,deleteData,editData} = this.props;
        let {ref,val} = this.state
        return (<li className={this.state.edit?'editing':''}>
                    <div className={"todo "+(data.done?'done':'')}>
                        <div className="display">
                            <input 
                                className="check" 
                                type="checkbox" 
                                checked={data.done}
                                onChange={(e)=>{
                                    updateData(data.id,e.target.checked)
                                }}
                                />
                            <div className="todo-content"
                                 onDoubleClick={(e)=>{
                                    this.setState({
                                        edit:true
                                    })
                                 }}
                            >{data.txt}</div>
                            <span className="todo-destroy"
                                  onClick={()=>{
                                    deleteData(data.id)
                                  }}
                            ></span>
                        </div>
                        <div className="edit">
                            <input type="text" 
                                ref={ref}
                                value={val} 
                                onChange={(e)=>{
                                    this.setState({
                                        val:e.target.value
                                    })
                                    editData(data.id,e.target.value)
                                }}
                                onBlur={
                                    ()=>{
                                        this.setState({
                                            edit:false
                                        })
                                    }
                                }
                            />
                        </div>
                    </div>
                </li>)
    }
}