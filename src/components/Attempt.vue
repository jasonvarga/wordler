<script setup>
import { computed } from 'vue'
import Letter from './Letter.vue'
import { getLetterStatus } from '../utils'

const props = defineProps({
    answer: String,
    attempt: String,
})

const letters = computed(() => {
    return props.attempt.split('').map((letter, i) => ({
        letter,
        status: getLetterStatus(letter, i, props.answer),
    }))
})
</script>

<template>
    <div class="flex justify-center mb-2">
        <Letter
            v-for="(letter, i) in letters"
            :key="i"
            :letter="letter.letter"
            :status="letter.status"
            class="mx-1"
        />
    </div>
</template>
