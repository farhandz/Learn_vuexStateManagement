<template>
  <div>
   <span style="cursor: pointer;" :class="{completed: todo.completed}" @click=" completedTodo(todo)" >{{todo.title}}</span>
   <button @click="deleteTodo(todo)"  style="margin-left: 5px">delete</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['todo'],
  data () {
    return {

    }
  },
  methods: {
    ...mapActions(['deleteTodo', 'completedTodo'])
  }

}
</script>

<style>
.completed {
  text-decoration: line-through
}

</style>
