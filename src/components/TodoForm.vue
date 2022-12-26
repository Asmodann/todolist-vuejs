<script setup>
import { ref } from 'vue';

const emit = defineEmits(['addTask']);

const inputs = ref({
    description: '',
    closeModalOnSubmit: true,
});

const handleSubmit = () => {
    if (inputs.value.description.length == 0) return;

    emit('addTask', inputs.value.description);
    inputs.value.description = '';
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <label class="block w-full">Description:</label>
        <input type="text" class="block w-full p-2 shadow-lg border border-gray-500 rounded-md focus:border-blue-300 focus:outline-none" v-model="inputs.description" />

        <button type="submit" class="mt-4 rounded-md p-2 border w-full text-white font-semibold bg-gradient-to-r from-purple-500 to-blue-500">Add task</button>
    </form>
</template>