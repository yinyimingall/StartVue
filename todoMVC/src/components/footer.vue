<template>
    <div>
        <button @click="setFilter('all')">All</button>
        <button @click="setFilter('active')">Active</button>
        <button @click="setFilter('completed')">Completed</button>
    </div>
</template>

<script>
    import {bus} from './EventBus.js'
    export default {
        name: 'todo-footer',
        methods: {
            setFilter(filter) {
                bus.$emit('set-filter', filter);
            }
        }
    }
</script>