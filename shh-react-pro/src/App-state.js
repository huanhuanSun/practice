/*
 * @Author: shh 
 * @Date: 2020-05-20 16:01:02 
 * @Last Modified by: shh
 * @Last Modified time: 2020-05-21 11:40:02
 */
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         hello
//       </header>
//     </div>
//   );
// }

class App extends React.Component{

  state = {
    name:'shh',
    age:20
  }

  
  render(){
    // console.log(this)  //undefined
    let {name,age} = this.state
    
    console.log(name,age)
    return <div>
      <div>姓名：{name}</div>
      <div>年龄：{age}</div>

      <button onClick={()=>{
        console.log(this.state.age)
        this.setState({
          // age:++age
          age:++age
        })
      }}>增加年龄</button>
    </div>
  }
}

export default App;
