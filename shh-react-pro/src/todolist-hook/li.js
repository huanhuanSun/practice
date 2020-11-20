import React,{useState,useRef,useEffect} from 'react'

export default function Li (props) {
    let {item,UpdateData,deleteData,EditData} =props;
    let [val,setVal] = useState(item.txt)
    let [edit,setEdit] = useState(false);
    let ref = useRef(null)
    useEffect(()=>{
        // console.log(ref.current)
        // console.log(val)
    })
    return(<li  className={ edit?"editing":''}>
            <div className={"todo " +(item.done?'done':'')}>
                <div className="display">
                    <input 
                        className="check" 
                        type="checkbox" 
                        checked={item.done}
                        onChange={(e)=>{
                            UpdateData(item.id,e.target.checked)
                        }}
                        />
                    <div className="todo-content"
                        onDoubleClick={()=>{
                            setEdit({
                                edit:true
                            })
                        }}
                    >{item.txt}</div>
                    <span className="todo-destroy"
                        onClick={()=>{
                            deleteData(item.id)
                        }}
                    ></span>
                </div>
                <div className="edit">
                    <input type="text" 
                        value={val}
                        onBlur={()=>{
                            setEdit(false)
                            EditData(item.id,val)
                        }}
                        onChange={(e)=>{
                            setVal(e.target.value)
                        }}
                    />
                </div>
            </div>
        </li> )
}