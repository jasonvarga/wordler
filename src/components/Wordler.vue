<script setup>
import CurrentAttempt from './CurrentAttempt.vue'
import Attempt from './Attempt.vue'
import FutureAttempt from './FutureAttempt.vue'
import Keyboard from './Keyboard.vue'
import Button from './Button.vue'
import { computed, ref } from 'vue';
import { getLetterStatus, getRandomWord } from '../utils';

const totalAttempts = 6;
const answer = ref(getRandomWord());
const finished = ref(false);
const winner = ref(false);
const loser = computed(() => finished.value && !winner.value);
const attempts = ref([])

const attemptResults = computed(() => {
    return attempts.value.map(attempt => {
        return {
            word: attempt,
            letters: attempt.split('').map((letter, i) => ({
                letter,
                status: getLetterStatus(letter, i, answer.value),
            }))
        }
    })
})

const letterUsage = computed(() => {
    const usage = {};
    attemptResults.value.forEach(attempt => {
        attempt.letters.forEach(letter => usage[letter.letter] = letter.status)
    })
    return usage;
})

const futureAttempts = computed(() => {
    return totalAttempts - attempts.value.length - 1;
})

const complete = (word) => {
    attempts.value.push(word);

    if (word === answer.value) {
        finished.value = true;
        winner.value = true;
    }

    if (attempts.value.length === totalAttempts) {
        finished.value = true;
    }
}

const reset = () => {
    attempts.value = [];
    finished.value = false;
    winner.value = false;
    answer.value = getRandomWord();
}
</script>

<template>
    <div>
        <h1 class="text-center font-bold text-4xl mb-8">Wordler</h1>

        <div>
            <Attempt v-for="(attempt, i) in attempts" :key="i" :attempt="attempt" :answer="answer" />
            <CurrentAttempt v-if="!finished" @complete="complete" />
            <template v-if="futureAttempts > 0">
                <FutureAttempt v-for="i in futureAttempts" :key="i" />
            </template>

            <div v-if="finished" class="mt-10 bg-gray-100 py-5 rounded shadow-inner">
                <div class="text-center mb-4 font-bold">
                    <span v-if="winner">You won! 🎉</span>
                    <span v-if="loser">Better luck next time!</span>
                </div>
                <div class="flex justify-center ">
                    <Button v-if="loser" @click="finished = false" text="Keep trying" class="mx-1" />
                    <Button @click="reset" text="Another word" class="mx-1" />
                </div>
            </div>
        </div>

        <Keyboard :usage="letterUsage" class="mt-10" />
    </div>
</template>
