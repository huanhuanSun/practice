import React,{PureComponent,Component} from 'react'
import './index.css'

import Title from './title'
import Create from './create'
import Li from './li'
import Stat from './stat'


export default class App extends PureComponent{
    state={
        title:'Todos',
        data:[
            {
              id: 0,
              txt: "数据内容",
              done: true
            },
            {
                id: 1,
                txt: "数据内容1",
                done: false
            }
        ]
    }
    //添加数据
    addData=(txt)=>{
        let item ={
            id:Date.now(),
            txt:txt,
            done:false
        }
        let {data} = this.state
        data.push(item)
        this.setState({
            data:[...data]
        })
        // console.log(data)
    }
    //修改状态
    updateData=(id,done)=>{
        let {data} =this.state;
        data.map((item)=>{
            if (item.id == id){
                item.done = done
            }
        })
        this.setState({
            // data:[...data]
            data:data.map(item=>({...item}))
            // data:data.map(item=>({...item}))
        })
    }
    //删除数据
    deleteData=(id)=>{
        let {data} = this.state;
        data = data.filter((item)=>item.id!==id)
        this.setState({
            data:[...data]
        })
    }
    //编辑数据
    editData=(id,txt)=>{
        let {data} = this.state;
        data.map((item)=>{
            if (item.id == id) {
                item.txt = txt;
            }
        })
        // console.log(data)
        this.setState({
            data:data.map(item=>({...item}))
        })
    }
    //删除已完成数据
    deleteALlDo=()=>{
        let {data} = this.state;
        data= data.filter(item=>!item.done)
        this.setState({
            data:[...data]
        })
    }
    render() {
        let {data} = this.state;
        return (<div id="todoapp">
            <Title title={this.state.title}></Title>
            <div className="content">
                <Create addData={this.addData}></Create>
                <ul id="todo-list">
                    {data.map((item,index)=>{
                        return <Li key={item.id} 
                            data={item} 
                            updateData={this.updateData} 
                            deleteData = {this.deleteData}
                            editData = {this.editData}
                        ></Li>
                    })}
                </ul>
                {data.length>0?(<Stat data={data} deleteALlDo={this.deleteALlDo}></Stat>):''}
            </div>
        </div>)
    }
}