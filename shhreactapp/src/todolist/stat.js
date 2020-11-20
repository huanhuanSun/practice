import React,{PureComponent} from 'react';

class Stats extends PureComponent{
    render() {
        let {data,removeData} = this.props;
        let completedList = data.filter((item)=>{
            return (item.checked == true)
        })
        return (<div id="todo-stats">
            <span className="todo-count">
                <span className="number">{data.length}</span>
                <span className="word">items</span>
            </span>
            <span className="todo-clear">
                <a 
                    href="#"
                    onClick={()=>{
                        removeData()
                    }}
                >Clear
                    <span className="number-done">{completedList.length}</span>completed
                    <span className="word-done">item</span>
                </a>
            </span>
        </div>)
    }
}

export default Stats