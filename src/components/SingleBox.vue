<template>
    <div ref="card" @click="flipCard()" class="flex justify-center items-center w-full h-full bg-cyan-400 transition ease-in-out duration-300 cursor-pointer">
        <img v-if="flipped" :src="src" alt="" class="w-auto h-auto">
        <div v-else>{{ index }}</div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity"

const props = defineProps(['index', 'src'])
const flipped = ref(false)
const card = ref()


function flipCard(){
    if (!flipped.value) {
        flipCardForward()
    } else {
        flipCardBack()
    }

    let audio = new Audio('/src/assets/audios/flip-effect.mp3');
    setTimeout(() => {
        audio.play();
    }, 100);       
}

function flipCardForward(){
    card.value.classList.add('rotate-y-180')

    setTimeout(() => {
        flipped.value = true
    }, 100);    
}

function flipCardBack(){
    card.value.classList.remove('rotate-y-180')

    setTimeout(() => {
        flipped.value = false
    }, 100);      
}





</script>