<template>
    <transition-group name="fade" class="tasks" mode="out-in" tag="div" >
        <div class="tasks__item" v-for="task in tasks" :key="task['.key']" :class="{'tasks__item--done': task.status === 'done'}">

            <p class="tasks__item__title">{{ task.title }}</p>

            <transition name="rotate" mode="out-in">
                <a v-if="task.status === 'todo'" key="todo" 
                    @click.prevent="updateTaskStatus(task['.key'], 'done')" 
                    class="tasks__item__button tasks__item__button--status" href="/">
                    <i class="far fa-check-circle"></i>
                </a>
                <a v-if="task.status === 'done'" key="done" 
                    @click.prevent="updateTaskStatus(task['.key'], 'todo')" 
                    class="tasks__item__button tasks__item__button--status" href="/">
                    <i class="fas fa-check-circle"></i>
                </a>
            </transition>

            <a href="/" @click.prevent="deleteTask(task['.key'])" class="tasks__item__button"><i class="fas fa-trash-alt"></i></a>
        </div>
    </transition-group>
</template>

<script>
import { tasksRef } from './../firebase'

export default {
    firebase: {
        tasks: tasksRef
    },
    methods: {
        deleteTask(key) {
            tasksRef.child(key).remove();
        },
        updateTaskStatus(key, taskStatus) {
            tasksRef.child(key).update({
                status: taskStatus,
            });
            console.log(taskStatus);
        }
    },
    computed: {
        taskCounter() {
            const tasksLeft = this.tasks.filter(task => task.status === 'todo')
            return tasksLeft.length;
        }
    }
}
</script>
