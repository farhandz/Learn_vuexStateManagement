<template>
 <div class="">
     <input type="text" v-model="newitem">
     <button @click="addNewitem">submit</button>
 </div>
</template>

<script>
export default {
  data () {
    return {
      newitem: ''
    }
  },
  methods: {
    addNewitem () {
      this.$store.dispatch('addnewTodo', this.newitem)
    }
  }

}
</script>

<style>

</style>
