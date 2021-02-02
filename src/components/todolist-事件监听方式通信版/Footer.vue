<template>
    <footer>
        <div>
            Copyright © 2014 todolist.cn
            <a class="clear" @click="removeAll">clear</a>
        </div>
        <div class="my_footer">
            <span>
                <input type="checkbox" v-model="checkAll"> 全选/取消
            </span>            
            <span class="footer_center">
                已完成{{doneSize}}项/共{{todos.length}}项
            </span>
            <button @click="removeAll">清除所有已完成</button>
        </div>        
    </footer>
</template>

<script>
    export default {
        props:{
            todos:Array,
            selectAll:Function,
        },
        methods: {
            removeAll(){
                this.$bus.$emit('removeAllDone')
            }
        },
        computed: {
            doneSize(){
                return this.todos.reduce((pre,curr)=>{
                    return pre + (curr.done?1:0)
                }, 0)
            },
            //全选/取消
            checkAll:{
                //get  当所有todo都是已完成时，全选按钮也要被选中  get为被动
                get(){
                    return this.todos.length === this.doneSize;
                },
                //get  当全选按钮选中时，要将所有的todo的done属性都改为true， 反之，都改为false
                set(value){
                    //this.selectAll(value)
                    this.$bus.$emit('checkAll',value)
                } 
            }
        }
    }
</script>

<style >
    .clear{
        cursor: pointer;
    }
</style>