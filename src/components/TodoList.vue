<template>
 <div>
    <Todo v-for="(todo, index) in todos" :key="index" :todo="todo"  />
 </div>
</template>

<script>
import Todo from './Todo'
import { mapState } from 'vuex'
export default {
  components: {
    Todo
  },
  computed: {
    ...mapState(['todos'])
  }

}
</script>

<style>

</style>
