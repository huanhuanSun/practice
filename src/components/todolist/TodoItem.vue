<template>
    <div>
        <input type="checkbox" v-model="todo.done" />
        <span :class="[todo.done?'finished':'']">{{todo.content}}</span>
        <button @click="removeTodo">X</button>
        <button @click="complete">completed(此效果与复选框的选中/取消一样)</button>
    </div>
</template>

<script>
    export default {
        props:['todo'],
        methods: {
            removeTodo(){
                // console.log(this.todo)
                this.$emit('remove',{id:this.todo.id,content:this.todo.content})
            },
            complete(){
                if (this.todo.done) {
                    this.$emit('update:complete',false)
                }
                else{
                    this.$emit('update:complete',true)
                }
            }
        },
    }
</script>

<style >
    .finished{
        color: #ddd;
       text-decoration: line-through;
    }
</style>