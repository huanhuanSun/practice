import React from 'react'
import {Redirect} from 'react-router-dom'
import Index from './views/index'
import About from './views/about'
import Join from './views/join'
import View404 from'./views/view404'
import Login from './views/login'
import Classs from './views/class'

let routes = [
    {
        title:'首页',
        path:'/',
        exact:true,
        isNav:true,
        render:(props)=>{
            return <Index {...props} />
        }
    },
    {
        title:'关于',
        path:'/about',
        exact:true,
        isNav:true,
        render:(props)=>{
            return <About {...props} />
        }
    },
    {
        title:'加入',
        path:'/join',
        exact:true,
        isNav:true,
        render:(props)=>{
            return <Join {...props} />
        }
    },
    {
        title:'班级',
        path:'/class/:id',
        isDT:true,//是否是动态路由
        to:'/class/1',
        exact:true,
        isNav:true,
        render:(props)=>{
            // console.log(props)
            return <Classs {...props} />
        }
    },
    {
        title:'登录',
        path:'/login',
        exact:true,
        isNav:true,
        render:(props)=>{
            // console.log(props)
            if (props.user.trim()) {
                return <Redirect to="/" />
            }
            return <Login {...props} />
        }
    },
    {
        title:'404',
        path:'',
        exact:true,
        isNav:false,
        render:(props)=>{
            return <View404 {...props} />
        }
    }

]

export default routes;



