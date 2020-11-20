import React from 'react'

export default function Stat (props) {
    let {data,deleteData} = props;
    let doneList = data.filter(item=>item.done);
    let undoList = data.filter(item=>!item.done);
    return(<div id="todo-stats">
                <span className="todo-count">
                    <span className="number"></span>{undoList.length} <span className="word">项待完成</span>
                </span>  
                <span className="todo-clear">
                    <a href="#"
                        onClick={()=>{
                            deleteData()
                        }}
                    >
                        Clear <span>{doneList.length}</span> 已完成事项
                    </a>
                </span>
            </div>)
}