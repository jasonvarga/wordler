<script setup>
import { computed } from 'vue'
import Letter from './Letter.vue'
</script>

<template>
    <div class="flex justify-center mb-2">
        <Letter
            v-for="i in Array(5)"
            :key="i"
            letter=""
            class="mx-1"
        />
    </div>
</template>
