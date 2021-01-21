<template>
    <header>
        <section>
            <label for="title">Todolist</label>
            <input 
                type="text" 
                id="title" 
                name="title" 
                placeholder="添加todo" 
                required 
                autocomplete="off"
                v-model="newTodo"
                @keydown.enter="addData"
            />
        </section>
    </header>
</template>

<script>
    export default {
        props:['addTodo'],
        data(){
            return {
                newTodo:''
            }
        },
        methods: {
            addData(){
                 if (!this.newTodo.trim()){
                    return;
                }
                let todo={
                    id:Date.now(),
                    content:this.newTodo,
                    done:false
                }
                this.addTodo(todo)
                this.newTodo = '';
            }
        },
    }
</script>

<style>

</style>