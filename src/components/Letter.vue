<script setup>
defineProps({
  letter: String,
  status: String,
})
</script>

<template>
    <div
        class="border-2 font-mono p-5 h-0 w-0 text-2xl font-bold flex justify-center items-center"
        :class="{
            'border-transparent': status,
            'border-gray-200': !status,
            'bg-green-500 text-white': status === 'correct',
            'bg-yellow-500 text-white': status === 'almost',
            'bg-gray-400 text-white': status === 'incorrect',
        }"
    >
        <span>{{ letter.toUpperCase() }}</span>
    </div>
</template>
