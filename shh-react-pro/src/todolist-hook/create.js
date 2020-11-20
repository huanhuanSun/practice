import React,{useState} from 'react'

export default function Create (props) {
    let [val,setVal] = useState('')
    let {addData} = props
    return(<div id="create-todo">
                <input id="new-todo" 
                    placeholder="What needs to be done?" 
                    autoComplete="off"
                    type="text" 
                    value={val}
                    onChange={(e)=>{
                        setVal(e.target.value)
                    }}
                    onKeyDown={(e)=>{
                        if (e.keyCode == 13 && e.target.value.trim()) {
                            addData({
                                id:Date.now(),
                                txt:val,
                                done:false
                            })
                            setVal('')
                        }
                        
                    }}
                    
                    />
            </div> )
}