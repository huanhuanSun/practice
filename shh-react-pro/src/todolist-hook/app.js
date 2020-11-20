import React,{useState} from 'react'
import './index.css'

import Title from './title'
import Create from './create'
import Li from './li'
import Stat from './stat'

let data=[
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

function App (){
    let title="Todos";
    let [dd,setData] = useState(data)
    //添加数据
    function addData(d){
        setData({
            data:data.push(d)
        })
    }
    //修改状态
    function UpdateData (id,done) {
        data.map((item)=>{
            if(item.id == id) {
                item.done = done
            }
        })
        setData({
            data:[...data]
        })
    }
    //删除数据
    function deleteData(id){
        if (id) {
            data = data.filter(item=>item.id !== id)
        }
        else {
            data = data.filter(item=>!item.done)
        }
        setData({
            data:[...data]
        })
        
    }

    //编辑数据
    function EditData(id,txt){
        data.map((item)=>{
            if(item.id == id) {
                item.txt = txt
            }
        })
        setData({
            data:[...data]
        })
    }

    return (<div id="todoapp">
        <Title  title={title}/>
        <div className="content">
            <Create  addData={addData}/>
            <ul id="todo-list">
                {data.map((item)=>{   
                    return <Li key={item.id} item={item} UpdateData={UpdateData} deleteData={deleteData} EditData={EditData}/>
                })}
            </ul>
            <Stat data={data} deleteData ={deleteData} />
        </div>
    </div>)
}

export default App