<template>
    <li>
        <input 
            type="checkbox" 
            v-model="isChecked"
        />
        <p>{{todo.content}}</p>
        <a @click="remove">-</a>
    </li>
</template>

<script>
    export default {
        props:{
            todo:Object,
            toggleDone:Function,
            removeTodo:Function
        },
        methods: {
            remove(){
                this.removeTodo(this.todo.id)
            }
        },
        computed: {
            isChecked:{
                get(){
                    return this.todo.done
                },
                set(){
                    this.toggleDone(this.todo)
                }
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>