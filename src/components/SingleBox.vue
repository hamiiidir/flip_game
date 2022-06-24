<template>
    <div ref="card" @click="flipCard()" id="card" :index="id" class="flex justify-center items-center w-full h-full bg-cyan-400 transition ease-in-out duration-300 cursor-pointer">
        <img v-if="flipped" :src="src" alt="" class="w-auto h-auto">
        <div v-else>{{ index }}</div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity"
import { watch } from "@vue/runtime-core";
import { useStore } from 'vuex';
import { disableCardEvents } from '@/utils/functions'

const props = defineProps(['index', 'src', 'name', 'id'])
const store = useStore();
const flipped = ref(false)
const card = ref()


function flipCard(){
    if (flipped.value) {
        return
    } 

    store.commit('Main/startTheGame')

    store.state.Main.matchCandidates.push({
        id: props.id,
        name: props.name,
        flipBackFunc: () => flipCardBack(),
        ref: card
    })

    if (store.state.Main.matchCandidates.length === 2) {
        disableCardEvents()
        setTimeout(() => {
            store.dispatch('Main/testMatch');
        }, 300);
    }    

    store.commit('Main/countDownMaxPlays')

    flipCardForward()

    const audio = new Audio('/src/assets/audios/flip-effect.mp3');

    audio.play();

    if (store.state.Main.playCounter == 0 && (store.state.Main.matchedCards.length != store.state.Main.cards.length) && store.state.Main.matchCandidates.length === 1) {
        store.dispatch('Main/gameOver')
    }     
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

watch(() => store.state.Main.reset, () => {
    flipCardBack()
})


</script>