<template>
    <section>
        <h2>
            正在进行
            <span>{{undolist.length}}</span>
        </h2>
        <ol id="todolist">
            <todoLiItem 
                v-for="todo in undolist" 
                :key="todo.id" 
                :class="[todo.done?'red':'']" 
                :todo="todo"
                :toggleDone="toggleDone"
                :removeTodo="removeTodo"
            />
        </ol>
        <h2>已经完成
            <span>{{donelist.length}}</span>
        </h2>
        <ul id="todolist">
            <todoLiItem 
                v-for="todo in donelist" 
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
        props:['todolist','donelist','undolist','toggleDone','removeTodo'],
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