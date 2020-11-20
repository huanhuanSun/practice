import React,{useState} from 'react'
// import {} from 'react-router-dom'


export default function Login(props) {
    // console.log(props)
    let [name,setName] = useState('')
    let {user,setUser} = props;
    return (<div>
        <input type="text"
               value={name}
               onChange={(e)=>{
                setName(e.target.value)
               }}
         />
         <button onClick={()=>{
             console.log(user)
             setUser(name)
         }}>登录</button>
         
         
    </div>)
}