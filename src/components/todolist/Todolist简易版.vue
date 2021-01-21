<template>
    <div>
        <input type="text" @keyup.enter="addTodo" v-model="newTodo" />

        <ul>
            <li v-for="todo in todolist" :key="todo.id">
                <TodoItem 
                    :todo="todo" 
                    @remove="deleteTodo"
                    :complete.sync="todo.done"
                />
            </li>
        </ul>
    </div>
</template>

<script>
    import TodoItem from './TodoItem.vue'
    export default {
        components:{
            TodoItem
        },
        data(){
            return{
                newTodo:'',
                todolist:[
                    {
                        id:1,
                        content:'lala',
                        done:true
                    },
                    {
                        id:2,
                        content:'lulu',
                        done:false
                    }
                ]
            }
        },
        methods: {
            //添加数据
            addTodo(){
                this.todolist.push({
                    id:Date.now(),
                    content:this.newTodo,
                    done:false
                })
                this.newTodo = ''
            },
            //删除数据
            deleteTodo(param){
                // console.log(param.id)
                this.todolist = this.todolist.filter(todo=>todo.id!==param.id)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>