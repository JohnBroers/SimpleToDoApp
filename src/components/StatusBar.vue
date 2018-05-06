<template>
  <div class="status-bar">
      <transition name="simple-fade" mode="out-in">
        <p v-if="countTasks > 0" key="taskstodo">You have <strong>{{ countTasks }}</strong> tasks to do...</p>
        <p v-else key="nothing">You have nothing to do. Enjoy your free time!</p>
      </transition>
  </div>
</template>

<script>
import { tasksRef } from './../firebase'
export default {
    firebase: {
        tasks: tasksRef
    },
    computed: {
        countTasks() {
            return this.tasks.filter(task => task.status === 'todo').length
        }
    }
}
</script>

