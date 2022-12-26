<script setup>
import { ref } from 'vue';

const props = defineProps({
    modalTitle: { type: String, required: true},
});
const emit = defineEmits(['close']);

const closeModal = () => {
    emit('close');
}
</script>

<template>
    <div class="absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.5)] z-[999] p-10" @click.self="closeModal()">
        <div class="w-full p-2 bg-white rounded-md border-2 border-black">
            <div class="w-full p-1 pl-0 border-b border-gray-300">
                <h4 class="text-gray-700 font-semibold">{{ modalTitle }}</h4>
            </div>
            <slot></slot>
        </div>
    </div>
</template>