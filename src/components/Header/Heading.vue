<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    titleText: { type: String, default: 'To-do List'}
});
</script>

<template>
    <div class="w-full bg-gradient-to-r from-purple-300 to-blue-300 h-24">
        <div class="container m-auto">
            <div class="flex flex-row">
                <div class="flex flex-row justify-between w-full h-24">
                    <div class="flex items-center justify-center w-full">
                        <h1 class="font-bold text-2xl pl-3">{{ titleText }}</h1>
                    </div>
                    <!-- <ul class="flex flex-row items-center">
                        <li>
                            <RouterLink to="/projects" class="p-4 text-purple-500 font-semibold">Projects</RouterLink>
                        </li>
                    </ul> -->
                </div>
            </div>
        </div>
    </div>
</template>