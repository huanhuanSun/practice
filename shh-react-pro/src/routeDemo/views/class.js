import React from 'react'
import datas from '../data'
import {NavLink} from 'react-router-dom'

let per = 3;
let pages = Math.ceil(datas.length/per);//3



function List (props) {
    // console.log(props)
    let {params} = props.match;
    let parm_id = params.id;
    return <ul>
        {datas.filter((item,index)=>{
            //数据截取
            return ((per*(parm_id-1)<=index) && index<per*parm_id)
        }).map((item,index)=>{
            return  <li key={item.id}>{item.content}</li>
        })}
    </ul>
}
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
    let {match} = props;
    return <div>
        <List match={match}></List>
        <ClassNav ></ClassNav>
    </div>
    
}