<script setup>
defineProps({
    letter: String,
    status: String,
})
</script>

<template>
    <div
        class="border w-0 h-0 font-mono p-3 leading-none flex justify-center items-center"
        :class="{
            'border-transparent': status,
            'border-gray-200': !status,
            'bg-green-500 text-white': status === 'correct',
            'bg-yellow-500 text-white': status === 'almost',
            'bg-gray-400 text-white': status === 'incorrect',
        }"
    >
        <span class="uppercase text-xs">{{ letter }}</span>
    </div>
</template>
