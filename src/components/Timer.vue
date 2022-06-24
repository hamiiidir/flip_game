<template>
    <div dir="rtl" class="flex items-center text-3xl font-bold">
        <div class="ml-3">زمان</div>
        <div>{{ seconds }}: </div>
        <div>{{ minutes }}</div>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { onMounted, watch } from '@vue/runtime-core';
import { useStore } from 'vuex';
const store = useStore();
const time = ref(store.state.Main.startingMinutes * 60)
const minutes = ref()
const seconds = ref()
let interval

function updateCountdown(){
    if (time.value == 0) {
        clearInterval(interval)
    }    

    updateSecondsAndMinutes()

    time.value = time.value - 1

}

function updateSecondsAndMinutes(){
    minutes.value = Math.floor(time.value / 60)

    minutes.value = minutes.value < 10 ? '0' + minutes.value : minutes.value

    seconds.value = time.value % 60

    seconds.value = seconds.value < 10 ? '0' + seconds.value : seconds.value
}


onMounted(() => {
    updateCountdown()
    interval = setInterval(updateCountdown, 1000)
})

watch(() => store.state.Main.resetSensor, () => {
    time.value = store.state.Main.startingMinutes * 60
    updateSecondsAndMinutes()
})

</script>