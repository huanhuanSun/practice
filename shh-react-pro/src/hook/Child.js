import React,{useState,useEffect,useRef} from 'react'

function Child(props){
    // console.log(props)
    let {name,setName} = props;
    const [age,setAge] = useState(28)

    let div = useRef(11)
    // console.log(div)
    //记录的是组件更新前的值
    let prevVal = useRef({
        name,
        age
    })
    useEffect(()=>{
        console.log(prevVal.current,name,age)
        //手动更改prevVal.current的值，使其始终记录组件更新前的值，若不加这句，则prevVal.current中记录的始终是首次挂载时的值
        prevVal.current ={
            name,age
        }
    })


    // let prevRef = useRef(true);
    // useEffect(()=>{
    //     // console.log(prevRef.current)
    //     if (prevRef.current) {
    //         console.log('挂载')
    //         prevRef.current = false;
    //     }
    //     else{
    //         console.log('更新')
    //     }
    // })
    

    return(<div ref={div}>
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