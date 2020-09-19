import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nama: 'farhan ammar sakwan',
    kelas: 'mia 2',
    count: 1,
    data: [
      { id: 1, text: 'asassaas', done: false },
      { id: 1, text: 'asassaas', done: true },
      { id: 1, text: 'asassaas', done: false }
    ],
    todos: [
      {
        title: 'learn javasript',
        completed: false
      },
      {
        title: 'leran golang',
        completed: false
      }
    ]
  },
  mutations: {
    NEW_TODO (state, todoItem) {
      state.todos.push({
        title: todoItem,
        completed: false
      })
    },
    DEL_TODO (state, todoItem) {
      const datIndex = state.todos.indexOf(todoItem)
      state.todos.splice(datIndex, 1)
    },
    COMPLETE (state, todoItem) {
      todoItem.completed = !todoItem.completed
    }
  },
  getters: {
    pendingTodo (state) {
      return state.todos.filter(dt => {
        return dt.completed === false
      }).length
    },
    SucsessTodo (state) {
      return state.todos.filter(dt => {
        return dt.completed === true
      }).length
    }
  },
  actions: {
    addnewTodo ({ commit }, todoItem) {
      commit('NEW_TODO', todoItem)
    },
    deleteTodo (state, todItem) {
      this.commit('DEL_TODO', todItem)
    },
    completedTodo (state, todoItem) {
      this.commit('COMPLETE', todoItem)
    }
  },
  modules: {}
})
