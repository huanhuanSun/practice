import React from 'react'
import datas from '../data'
import {NavLink,withRouter} from 'react-router-dom'

let per = 3;
let pages = Math.ceil(datas.length/per);//3

// withRouter 高阶路由  适用于非路由组件想要用路由组件中的路由信息

function List (props) {
    console.log(props)
    let {id} = props.match.params;
    return <ul>
        {datas.filter((item,index)=>{
            //数据截取
            return ((per*(id-1)<=index) && index<per*id)
        }).map((item,index)=>{
            return  <li key={item.id}>{item.content}</li>
        })}
    </ul>
}
let List2 = withRouter(List);

function ClassNav (props) {
    // console.log(props)
    return  <nav className="classnav">
        {
            [...('.'.repeat(pages))].map((item,index)=>{
                return <NavLink 
                    to={'/class/'+(index+1)} 
                    key={index}
                    exact
                    activeClassName="acc"
                    activeStyle={{
                        color:'red'
                    }}
                    >{index+1}</NavLink>
            })
        }
    </nav>
}


export default function Classs(props) {
    return <div>
        <List2 ></List2>
        <ClassNav ></ClassNav>
    </div>
    
}