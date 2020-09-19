<template>
  <div>
    <h1>todo</h1>
    <h3>pending todo:{{pendingTodo}}</h3>
    <h3>SucessTodo:{{ SucsessTodo}}</h3>
    <todoList />
    <todoForm />
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import todoList from './components/TodoList'
import todoForm from './components/TodoForm'
export default {
  components: {
    todoList,
    todoForm
  },
  computed: {
    ...mapState(['nama', 'kelas', 'count']),
    ...mapGetters(['pendingTodo', 'SucsessTodo'])
  },
  methods: {
    ...mapMutations(['increment'])
  }

}
</script>

<style>

</style>
