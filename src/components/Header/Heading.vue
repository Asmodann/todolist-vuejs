<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="w-full shadow-lg">
        <div class="container">
            <div class="flex flex-row">
                <div class="flex flex-row justify-between w-full h-14">
                    <div class="flex items-center">
                        <h1>
                            <RouterLink to="/" class="font-bold text-2xl pl-3">Home</RouterLink>
                        </h1>
                    </div>
                    <ul class="flex flex-row items-center">
                        <li>
                            <RouterLink to="/projects" class="p-4 text-purple-500 font-semibold">Projects</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>