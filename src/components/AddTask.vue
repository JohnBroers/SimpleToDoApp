<template>
  <form class="task-form" v-on:submit.prevent="addTask">
    <input
      type="text"
      name="task"
      class="task-form__input"
      placeholder="What do you need to do?"
      v-model="task.title"
      autocomplete="off"
    >
    <button type="submit" class="task-form__submit" @click.prevent="addTask">
      <i class="fas fa-plus"></i>
    </button>
  </form>
</template>

<script>
import { tasksRef } from './../firebase'

export default {
  data () {
    return {
      task: {
        title: ''
      }
    }
  },
  methods: {
    addTask () {
      tasksRef.push({
        title: this.task.title,
        status: 'todo',
        date: new Date().getTime()
      })
      this.task.title = ''
    }
  }
}
</script>
