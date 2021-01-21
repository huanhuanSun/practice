<template>
    <footer>
        Copyright © 2014 todolist.cn
        <a class="clear" @click="removeAll">clear</a>
    </footer>
</template>

<script>
    export default {
        props:['removeDoneTodos'],
        methods: {
            removeAll(){
                this.removeDoneTodos()
            }
        },
    }
</script>

<style >
    .clear{
        cursor: pointer;
    }
</style>