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
        },
        methods: {
            remove(){
                //事件分发
                this.$bus.$emit('removeData',this.todo.id)
            }
        },
        computed: {
            isChecked:{
                get(){
                    return this.todo.done
                },
                set(){
                    this.$bus.$emit('toggleDone',this.todo)
                }
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>