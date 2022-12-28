<script setup>
import { defineComponent, ref } from 'vue';
import Heading from './components/Header/Heading.vue';
import Modal from './components/Modal.vue';
import TodoForm from './components/TodoForm.vue';
import TodoTask from './components/TodoTask.vue';

const title = ref('');
const bottomOfContainer = ref(false);
const showModal = ref(false);
const tasks = ref([]);

const handleScroll = (el) => {
    bottomOfContainer.value = (el.srcElement.offsetHeight + el.srcElement.scrollTop) >= el.srcElement.scrollHeight;
};

const addTask = (task) => {
    tasks.value.push(task);
};

const toggleModal = () => {
    showModal.value = !showModal.value;
}

const deleteTodo = (elem) => {
    tasks.value.splice(tasks.value.indexOf(elem), 1);
};
</script>

<template>
    <Heading class="fixed" :title-text="title.length > 0 ? title : undefined" />
    <div
        class="fixed rounded-tl-full rounded-tr-full bottom-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-blue-500 transition ease-linear delay-100"
        :class="!bottomOfContainer ? 'translate-y-0' : ' translate-y-full'"
    >
        <div class="w-full text-center">
            <a class="w-full block p-4 cursor-pointer text-white font-bold" @click="toggleModal()">Add new task</a>
        </div>
    </div>
    <Teleport to="#modals" v-if="showModal">
        <Modal v-bind:modal-title="'Add New Task'" v-on:close="toggleModal">
            <TodoForm v-on:add-task="addTask" />
        </Modal>
    </Teleport>

    <div class="container m-auto p-5 pt-28 overflow-y-auto max-h-screen" @scroll="handleScroll">
        <div class="flex flex-col w-full">
            <div v-for="task in tasks" :key="task">
                <TodoTask :content="task" v-on:delete="deleteTodo(task)" />
            </div>
        </div>
    </div>
</template>