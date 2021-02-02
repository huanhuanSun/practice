<template>
    <div>
        <Header ref="header"/>
        <Main 
            :todolist="todolist" 
        />
        <Footer
            :todos="todolist" 
        />
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
    }
</script>

<style lang="scss" scoped>

</style>