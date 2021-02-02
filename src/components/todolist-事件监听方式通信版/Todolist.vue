<template>
    <div>
        <Header ref="header"/>
        <Main 
            :todolist="todolist" 
        />
        <Footer>
            <span slot="left">
                <input type="checkbox" v-model="checkAll"> 全选/取消
            </span>
            <span class="footer_center" slot="center">
                已完成{{doneSize}}项/共{{todolist.length}}项
            </span>
            <button @click="removeDoneTodos" slot="right">清除所有已完成</button>
        </Footer>
    </div>
</template>

<script>
    import '../../index.css'
    import Footer from './Footer.vue'
    import Header from './Header.vue'
    import Main from './Main.vue'
    
    export default {
        components:{
            Header,
            Main,
            Footer
        },
        //
        mounted(){
            //模拟异步读取todo数据
            setTimeout(()=>{
                const todos = JSON.parse(localStorage.getItem('todos') || '[]') 
                console.log(todos)
                this.todolist = todos;
            },1000)            
            //绑定自定义事件监听
            this.$refs.header.$on('addData',this.addTodo)
            //绑定自定义事件监听(removeData)
            this.$bus.$on('removeData',this.removeTodo);
            //removeAllDone 事件监听
            this.$bus.$on('removeAllDone',this.removeDoneTodos)
            //toggleDone todo的toggle状态 事件监听
            this.$bus.$on('toggleDone',this.toggleDone)
            // selectAll  全选/取消 的事件监听
            this.$bus.$on('checkAll',this.selectAll)
        },
        //
        beforeDestroy(){
            //移除事件监听
            this.$bus.$off('removeData');
            this.$refs.header.$off('addData');
            this.$bus.$off('removeAllDone');
            this.$bus.$off('toggleDone');
            this.$bus.$off('checkAll')
        },
        data(){
            return{
                todolist:[],
            }
        },
        methods: {
            //处理todos
            handleTodos(isDo){
                if (isDo){
                    return this.todolist.filter(todo=>!todo.done);
                }
                else{
                    return this.todolist.filter(todo=>todo.done);
                }
            },
            //添加数据
            addTodo(todo){
                this.todolist.unshift(todo)
            },
            //删除数据
            deleteTodo(param){
                this.todolist = this.todolist.filter(todo=>todo.id!==param.id)
            },
            //编辑todo状态
            toggleDone(todo){
                todo.done = !todo.done
            },

            //删除todo
            removeTodo(id){
                this.todolist = this.todolist.filter(item=>item.id!==id)
            },

            //删除所有已完成
            removeDoneTodos(){
                this.todolist = this.todolist.filter(item=>!item.done)
            },

            //全选/取消
            selectAll(val){
                this.todolist.forEach(v=>v.done = val)
            },
        },
        watch:{
            todolist:{
                deep:true,//深度监视
                handler:function(val){// todos 发生改变的回调函数
                    // console.log(val)
                    //保存最新的todos到localstorage中
                    localStorage.setItem('todos',JSON.stringify(val))
                }
            }
        },
        computed: {
            doneSize(){
                return this.todolist.reduce((pre,curr)=>{
                    return pre + (curr.done?1:0)
                }, 0)
            },
            //全选/取消
            checkAll:{
                //get  当所有todo都是已完成时，全选按钮也要被选中  get为被动
                get(){
                    return this.todolist.length === this.doneSize;
                },
                //get  当全选按钮选中时，要将所有的todo的done属性都改为true， 反之，都改为false
                set(value){
                    //this.selectAll(value)
                    this.$bus.$emit('checkAll',value)
                } 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>