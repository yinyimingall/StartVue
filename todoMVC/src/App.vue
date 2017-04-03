<template>
  <div id="app">
    <div class="title">
      <h1>TODO List</h1>
      <small>{{ msg }}</small>
    </div>

    <todo-input></todo-input>

    <div class="content">
      <hr>
      <div v-if="todos[0]">
        <todo-list v-bind:ctodos="todos" :cfilter="filter"></todo-list>
      </div>
      <div v-else>
        <p>Here is empty.input some item.</p>
      </div>
      <hr>
    </div>

    <todo-footer></todo-footer>

    <read-me></read-me>
  </div>
</template>

<script>
  import todoInput from './components/input.vue'
  import todoList from './components/list.vue'
  import todoFooter from './components/footer.vue'
  import readMe from './components/doc.vue'
  import {bus} from './components/EventBus.js'
  import Storage from './Storage.js'
export default {
  name: 'app',
  data () {
    return {
        todos: Storage.fetch(),
        filter: 'all',
        msg: 'with Vue2.2.1'
    }
  },
    watch: {
      todos: {
        deep: true,
          handler: function(val, oldVal){
            Storage.store(val)
        }
        //相当于 handler: Storage.store
      }
    },
    created(){
      bus.$on('add-todo', this.addTodo);
      bus.$on('set-filter', this.setFilter)
    },
    methods: {
      addTodo(newTodo){
          if(!newTodo){
            console.log('input is empty');
          }
          this.todos.push({ value: newTodo, completed: false});
          Storage.store(this.todos)
      },
        setFilter(newfilter){
          this.filter = newfilter;
          Storage.store(this.todos)
        }
    },
    components: {
        todoInput,
        todoList,
        todoFooter,
        readMe
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title {
  margin-bottom: 12px;
}
.content {
  width: 240px;
  margin: 21px auto;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
