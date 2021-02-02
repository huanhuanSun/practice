<template>
    <section>
        <h2>
            正在进行
            <span class="num">{{undolist.length}}</span>
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
            <span class="num">{{donelist.length}}</span>
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
    
</style>