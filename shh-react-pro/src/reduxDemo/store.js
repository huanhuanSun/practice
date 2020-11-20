import {createStore} from 'redux'
function reducer(state={
    num:1
},action) {
    return state;
}
const store = createStore(reducer)

export default store;