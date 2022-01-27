<script setup>
defineProps({
    text: String
})
</script>

<template>
    <button class="border py-1 px-2 rounded-md shadow text-sm bg-white">
        {{ text }}
    </button>

</template>
