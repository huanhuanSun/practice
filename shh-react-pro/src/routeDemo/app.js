import React,{useState} from 'react'
import {Route,Switch,NavLink} from 'react-router-dom'
import routes from './route'   
import './index.css'



export default function App(){
    let [user,setUser] = useState('')
    return(<div>
        <nav className="nav">
            {
                routes.filter(item=>item.isNav).map((item,index)=>{
                    return (
                    <NavLink 
                        key={index} 
                        to={item.isDT?item.to:item.path} 
                        exact={item.exact}
                        activeClassName={"hove"}
                        activeStyle={{
                            lineHeight:"30px"  
                        }}
                    >{item.title}</NavLink>
                    )
                })
            }
            {user?(
                <div>
                    <span>用户名：{user}</span>
                    <button onClick={()=>{
                        setUser('')
                    }}>退出</button>
                </div>
            ):''}
        </nav>
        <div>
            <Switch>
                {routes.map((item,index)=>{
                    return <Route key={index} path={item.path} exact={item.exact} user={user} render={(props)=>{
                            props = {user,setUser,...props}
                            return item.render({...props})
                        }} 
                    ></Route>
                })}
            </Switch>
        </div>

    </div>)
}