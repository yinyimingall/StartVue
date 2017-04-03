<template>
    <li v-bind:class="{ complete: ctodo.completed}">
        <input class="list-input" v-model="ctodo.completed" type="checkbox">
        <span>{{ ctodo.value }}</span>
        <button class="list-button" v-on:click="removeTodo()">Delete</button>
    </li>
</template>

<script>
    export default {
        name: 'todo-item',
        props: ['ctodo', 'cctodos'],
        methods: {
            removeTodo(){
                this.cctodos.splice(this.cctodos.indexOf(this.ctodo), 1);
            }
        }
    }
</script>
<style>
    .list-input {
        float: left;
    }
    .list-button {
        float: right;
    }
    li.complete {
        text-decoration: line-through;
        color: #ddd;
    }
    li {
        display: block;
        margin-top: 12px;
    }
</style>