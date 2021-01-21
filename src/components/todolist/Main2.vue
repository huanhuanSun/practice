<template>
    <section>
        <h2>
            正在进行
            <span>{{handleTodos(true).length}}</span>
        </h2>
        <ol id="todolist">
            <todoLiItem 
                v-for="todo in handleTodos(true)" 
                :key="todo.id" 
                :class="[todo.done?'red':'']" 
                :todo="todo"
                :toggleDone="toggleDone"
                :removeTodo="removeTodo"
            />
        </ol>
        <h2>已经完成
            <span>{{handleTodos().length}}</span>
        </h2>
        <ul id="todolist">
            <todoLiItem 
                v-for="todo in handleTodos()" 
                :key="todo.id" 
                :class="[todo.done?'red':'']" 
                :todo="todo" 
                :toggleDone="toggleDone"
                :removeTodo="removeTodo"
            />
        </ul>
    </section>
</template>

<script>
    import todoLiItem from './Li.vue'
    export default {
    components: { todoLiItem },
        // props:['todolist','donelist','undolist','toggleDone','removeTodo'],
        props:['todolist','toggleDone','removeTodo'],
        // data(){
        //     console.log(this.todolist)

        //     return{
        //         // undolist:this.todolist.filter(todo=>!todo.done),
        //         // donelist:this.todolist.filter(todo=>todo.done)
        //     }
        // },
        methods: {
            handleTodos(isDo){
                if (isDo){
                    return this.todolist.filter(todo=>!todo.done);
                }
                else{
                    return this.todolist.filter(todo=>todo.done);
                }
            },
        },
    }
</script>

<style >
    .red{
        background: red;
    }
    span{
        position: absolute;
        top: 2px;
        right: 5px;
        display: inline-block;
        padding: 0 5px;
        height: 20px;
        border-radius: 20px;
        background: #E6E6FA;
        line-height: 22px;
        text-align: center;
        color: #666;
        font-size: 14px;
    }
</style>