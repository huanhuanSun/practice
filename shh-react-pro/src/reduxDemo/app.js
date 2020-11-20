import React,{useState} from 'react'

export default function App(props){
   const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
 
    function expensive() {
        console.log('compute');
        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
        }
        return sum;
    }
 
    return <div>
        <h4>{count}-{val}</h4>
        <div>
            <button onClick={() => setCount(count + 1)}>加1</button>
            <input value={val} onChange={event => setValue(event.target.value)}/>
        </div>

    </div>;

}