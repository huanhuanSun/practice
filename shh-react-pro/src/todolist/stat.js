import React,{PureComponent} from 'react'

export default class Stat extends PureComponent{
    render(){
        let {data,deleteALlDo} = this.props;
        let doList = data.filter(item=>item.done);

        let undoList = data.filter(item=>!item.done);
        return (<div id="todo-stats">
                    <span className="todo-count">
                        <span className="number"></span>{undoList.length} <span className="word">项待完成</span>
                    </span>  
                    <span className="todo-clear">
                        <a href="#" 
                            onClick={
                                ()=>{
                                    deleteALlDo()
                                }
                            }
                        >
                            Clear <span>{doList.length}</span> 已完成事项
                        </a>
                    </span>
                </div>)
    }
}