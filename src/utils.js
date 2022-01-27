import words from "./words";

export function getLetterStatus (letter, index, word) {
    if (word[index] === letter) return 'correct';
    if (word.includes(letter)) return 'almost';
    return 'incorrect';
}

export function getRandomWord () {
    return words[Math.floor(Math.random() * words.length)];
}
