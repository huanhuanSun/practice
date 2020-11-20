import React,{PureComponent} from 'react';
import Li from './li';


class Todos extends PureComponent{
    render() {
        let {data,changeChecked,editData} = this.props;
        // console.log(data)
        return (<div id="todos">
            <ul id="todo-list">
                {data.map(item=>{ return <Li key={item.id} data={item} changeChecked = {changeChecked} editData={editData} />})}
            </ul>
        </div>)
    }
}

export default Todos