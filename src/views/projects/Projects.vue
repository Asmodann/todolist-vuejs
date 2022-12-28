<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const projects = ref([
    {
        id: 1,
        name: 'Blue House',
        todos: 10,
        color: '#3333ff',
    },
    {
        id: 2,
        name: 'Astero Park Ohio',
        todos: 1,
        color: '#00ffff',
    },
    {
        id: 3,
        name: 'Green House',
        todos: 17,
        color: '#00ff00',
    },
    {
        id: 4,
        name: 'Minerals',
        todos: 0,
        color: '#ffff00',
    },
]);

const showInitials = (name) => {
    const words = name.split(/\s+/, 3);
    
    return words.map((word) => word[0].toUpperCase()).join('');
}
</script>

<template>
    <h3 class="font-bold text-lg pb-3 mb-4 border-b border-gray-300">Projects</h3>
    <div class="flex flex-col w-full">
        <div v-for="project in projects" :key="project.id">
            <div class="flex flex-row w-full items-center mb-2 shadow-lg">
                <RouterLink :to="`/projects/${project.id}`" class="flex flex-row w-full items-center">
                    <div class="flex items-center justify-center w-16 h-14 font-bold" :style="`background-color: ${project.color}`">
                        {{ showInitials(project.name) }}
                    </div>
                    <div class="w-full ml-3 text-sm">
                        <h4 class="font-semibold">{{ project.name }}</h4>
                        <span>{{ project.todos > 0 ? project.todos : 'No' }} task{{ project.todos > 1 ? 's' : '' }}</span>
                    </div>
                </RouterLink>
                <div class="cursor-pointer text-red-400 p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                    </svg>

                </div>
            </div>
        </div>
    </div>
</template>