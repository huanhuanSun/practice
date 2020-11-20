import React,{PureComponent} from 'react';
import Title from './title';
import Create from './create';
import Todos from './todo';
import Stats from './stat'
import './index.css'


class App extends PureComponent {
    state = {
        data:[{
            id:0,
            content:'测试内容1',
            checked:false
        },{
            id:1,
            content:'测试内容2',
            checked:true
        },{
            id:2,
            content:'测试内容3',
            checked:false
        }]
    }
    //添加数据
    addData=(data)=>{ //注意** 此处的方法定义必须使用箭头函数，否则，拿不到this
        // console.log(this.state)
        this.state.data.push(data)
        // console.log(this.state.data)
        //更新数据
        this.setState({
            data:[...this.state.data]
        })
    }
    //改变数据状态
    changeChecked=(id,check)=>{
        this.state.data.map(item=>{
            if (item.id == id) {
                item.checked = check
            }
        });
        // console.log(this.state.data)
        this.setState({
            //注意**此处要做深拷贝，对象类型也是传址，也需要深拷贝
            data:this.state.data.map(item=>{return {...item}})
        })
    }
    //更改数据
    editData=(id,val) =>{
        this.state.data.map((item)=>{
            if (item.id == id) {
                item.content = val;
            }
        })
        this.setState({
            data:this.state.data.map(item=>{return {...item}})
        })
    }
    //删除数据、
    removeData = ()=>{
        this.setState({
            data:this.state.data.filter(item=>!item.checked)
        })
    }
    render() {
        return (<div id="todoapp">
            <Title />
            <div className="content">
                <Create addData={this.addData}/>
                <Todos data={this.state.data} changeChecked={this.changeChecked} editData ={this.editData}/>
                <Stats data={this.state.data} removeData={this.removeData}/>
            </div>
        </div>)
    }
}

export default App;