<template>
    <div>
        <Header :addTodo="addTodo"/>
        <Main 
            :todolist="todolist" 
            :undolist="handleTodos(true)" 
            :donelist="handleTodos()" 
            :toggleDone="toggleDone" 
            :removeTodo="removeTodo"
        />
        <Footer :removeDoneTodos="removeDoneTodos" />
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
        data(){
            return{
                todolist:[
                    {
                        id:1,
                        content:'lala',
                        done:true
                    },
                    {
                        id:2,
                        content:'lulu',
                        done:false
                    }
                ],
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
                console.log(this.todolist)
            },
            //删除数据
            deleteTodo(param){
                // console.log(param.id)
                this.todolist = this.todolist.filter(todo=>todo.id!==param.id)
            },
            //编辑todo状态
            toggleDone(todo){
                // console.log(todo)
                todo.done = !todo.done
            },

            //删除todo
            removeTodo(id){
                console.log(id)
                this.todolist = this.todolist.filter(item=>item.id!==id)
            },

            //删除所有已完成
            removeDoneTodos(){
                this.todolist = this.todolist.filter(item=>!item.done)
            }

        },
    }
</script>

<style lang="scss" scoped>

</style>