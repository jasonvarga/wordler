<script setup>
import Key from './Key.vue'

const props = defineProps({
  usage: Object,
})
</script>

<template>
    <div>
        <div class="flex justify-center">
            <Key v-for="key in 'qwertyuiop'" :key="key" :letter="key" :status="usage[key]" class="mx-1" />
        </div>
        <div class="flex justify-center">
            <Key v-for="key in 'asdfghjkl'" :key="key" :letter="key" :status="usage[key]" class="mx-1 my-2" />
        </div>
        <div class="flex justify-center">
            <Key v-for="key in 'zxcvbnm'" :key="key" :letter="key" :status="usage[key]" class="mx-1" />
        </div>
    </div>
</template>
