<template>
  <div id="app" class="wrapper">
    <AddTasks></AddTasks>
    <StatusBar></StatusBar>
    <TaskList></TaskList>
  </div>
</template>

<script>
import AddTasks from './components/AddTask'
import TaskList from './components/Tasks'
import StatusBar from './components/StatusBar'

export default {
  name: 'app',
  components: {
    AddTasks,
    TaskList,
    StatusBar
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
