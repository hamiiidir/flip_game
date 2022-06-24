<template>
    <div dir="rtl" id="timer" class="flex items-center text-3xl font-bold">
        <div class="ml-3">زمان</div>
        <div>{{ seconds }}: </div>
        <div>{{ minutes }}</div>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { onMounted, watch } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { disableCardEvents } from '@/utils/functions'
const store = useStore();
const time = ref(store.getters['Main/startingSeconds'])
const minutes = ref()
const seconds = ref()
let interval

function updateCountdown(){
    if (time.value == 0 && (store.state.Main.matchedCards.length != store.state.Main.cards.length)) {
        disableCardEvents()
        store.dispatch('Main/gameOver', 'timeout')
    }    

    updateSecondsAndMinutes()

    time.value--

    store.commit('Main/updateTimeCounter', time.value)

}

function updateSecondsAndMinutes(){
    minutes.value = Math.floor(time.value / 60)

    minutes.value = minutes.value < 10 ? '0' + minutes.value : minutes.value

    seconds.value = time.value % 60

    seconds.value = seconds.value < 10 ? '0' + seconds.value : seconds.value
}


onMounted(() => {
    updateCountdown()
})

watch(() => store.state.Main.start, () => {
    if (store.state.Main.start) {
        updateSecondsAndMinutes()
        updateCountdown()
        interval = setInterval(updateCountdown, 1000)
        store.commit('Main/setInterval', interval)      
    }
})

watch(() => store.state.Main.reset, () => {
    time.value = store.getters['Main/startingSeconds']

    updateSecondsAndMinutes()

    clearInterval(store.state.Main.timerInterval)
})

</script>