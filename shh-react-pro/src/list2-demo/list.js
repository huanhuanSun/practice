/*
 * @Author: shh 
 * @Date: 2020-05-22 09:39:15 
 * @Last Modified by: shh
 * @Last Modified time: 2020-05-22 11:09:18
 */

 import React,{Component} from 'react'


 export default class List extends Component{
     render() {
         let {data,isShow,item,setShow} = this.props;
         let {title,list} = data;
         return (<div>
             <div className={`friend-group ${isShow==item?'expanded':''}`}>
                    <dt
                        onClick={()=>{
                            setShow(item)
                        }}
                    >{title}</dt>
                    {list.map((item,index)=>{
                        return <dd key={index}>{item.name}</dd>
                    })}
                </div>
         </div>);
     }
 }