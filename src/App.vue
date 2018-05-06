<template>
  <div id="app" class="wrapper">
    
    <app-add-task></app-add-task>

    <app-status-bar></app-status-bar>

    <app-tasks></app-tasks>

  </div>
</template>

<script>
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import StatusBar from './components/StatusBar'

export default {
  name: 'app',
  components: {
    appAddTask: AddTask,
    appTasks: Tasks,
    appStatusBar: StatusBar
  }
}
</script>