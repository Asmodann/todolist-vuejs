<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';

const props = defineProps({
    content: { type: String, required: true },
});

const isDone = ref(false);

const emit = defineEmits(['delete']);
const handleDelete = () => {
    emit('delete');
};

</script>

<template>
    <div class="grid grid-cols-6 p-4 items-center border-2 border-gray-600 m-1 shadow-sm" :class="`${isDone ? 'shadow-green-400 border-green-400' : ''}`">
        <div class="col-span-5 text-black font-semibold" @click="isDone = !isDone">
            <FontAwesomeIcon class="text-xl" :icon="`fa-regular ${isDone ? 'fa-square-check' : 'fa-square'}`" /> <span :class="{ 'line-through': isDone }">{{ content }}</span>
        </div>
        <div class="col-span-1 text-center text-red-500 text-xl cursor-pointer" @click="handleDelete()">
            <FontAwesomeIcon icon="fa-regular fa-trash-can" />
        </div>
    </div>
</template>