<template>
    <div>
        <ul>
            <todo-item v-for="todo in filterTodos" v-bind:cctodos="ctodos" v-bind:ctodo="todo"></todo-item>
        </ul>
    </div>
</template>

<script>
    import todoItem from './listItem.vue'
    var filter = {
        all: function (todos) {
            return todos;
        },
        active: function (todos) {
            return todos.filter(function (todo) {
                return !todo.completed;
            })
        },
        completed: function (todos) {
            return todos.filter(function (todo) {
                return todo.completed;
            })
        }
    };
export default {
    name: 'todo-list',
    props: ['ctodos', 'cfilter'],
    computed: {
      filterTodos(){
          return filter[this.cfilter](this.ctodos)
      }
    },
    components: {
        todoItem
    }
}
</script>