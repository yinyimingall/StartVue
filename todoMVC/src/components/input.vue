<template>
    <div>
        <input v-model.trim="newItem"
               @keyup.enter="addNewTodo"
               type="text"
               placeholder="after write, press enter">
    </div>
</template>
<script>
    import {bus} from './EventBus.js'
    export default {
        name: 'todo-list',
        data () {
            return {
                newItem: ''
            }
        },
        methods: {
            addNewTodo(){
                bus.$emit('add-todo', this.newItem);
                this.newItem = '';
            }
        }
    }
</script>