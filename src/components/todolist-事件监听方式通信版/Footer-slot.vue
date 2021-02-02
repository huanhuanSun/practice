<template>
    <footer>
        <div>
            Copyright © 2014 todolist.cn
            <a class="clear" @click="removeAll">clear</a>
        </div>
        <div class="my_footer">
            <slot name="left"></slot>
            <slot name="center"></slot>
            <slot name="right"></slot>
        </div>        
    </footer>
</template>

<script>
    export default {
        methods: {
            removeAll(){
                this.$bus.$emit('removeAllDone')
            }
        },
    }
</script>

<style >
    .clear{
        cursor: pointer;
    }
</style>