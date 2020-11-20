import React,{useState,useEffect} from 'react'

function Child(props){
    // console.log(props)
    let {name,setName} = props;
    const [age,setAge] = useState(28)

    useEffect(()=>{
        //name变化时做的操作
        console.log('name变化导致更新')
    },[name])

    useEffect(()=>{
        //age 变化时做的操作
        console.log('age变化导致更新')
    },[age])

    useEffect(()=>{
        console.log('组件挂载完成之后')
    },[])

    useEffect(()=>{
        console.log('组件挂载完成之后及组件更新完成之后')
    })

    useEffect(()=>{
        return ()=>{
            console.log('组件即将卸载时执行')
        }
    })

    return(<div>
        name:<span>{name}</span>
        <p>
            请输入新名字：<input type="text" 
                            value={name}
                            onChange={(e)=>{
                                setName(e.target.value)
                            }}
                            />
        </p>

        age:{age}
        <p>
            请输入新年龄：<input type="text" 
                            value={age}
                            onChange={(e)=>{
                                setAge(e.target.value)
                            }}
                            />
        </p>
    </div>)
}

export default Child