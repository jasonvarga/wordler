<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import Letter from './Letter.vue'

const input = ref('');

const emit = defineEmits(['complete']);

function keypressListener(e) {
    if (e.ctrlKey || e.altKey || e.metaKey) return;

    if (e.keyCode === 8) {
        input.value = input.value.slice(0, -1);
    } else if (e.key.match(/^[a-z]$/i)) {
        if (input.value.length === 5) return;
        input.value += e.key;
    } else if (e.keyCode === 13) {
        if (input.value.length < 5) return;
        emit('complete', input.value);
        input.value = '';
    }
};

onMounted(() => document.addEventListener('keydown', keypressListener));
onUnmounted(() => document.removeEventListener('keydown', keypressListener));

const letters = computed(() => input.value.toUpperCase() + ' '.repeat(5 - input.value.length))
</script>

<template>
    <div>
        <div class="flex justify-center mb-2">
            <Letter
                v-for="(letter, i) in letters"
                :key="i"
                :letter="letter"
                class="mx-1"
            />
        </div>
    </div>
</template>
