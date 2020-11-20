import React,{useState} from 'react'
import Child from './Child'

//自定义hook
function useToggle(init){
    const [off,setOff] = useState(init)
    return [off,()=>{
        setOff(!off);
    }]
}

function App (){
    const [name,setName] = useState('shh');
    const [show,setShow] = useToggle(true);
    return(<div>
        {show?(<Child name={name}
                setName={setName}
        ></Child>):''}

        <button onClick={()=>{
            setShow(show)
        }}>{show?'卸载':'加载'}</button>
    </div>)
}

export default App