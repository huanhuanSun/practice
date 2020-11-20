/*
 * @Author: shh 
 * @Date: 2020-05-22 09:34:16 
 * @Last Modified by: shh
 * @Last Modified time: 2020-05-22 11:11:32
 */
import React,{Component} from 'react'
import  './index.css'
import List from './list'


export default class App extends Component {
    state ={
        data:{
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
        },
        isShow:'customer'
        
    }
    setShow=(isShow)=>{//在父组件定义好修改state属性的方法，传递给子组件，子组件调用，传的参数必须与定义的state中属性名称一致
        this.setState({
            isShow
        })
    }
    render() {
        let {data,isShow} = this.state;
        return (<div>
            <div className="friend-list">
               {Object.keys(data).map((item,index)=>{
                    return <List key={item} 
                        data={data[item]} 
                        isShow={isShow} 
                        item={item}
                        setShow = {this.setShow}
                        ></List>
                })}
            </div>
        </div>)
    }
}