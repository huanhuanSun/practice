import React,{PureComponent} from 'react'


export default class Create extends PureComponent{
    state={
        txt:''
    }
    render(){
        // console.log(this.props)
        let {txt} = this.state;
        let {addData} = this.props;
        return(<div id="create-todo">
                    <input id="new-todo" 
                        placeholder="What needs to be done?" 
                        autoComplete="off"
                        type="text"
                        value={txt}
                        onChange={(e)=>{
                            this.setState({
                                txt:e.target.value
                            })
                        }}
                        onKeyDown={(e)=>{
                            if (e.keyCode == 13 && e.target.value.trim()){
                                addData(e.target.value)
                                this.setState({
                                    txt:''
                                })
                            }
                        }}
                        />
                </div>)
    }
}