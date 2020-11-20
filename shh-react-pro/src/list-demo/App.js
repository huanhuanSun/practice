/*
 * @Author: shh 
 * @Date: 2020-05-21 13:59:28 
 * @Last Modified by: shh
 * @Last Modified time: 2020-05-21 14:40:19
 */


 import React,{Component} from 'react'
 import './index.css';
 import List from './list'

 let datas = {
    family: {
        title: '家人',
        list: [
            {name: '爸爸'},
            {name: '妈妈'}
        ]
    },
    friend: {
        title: '朋友',
        list: [
            {name: '张三'},
            {name: '李四'},
            {name: '王五'}
        ]
    },
    customer: {
        title: '客户',
        list: [
            {name: '阿里'},
            {name: '腾讯'},
            {name: '头条'}
        ]
    }
};

 

 export default class App extends Component{
    render() {
        console.log(Object.keys(datas))
      return (<div>
        <div className="friend-list" >
                {Object.keys(datas).map((item)=>{
                    // console.log(item)
                    return <List key={item} item={datas[item]}></List>
                })}
            </div>
      </div>)
    }
 }